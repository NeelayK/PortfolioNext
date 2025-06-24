'use client'

import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'

import Image from 'next/image'
interface Experience {
  title: string
  time: string
  desc: string
  link: string
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    async function fetchExperience() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('time', { ascending: false })
      if (error) console.error(error)
      else setExperiences(data)
    }
    fetchExperience()
  }, [])

  return (
    <SectionWrapper id="experience" bgVariant="stain">
  <div className="relative">
    <div className="absolute inset-0 right-0 top-0 h-full w-full pointer-events-none z-0">
      <Image
        src="/bag.svg"
        alt="Cog Background"
        width={1200}
        height={1200}
        className="absolute right-0 top-64 w-1/3 scale-[2] translate-x-1/3 opacity-10 dark:opacity-20"
      />
    </div>

    <h2 className="text-6xl font-bold mb-8 pt-32 pb-12 text-center relative z-10">
      <span className="relative inline-block font-extrabold highlight-name">
        Experience & Projects
      </span>
    </h2>

    <div className="relative z-10 max-w-5xl mx-auto space-y-10 px-4 pb-24">
      {experiences.map((exp, index) => {
        const content = (
          <div className="border-l-4 pl-4 border-highlight dark:border-muted transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-glow rounded-md py-2">
            <h3 className="text-xl font-semibold mb-1 text-glow">{exp.title}</h3>
            {exp.time && (
              <p className="text-sm italic mb-2 text-zinc-500 dark:text-zinc-400">
                {exp.time}
              </p>
            )}
            <p className="text-default dark:text-parchment text-base leading-relaxed">
              {exp.desc}
            </p>
          </div>
        )

        return exp.link ? (
          <a
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:cursor-pointer"
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        )
      })}
    </div>
  </div>
</SectionWrapper>

  )
}
