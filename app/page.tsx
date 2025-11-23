'use client'

import Scene3D from '@/components/Scene3D'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="relative">
      <Scene3D />
      <Navigation />
      <Hero />
    </main>
  )
}

