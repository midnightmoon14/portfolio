'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'MORISET CAMEROUN',
    position: 'Développeuse Junior',
    period: 'mai 2025 - août 2025',
    type: 'Stage',
    tasks: [
      'Conception et développement de modules backend en Java et Kafka pour l\'automatisation de flux internes',
      'Participation à l\'intégration d\'API REST et à la gestion de données distribuées',
      'Contribution à la mise en place d\'environnements CI/CD et au suivi des déploiements',
      'Collaboration avec l\'équipe produit pour améliorer la performance, la qualité du code et l\'expérience utilisateur',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expérience Professionnelle
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.position}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={20} />
                  <span className="text-lg">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.tasks.map((task, taskIndex) => (
                  <motion.li
                    key={taskIndex}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (taskIndex * 0.1) }}
                  >
                    <span className="text-blue-400 mt-2">▹</span>
                    <span>{task}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

