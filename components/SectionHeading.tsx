'use client'

import { motion } from 'framer-motion'
import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="
        mb-14
        flex items-center justify-center gap-3
        text-center
        text-2xl sm:text-3xl
        font-semibold
        tracking-tight
      "
    >
      {children}
    </motion.h2>
  )
}
