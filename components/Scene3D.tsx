'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedParticles() {
  const ref = useRef<THREE.Points>(null)
  const sphere = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20
      positions.set([x, y, z], i * 3)
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const meshRef2 = useRef<THREE.Mesh>(null)
  const meshRef3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -state.clock.elapsedTime * 0.4
      meshRef2.current.rotation.z = state.clock.elapsedTime * 0.2
      meshRef2.current.position.y = Math.cos(state.clock.elapsedTime) * 0.5
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = state.clock.elapsedTime * 0.6
      meshRef3.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2
    }
  })

  return (
    <>
      <mesh ref={meshRef} position={[-3, 0, -2]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#0ea5e9" wireframe />
      </mesh>
      <mesh ref={meshRef2} position={[3, 0, -2]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </mesh>
      <mesh ref={meshRef3} position={[0, 2, -3]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#ec4899" wireframe />
      </mesh>
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedParticles />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}

