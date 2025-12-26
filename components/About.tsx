'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import Image from 'next/image'
import indigoOpenBracket from '@/public/brackets/pink-opening.svg'
import indigoCloseBracket from '@/public/brackets/pink-closing.svg'

export default function About() {
  const { ref } = useSectionInView('About', 0.7)

  return (
    <motion.section
      ref={ref}
      id="about"
      className="
        scroll-mt-28
        mb-32
        max-w-[52rem]
        text-center
        leading-relaxed
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionHeading>
        <Image
          src={indigoOpenBracket}
          alt="Opening bracket"
          className="w-10 h-10"
        />
        <p className="title">About Me</p>
        <Image
          src={indigoCloseBracket}
          alt="Closing bracket"
          className="w-10 h-10"
        />
      </SectionHeading>

      <div className="mt-6 space-y-5 text-gray-700 dark:text-white/80">
        <p>
          I’m a <span className="font-medium">Full-Stack Developer</span> who helps
          startups and businesses build{' '}
          <span className="font-medium">
            reliable, scalable, and production-ready web applications
          </span>
          . I work mainly with{' '}
          <span className="font-medium">
            React, Node.js, and modern backend stacks
          </span>{' '}
          to turn ideas into real products.
        </p>

        <p>
          Over the past few years, I’ve worked on{' '}
          <span className="font-medium">real-world applications</span> involving
          dashboards, APIs, authentication systems, and cloud deployments. I care
          deeply about <span className="font-medium">clean code</span>,
          performance, and building systems that are easy to maintain and scale.
        </p>

        <p>
          Whether you’re a founder with an idea, a business needing a custom web
          solution, or a team looking for a reliable developer — I focus on{' '}
          <span className="font-medium">clear communication</span>, on-time
          delivery, and results that actually help your business grow.
          <br />
          <span className="font-medium block mt-2">
            Let’s build something valuable together.
          </span>
        </p>
      </div>
    </motion.section>
  )
}
