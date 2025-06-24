
'use client'

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

    setIsDark(useDark)
    document.documentElement.classList.toggle('dark', useDark)
  }, [])

  return <>{children}</>
}
