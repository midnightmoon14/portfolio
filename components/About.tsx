'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    institution: 'CESI BORDEAUX',
    degree: 'Master 2 Informatique',
    period: '2025 – 2026',
    icon: GraduationCap,
  },
  {
    institution: 'INSTITUT SAINT JEAN (CAMEROUN)',
    degree: 'Bachelor / Licence Informatique',
    period: '2021 - 2025',
    icon: Award,
  },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          À Propos
        </motion.h2>

        <motion.div
          className="glass-dark rounded-3xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Étudiante en <span className="text-blue-400 font-semibold">Master 2 Informatique</span>,
            spécialisée en développement fullstack Java/Angular ou React avec une forte appétence
            pour le backend Java, les APIs et les bases de données.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Je suis à la recherche d'un <span className="text-purple-400 font-semibold">stage de 6 mois</span> en
            développement fullstack ou backend Python à partir de février/mars 2026. Mobile sur toute
            la France, je suis prête à me déplacer pour rejoindre une équipe innovante et contribuer
            activement à vos projets.
          </p>
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Formation
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-2xl p-8 hover:scale-105 transition-transform"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <edu.icon size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">{edu.institution}</h4>
                  <p className="text-blue-400 font-semibold mb-2">{edu.degree}</p>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

