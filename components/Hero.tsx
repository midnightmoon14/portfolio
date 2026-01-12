'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Sirielle Pontue Nguefa
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-4xl mb-4 text-gray-300"
          variants={itemVariants}
        >
          <span className="gradient-text">Java Backend</span> &{' '}
          <span className="gradient-text">Full Stack</span> Developer
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          En cours d&apos;obtention d&apos;un Diplôme d&apos;ingénieur en Informatique, spécialisée en développement fullstack Java/Angular ou React avec une
          forte appétence pour le backend Java, les APIs et les bases de données.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <a
            href="mailto:siriellen0@gmail.com"
            className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/20 transition-all"
          >
            <Mail size={20} />
            <span>siriellen0@gmail.com</span>
          </a>
          <a
            href="tel:+33534338989"
            className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/20 transition-all"
          >
            <Phone size={20} />
            <span>07 53 43 89 89</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sirielle-pontue-nguefa-ngouowoui-488511318/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/20 transition-all"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 text-gray-400"
          variants={itemVariants}
        >
          <MapPin size={18} />
          <span>33290 Blanquefort, France</span>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={itemVariants}
        >
          <Link href="/contact">
            <motion.div
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/50 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me Contacter
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

