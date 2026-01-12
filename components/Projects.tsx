'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Shield, Zap } from 'lucide-react'

const projects = [
  {
    title: 'FatRun LogWatch API',
    type: 'Projet académique',
    description: 'Développement d\'une API sécurisée pour MongoDB avec backend Java Spring Boot et frontend Angular.',
    features: [
      'Authentification sécurisée avec JWT et documentation OpenAPI/Swagger',
      'Backend : Java Spring Boot, PostgreSQL',
      'Frontend : Angular avec visualisation de données',
      'Pipeline CI/CD avec Docker',
      'API REST complète pour la gestion des logs',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'JWT', 'Docker', 'CI/CD'],
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Explorateur MBOA',
    type: 'Projet académique',
    description: 'Application web de découverte et de valorisation du patrimoine culturel camerounais.',
    features: [
      'Architecture & Data : Angular, Firebase',
      'Expérience Utilisateur (UX/UI) : Interface moderne et fluide inspirée du streaming',
      'Promotion de la culture camerounaise à travers une expérience numérique immersive',
    ],
    tech: ['Angular', 'Firebase'],
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'TIAGO - Robot Assistant Vocal',
    type: 'Journée Portes Ouvertes CESI',
    description: 'Conception et programmation d\'un robot interactif avec intelligence artificielle et reconnaissance vocale.',
    features: [
      'Intelligence Artificielle : reconnaissance vocale et synthèse textuelle NLP en Python',
      'Interaction Temps Réel : logique comportementale du robot',
      'Robot interactif présenté lors de la Journée Portes Ouvertes CESI',
    ],
    tech: ['Python', 'NLP', 'IA', 'Reconnaissance vocale'],
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projets
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-3xl p-8 hover:scale-105 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon size={32} className="text-white" />
              </div>

              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4">
                {project.type}
              </span>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

