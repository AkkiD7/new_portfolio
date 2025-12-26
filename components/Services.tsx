'use client'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { servicesData } from '@/lib/data'
import Image from 'next/image'
import indigoOpenBracket from '@/public/brackets/indigo-opening.svg'
import indigoCloseBracket from '@/public/brackets/indigo-closing.svg'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

export default function Services() {
  const { ref } = useSectionInView('Services', 0.6)

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-mt-28 mb-36 max-w-[70rem] text-center px-4"
    >
      <SectionHeading>
        <Image
          src={indigoOpenBracket}
          alt=""
          className="w-10 h-10"
        />
        <p className="title">Services</p>
        <Image
          src={indigoCloseBracket}
          alt=""
          className="w-10 h-10"
        />
      </SectionHeading>


      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {servicesData.map((service, index) => {
          const Icon = service.icon

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="
                group
                relative
                rounded-2xl
                border border-black/5 dark:border-white/10
                bg-white dark:bg-white/10
                p-7
                text-left
                shadow-sm
                transition
                hover:shadow-xl
              "
            >
              {/* Subtle glow */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  ring-1 ring-black/10 dark:ring-white/20
                "
              />

              {/* Icon */}
              <div
                className="
                  mb-5
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-gray-100 dark:bg-white/10
                  transition
                  group-hover:scale-110
                "
              >
                <Icon className="text-xl text-gray-900 dark:text-white" />
              </div>

              <h3 className="mb-2 text-lg font-semibold">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-700 dark:text-white/70">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* CTA */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        viewport={{ once: true }}
        className="mt-14 text-gray-600 dark:text-white/60"
      >
        Need something custom?{' '}
        <a
          href="#contact"
          className="font-medium text-gray-900 dark:text-white underline underline-offset-4"
        >
          Let’s talk about your project →
        </a>
      </motion.p>
    </section>
  )
}
