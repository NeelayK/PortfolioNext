'use client'

import { useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import SectionWrapper from './SectionWrapper'
import ModelViewer from './models/ModelViewer'

interface Skill {
  SkillName: string
  SkillStr: number
  SkillType: number
}

const models = [
  { name: 'Python', path: '/models/Skill1.glb', type: 1 },
  { name: 'Web Dev', path: '/models/Skill2.glb', type: 2 },
  { name: 'Creative', path: '/models/Skill3.glb', type: 3 }
]

export default function AboutSection() {
  const [selected, setSelected] = useState(models[1].name)
  const [displaySkills, setDisplaySkills] = useState<Skill[]>([])
  const [isFading, setIsFading] = useState(false)
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    async function fetchSkills() {
      const selectedModel = models.find((m) => m.name === selected)
      if (!selectedModel) return

      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('SkillType', selectedModel.type)
        .order('SkillStr', { ascending: false })

      if (error) {
        console.error(error)
        return
      }

      setIsFading(true)

      if (fadeTimeout.current) {
        clearTimeout(fadeTimeout.current)
      }

      fadeTimeout.current = setTimeout(() => {
        setDisplaySkills(data || [])
        setIsFading(false)
      }, 500)
    }

    fetchSkills()

    return () => {
      if (fadeTimeout.current) {
        clearTimeout(fadeTimeout.current)
      }
    }
  }, [selected])

  return (
    <SectionWrapper id="about" bgVariant="parchment">
      <h2 className="text-6xl font-bold mb-8 text-parchment text-center">
        Explore My{' '}
        <span className="relative inline-block font-extrabold highlight-name z-1">
          Skills
        </span>
      </h2>

      <div className="flex md:flex-row gap-6 w-full justify-center items-center mb-12">
        <div className="flex flex-col md:flex-row gap-52 w-full justify-center items-center mb-12">
          {models.map((model) => (
            <div key={model.name} className="flex flex-col items-center">
              <span className="mt-2 text-lg font-semibold text-parchment dark:text-parchment">
                {model.name}
              </span>
              <ModelViewer
                name={model.name}
                path={model.path}
                selected={selected === model.name}
                onSelect={() => setSelected(model.name)}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full flex flex-wrap justify-center gap-8 py-8 skill-container ${
          isFading ? 'fade-out' : ''
        }`}
      >
        {displaySkills.map((skill) => {
          let shadowColor = ''
          if (skill.SkillStr >= 5) shadowColor = 'drop-shadow-[0_0_7px_#aa4444]'

          let strokeColor = 'stroke-fuchsia-200'
          if (skill.SkillStr >= 5) strokeColor = 'stroke-rose-500'
          else if (skill.SkillStr === 4) strokeColor = 'stroke-rose-400'
          else if (skill.SkillStr === 3) strokeColor = 'stroke-pink-400'
          else if (skill.SkillStr === 2) strokeColor = 'stroke-pink-300'

          return (
            <div
              key={skill.SkillName}
              className="flex flex-col items-center justify-center bg-parchment dark:bg-muted sm:w-1/2 md:w-1/5 p-4 rounded-lg overflow-hidden"
            >
              <svg className={`w-28 h-28 mb-4 ${shadowColor}`} viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  className={`${strokeColor} transition-all duration-1000 ease-out`}
                  strokeDasharray={`${(skill.SkillStr / 5) * 100} 100`}
                  strokeWidth="3"
                />
              </svg>
              <span className="mt-2 text-lg font-semibold text-parchment dark:text-parchment">
                {skill.SkillName}
              </span>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
