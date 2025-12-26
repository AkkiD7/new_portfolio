'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] flex justify-center px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="
          mt-3
          w-full
          max-w-[72rem]
          rounded-full
          border border-white/40
          bg-white/80
          backdrop-blur-md
          shadow-lg shadow-black/[0.04]
          dark:bg-gray-950/80 dark:border-black/40
        "
      >
        <nav className="flex justify-center px-2 sm:px-6 py-2">
          <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-3">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                  }}
                  className={clsx(
                    'relative z-10 rounded-full px-4 py-2 text-sm font-medium transition',
                    'text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200',
                    {
                      'text-gray-950 dark:text-gray-200':
                        activeSection === link.name,
                    }
                  )}
                >
                  {link.name}

                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      className="
                        absolute inset-0 -z-10
                        rounded-full
                        bg-gray-200 dark:bg-gray-800
                      "
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}
