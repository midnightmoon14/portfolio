'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Langages & Frameworks',
    skills: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express',
      'Angular',
      'React',
      'Spring Boot',
      'HTML/CSS',
      'C#',
      'Python',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Bases de données',
    skills: ['PostgreSQL', 'MySQL', 'Supabase'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Outils & Technologies',
    skills: [
      'Git/GitHub',
      'Azure',
      'Make',
      'Forest Admin',
      'Webflow',
      'WordPress',
      'Microsoft Azure',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Compétences techniques',
    skills: [
      'Full Stack',
      'API REST',
      'CI/CD',
      'Cloud',
      'Responsive Design',
      'UX/UI',
    ],
    color: 'from-orange-500 to-red-500',
  },
]

const softSkills = [
  'Autonomie',
  'Réactivité',
  'Force de proposition',
  'Curiosité',
  'Sens de l\'impact social',
]

const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Courant' },
  { name: 'Espagnol', level: 'Intermédiaire' },
]

const hobbies = ['Danse', 'Lecture', 'Dessin', 'Nouvelles technologies']

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 glass rounded-full text-sm hover:scale-110 transition-transform"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="glass-dark rounded-3xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Soft Skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-blue-400">▹</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-dark rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Langues</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{lang.name}</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-dark rounded-3xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Loisirs</h3>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

