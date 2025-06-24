'use client'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  bgVariant?: 'parchment' | 'stain' | 'highlight' | 'coffee-dark'
}

export default function SectionWrapper({
  id,
  children,
  className = '',
  bgVariant = 'parchment',
}: SectionWrapperProps) {
  const bgClassMap: Record<string, string> = {
    parchment: 'bg-dark-section',
    stain: 'bg-stain dark:bg-muted',
    highlight: 'bg-highlight dark:bg-muted',
    'coffee-dark': 'bg-coffee-dark dark:bg-parchment',
  }

  const textClassMap: Record<string, string> = {
    parchment: 'text-default dark:text-parchment',
    stain: 'text-default dark:text-parchment',
    highlight: 'text-default dark:text-parchment',
    'coffee-dark': 'text-parchment dark:text-default',
  }

  const bgClass = bgClassMap[bgVariant] || bgClassMap['parchment']
  const textClass = textClassMap[bgVariant] || textClassMap['parchment']

  return (
    <section
      id={id}
      className={`${bgClass} ${textClass} w-full transition-colors duration-300 ${className}`}
    >
      <div className="w-full pt-20 pb-20">{children}</div>
    </section>
  )
}
