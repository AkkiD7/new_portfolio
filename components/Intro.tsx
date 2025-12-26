'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare, FaTwitter } from 'react-icons/fa'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import profileImage from '@/public/pic1.jpg'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="
        scroll-mt-28
        mb-24
        max-w-[60rem]
        text-center
        px-4
      "
    >
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image
              src={profileImage}
              alt="Akshay Dabhade"
              width={120}
              height={120}
              priority
              className="
                rounded-full
                border-[0.35rem] border-white
                shadow-xl
                object-cover
              "
            />
          </motion.div>

          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              delay: 0.2,
            }}
            className="absolute -bottom-1 -right-1 text-3xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-6"
      >
        <h1 className="text-2xl sm:text-4xl font-semibold leading-tight">
          Hi, I’m <span className="font-bold">Akshay</span>.
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-white/80 max-w-[48rem] mx-auto">
          I build fast, scalable web applications for startups and businesses
          using <span className="font-medium">React & Node.js</span>.
        </p>

        <p className="mt-3 text-base text-gray-600 dark:text-white/70 max-w-[44rem] mx-auto">
          2+ years of experience building production-ready dashboards, APIs,
          and scalable systems used by real businesses.
        </p>

        <p className="mt-3 text-sm text-gray-500 dark:text-white/60">
          Available for freelance projects · Remote · IST timezone
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          mt-8
          flex flex-col sm:flex-row
          items-center justify-center
          gap-4
        "
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
          className="
            flex items-center gap-2
            rounded-full
            bg-gray-900 px-7 py-3
            text-white
            transition
            hover:bg-gray-950
            hover:scale-105
            active:scale-100
          "
        >
          Hire Me
          <BsArrowRight className="opacity-70" />
        </Link>

        <Link
          href="https://drive.google.com/file/d/1AYcLEW5zkwUO99uC_Y2OLtaHGFJp_FOg/view"
          target="_blank"
          className="
            flex items-center gap-2
            rounded-full
            border border-black/10
            bg-white px-7 py-3
            text-gray-800
            transition
            hover:scale-105
            dark:bg-white/10 dark:text-white
          "
        >
          View Resume
          <HiDownload className="opacity-70" />
        </Link>

        {/* Socials (ONLY size increased) */}
        <div className="flex gap-3 sm:ml-4">
          <Link
            href="https://www.linkedin.com/in/akkid7/"
            target="_blank"
            className="social-btn"
          >
            <BsLinkedin className="text-[1.6rem]" />
          </Link>

          <Link
            href="https://github.com/akkid7"
            target="_blank"
            className="social-btn"
          >
            <FaGithubSquare className="text-[1.7rem]" />
          </Link>

          <Link
            href="https://x.com/akkid7"
            target="_blank"
            className="social-btn"
          >
            <FaTwitter className="text-[1.6rem]" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
