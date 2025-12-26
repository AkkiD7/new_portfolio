'use client'

import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'
import indigoOpenBracket from '@/public/brackets/blue-opening.svg'
import indigoCloseBracket from '@/public/brackets/blue-closing.svg'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-36 max-w-[70rem] px-4"
    >
      <SectionHeading>
        <Image src={indigoOpenBracket} alt="" className="w-10 h-10" />
        <p className="title">My Projects</p>
        <Image src={indigoCloseBracket} alt="" className="w-10 h-10" />
      </SectionHeading>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
