'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Particules connectées formant un réseau
function NetworkParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const { positions, connections, connectionCount } = useMemo(() => {
    const particleCount = 120
    const pos = new Float32Array(particleCount * 3)
    const conn: number[] = []
    
    // Créer les positions des particules
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      const radius = 6 + Math.random() * 4
      const height = (Math.random() - 0.5) * 8
      
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = height
      pos[i * 3 + 2] = Math.sin(angle) * radius
    }
    
    // Calculer les connexions entre particules proches
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        if (dist < 5.5) {
          conn.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2])
          conn.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2])
        }
      }
    }
    
    return {
      positions: pos,
      connections: new Float32Array(conn),
      connectionCount: conn.length / 3,
    }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
    }
  })

  return (
    <group>
      {/* Lignes de connexion */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connectionCount}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0ea5e9" opacity={0.25} transparent />
      </lineSegments>
      
      {/* Particules */}
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Grille technologique animée
function TechGrid() {
  const gridRef = useRef<THREE.GridHelper>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.05
      gridRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <gridHelper
      ref={gridRef}
      args={[25, 40, '#0ea5e9', '#1e40af']}
      position={[0, 0, -8]}
      rotation={[Math.PI / 2.2, 0, 0]}
    />
  )
}

// Formes géométriques technologiques flottantes
function TechGeometry() {
  const torusRef = useRef<THREE.Mesh>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3
      torusRef.current.rotation.y = time * 0.5
      torusRef.current.position.y = Math.sin(time) * 0.5
      torusRef.current.position.x = Math.cos(time * 0.5) * 2.5
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4
      boxRef.current.rotation.z = time * 0.6
      boxRef.current.position.y = Math.cos(time * 0.7) * 0.5
      boxRef.current.position.x = -Math.cos(time * 0.5) * 2.5
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2
      sphereRef.current.rotation.y = time * 0.4
      sphereRef.current.position.y = Math.sin(time * 0.8) * 1.2
      sphereRef.current.scale.setScalar(1 + Math.sin(time) * 0.15)
    }
  })

  return (
    <>
      {/* Torus - représentation de circuit/connection */}
      <mesh ref={torusRef} position={[2.5, 1, -3]}>
        <torusGeometry args={[1, 0.35, 16, 100]} />
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe
          emissive="#0ea5e9"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Box wireframe - représentation de données/code */}
      <mesh ref={boxRef} position={[-2.5, -1, -3]}>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Sphere - représentation de node/serveur */}
      <mesh ref={sphereRef} position={[0, 2, -4]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          emissive="#ec4899"
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  )
}

// Particules de fond en mouvement
function BackgroundParticles() {
  const ref = useRef<THREE.Points>(null)
  const particles = useMemo(() => {
    const positions = new Float32Array(2500 * 3)
    for (let i = 0; i < 2500; i++) {
      const x = (Math.random() - 0.5) * 60
      const y = (Math.random() - 0.5) * 60
      const z = (Math.random() - 0.5) * 60
      positions.set([x, y, z], i * 3)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0003
      ref.current.rotation.y -= 0.0005
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#8b5cf6" />
        <BackgroundParticles />
        <NetworkParticles />
        <TechGrid />
        <TechGeometry />
      </Canvas>
    </div>
  )
}
