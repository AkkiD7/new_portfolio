'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import indigoOpenBracket from '@/public/brackets/green-opening.svg'
import indigoCloseBracket from '@/public/brackets/green-closing.svg'

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.04,
      duration: 0.35,
      ease: 'easeOut',
    },
  }),
}

function SkillGroup({
  title,
  skills,
}: {
  title: string
  skills: readonly string[]
}) {
  return (
    <div className="text-center">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-white/60">
        {title}
      </h3>

      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            custom={index}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="
              cursor-default
              rounded-xl
              border border-black/5 dark:border-white/10
              bg-white dark:bg-white/10
              px-5 py-2.5
              text-sm font-medium
              text-gray-800 dark:text-white/80
              shadow-sm
              transition
              hover:shadow-md
            "
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.6)

  return (
    <section
      ref={ref}
      id="skills"
      className="
        scroll-mt-28
        mb-36
        max-w-[70rem]
        px-4
      "
    >
      <SectionHeading>
        <Image src={indigoOpenBracket} alt="" className="w-10 h-10" />
        <p className="title">My Skills</p>
        <Image src={indigoCloseBracket} alt="" className="w-10 h-10" />
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        <SkillGroup title="Frontend" skills={skillsData.frontend} />
        <SkillGroup title="Backend" skills={skillsData.backend} />
        <SkillGroup title="DevOps & Tools" skills={skillsData.devops} />
      </div>
    </section>
  )
}
