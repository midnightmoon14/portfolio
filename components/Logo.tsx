'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Logo() {
  const letters = ['S', 'P', 'N']
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 12,
      },
    },
  }

  return (
    <Link href="/" className="block">
      <motion.div
        className="flex items-center gap-1.5 cursor-pointer group"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={letterVariants}
            whileHover={{
              y: -8,
              rotate: [0, -15, 15, -15, 0],
              transition: { 
                duration: 0.6,
                type: 'spring',
                stiffness: 300,
              },
            }}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.2,
                z: 50,
              }}
            >
              <motion.span
                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative z-10"
                style={{
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {letter}
              </motion.span>
              {/* Glow effect */}
              <motion.span
                className="absolute inset-0 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-md opacity-0 group-hover:opacity-50"
                style={{
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {letter}
              </motion.span>
            </motion.div>
            {index < letters.length - 1 && (
              <motion.span
                className="text-blue-400 text-xl font-bold mx-0.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: 'easeInOut',
                }}
              >
                ·
              </motion.span>
            )}
          </motion.div>
        ))}
        <motion.div
          className="ml-3 relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}

