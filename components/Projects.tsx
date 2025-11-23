'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Shield, Zap } from 'lucide-react'

const projects = [
  {
    title: 'FatRun LogWatch API',
    type: 'Projet académique',
    description: 'Développement d\'une API sécurisée pour la manipulation de données MongoDB.',
    features: [
      'Authentification, gestion des logs et documentation OpenAPI',
      'Pipeline CI/CD (GitHub Actions + Docker)',
      'API REST pour stocker, filtrer et rechercher des logs applicatifs',
      'Base de données MongoDB avec filtres (date, niveau, service, etc.)',
      'Déploiement Docker et tests automatisés',
    ],
    tech: ['Java', 'Spring Boot', 'MongoDB', 'Docker', 'CI/CD'],
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Gestion des interventions',
    type: 'Projet personnel',
    description: 'Développée avec Java Spring Boot et Angular, l\'application permettait de gérer les interventions au sein de l\'école.',
    features: [
      'Inscription des étudiants et dépôt de requêtes vers les départements',
      'Interface administrateur pour l\'acceptation ou le refus des interventions',
      'Gestion du suivi et des notifications',
      'Développée avec Angular et Firebase',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'Firebase'],
    icon: Code,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Explorateur MBOA',
    type: 'Projet académique',
    description: 'Application web de découverte et de valorisation du patrimoine culturel camerounais.',
    features: [
      'Fonctionnalités de géolocalisation, recherche de lieux culturels et consultation d\'événements locaux',
      'Interface moderne inspirée de plateformes de streaming',
      'Objectif : promouvoir la culture camerounaise à travers une expérience numérique immersive',
    ],
    tech: ['Angular', 'Firebase', 'Geolocation API'],
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
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

