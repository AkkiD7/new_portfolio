'use client'

import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'
import SectionHeading from './SectionHeading'
import SubmitBtn from './SubmitButton'
import Image from 'next/image'
import indigoOpenBracket from '@/public/brackets/pink-opening.svg'
import indigoCloseBracket from '@/public/brackets/pink-closing.svg'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5)

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="
        scroll-mt-28
        mb-28
        w-[min(100%,40rem)]
        px-4
        text-center
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionHeading>
        <Image src={indigoOpenBracket} alt="" className="w-10 h-10" />
        <p className="title">Contact Me</p>
        <Image src={indigoCloseBracket} alt="" className="w-10 h-10" />
      </SectionHeading>

      {/* ✅ Stronger copy */}
      <p className="mt-2 text-gray-700 dark:text-white/80">
        <span className="font-medium">Let’s build something together.</span>
        <br />
        You can reach me directly at{' '}
        <a
          href="mailto:akshayyydabhade@gmail.com"
          className="font-medium underline underline-offset-4"
        >
          akshayyydabhade@gmail.com
        </a>{' '}
        or send a message below.
      </p>

      {/* Form */}
      <form
        className="mt-10 flex flex-col gap-3"
        action={async (formData) => {
          const { error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Message sent successfully!')
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email address"
          className="
            h-14
            rounded-lg
            border border-black/10 dark:border-white/20
            px-4
            text-sm
            transition
            focus:outline-none
            focus:ring-2 focus:ring-gray-900/20
            dark:bg-white/10 dark:text-white
            dark:focus:ring-white/20
          "
        />

        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Tell me about your project..."
          className="
            h-52
            rounded-lg
            border border-black/10 dark:border-white/20
            p-4
            text-sm
            transition
            focus:outline-none
            focus:ring-2 focus:ring-gray-900/20
            dark:bg-white/10 dark:text-white
            dark:focus:ring-white/20
          "
        />

        {/* ✅ Button wrapper enables hover glow + arrow motion */}
        <div className="group mt-2">
          <SubmitBtn />
        </div>

        {/* ✅ Trust hint */}
        <p className="mt-2 text-xs text-gray-500 dark:text-white/60">
          No spam. I usually reply within 24 hours.
        </p>
      </form>
    </motion.section>
  )
}
