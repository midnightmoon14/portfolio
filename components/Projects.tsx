'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Explorateur MBOA',
    type: 'Projet académique',
    description:
      "Développement d'applications web en Java Spring Boot et Angular pour automatiser des processus internes.",
    features: [
      "Développement d'applications web en Java Spring Boot et Angular pour automatiser des processus internes",
      "Conception d'API REST et intégration PostgreSQL pour améliorer les échanges entre systèmes",
      "Collaboration avec les équipes métier pour identifier les besoins techniques",
      "Réduction du temps de traitement des tâches internes et amélioration de la fiabilité des échanges entre applications",
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'API REST', 'PostgreSQL'],
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'TIAGO – Robot Assistant Vocal',
    type: 'Projet réalisé pour la Journée Portes Ouvertes du CESI',
    description:
      "Développement d'un robot interactif d’accueil basé sur le robot TIAGO, avec traitement du langage naturel et interactions vocales.",
    features: [
      "Développement d'un robot interactif d’accueil basé sur le robot TIAGO",
      'Implémentation d’un système de traitement du langage naturel permettant la compréhension et la génération de réponses en temps réel',
      "Programmation du comportement du robot pour fournir des informations automatisées sur les formations et les locaux de l'école",
      "Intégration d'API d’intelligence artificielle pour améliorer la qualité des interactions vocales",
      "Amélioration de l’expérience d’accueil lors de l’événement et réduction des demandes d’assistance humaine grâce à un assistant vocal autonome et interactif",
    ],
    tech: ['Python', 'NLP', 'IA', 'Reconnaissance vocale', 'Robotique'],
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Projet IA – Analyse intelligente de tickets (en cours)',
    type: 'Projet académique',
    description:
      "Développement d’une application de gestion intelligente de tickets avec classification automatique et génération de résumés.",
    features: [
      'Développement d’une application React de gestion intelligente de tickets',
      'Intégration d’une API IA pour la classification automatique et la génération de résumés',
      'Optimisation du traitement des demandes et amélioration de la productivité des utilisateurs',
    ],
    tech: ['React', 'IA', 'Classification', 'Résumé automatique'],
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
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
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <project.icon size={32} className="text-white" />
              </div>

              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4">
                {project.type}
              </span>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
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