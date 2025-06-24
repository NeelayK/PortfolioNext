
import React from 'react'

interface SectionTitleProps {
  title: string | React.ReactNode
  subtitle?: string
  badge?: string
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 flex-wrap">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h2>
        {badge && (
      <span className="bg-stain dark:bg-muted text-default dark:text-parchment px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
        {badge}
      </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
    </div>
  )
}
