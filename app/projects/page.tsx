'use client'

import Scene3D from '@/components/Scene3D'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Projects'

export default function ProjectsPage() {
  return (
    <main className="relative">
      <Scene3D />
      <Navigation />
      <Projects />
    </main>
  )
}

