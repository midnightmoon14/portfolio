'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        <motion.div
          className="glass-dark rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.a
              href="tel:+33534338989"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 transition-transform group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Téléphone</p>
                <p className="text-lg font-semibold">07 53 43 89 89</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:siriellen0@gmail.com"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 transition-transform group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-lg font-semibold">siriellen0@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sirielle-pontue-nguefa-ngouowoui-488511318/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 transition-transform group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                <Linkedin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                <p className="text-lg font-semibold">Sirielle Pontue Nguefa</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 p-6 glass rounded-2xl"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Localisation</p>
                <p className="text-lg font-semibold">33290 Blanquefort</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 p-6 glass rounded-2xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-gray-300 mb-4">
              Recherche d&apos;un stage de 6 mois en développement fullstack ou backend Python
            </p>
            <p className="text-blue-400 font-semibold">
              Disponible à partir de février/mars 2026 • Mobile sur toute la France
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

