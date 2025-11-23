'use client'

import Scene3D from '@/components/Scene3D'
import Navigation from '@/components/Navigation'
import About from '@/components/About'

export default function AboutPage() {
  return (
    <main className="relative">
      <Scene3D />
      <Navigation />
      <About />
    </main>
  )
}

