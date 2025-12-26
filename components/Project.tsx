'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLink,
  githubLink,
}: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-black/5 dark:border-white/10
        bg-white dark:bg-white/10
        shadow-sm
        hover:shadow-xl
        transition
      "
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Content */}
        <div className="flex flex-col justify-between p-6 sm:w-[55%]">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-white/70 line-clamp-4">
              {description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="
                    rounded-full
                    bg-gray-900/80
                    px-3 py-1
                    text-[0.7rem]
                    uppercase
                    tracking-wide
                    text-white
                  "
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="
                  rounded-lg
                  border border-black/10 dark:border-white/20
                  px-5 py-2
                  text-sm
                  transition
                  hover:bg-black hover:text-white
                  dark:hover:bg-white dark:hover:text-black
                "
              >
                GitHub
              </a>
            )}
            <a
              href={projectLink}
              target="_blank"
              className="
                rounded-lg
                bg-gray-900
                px-5 py-2
                text-sm
                text-white
                transition
                hover:bg-gray-950
              "
            >
              Live
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative sm:w-[45%] hidden sm:block">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            fill
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-[1.05]
            "
          />
        </div>
      </div>
    </motion.article>
  )
}
