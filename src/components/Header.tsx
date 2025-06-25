'use client'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY && currentY > 100)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 w-full bg-light-header dark:bg-dark-header backdrop-blur-sm z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-8 px-4 sm:px-6 md:px-12">
        <a
          href="#hero"
          className="text-xl font-bold text-default dark:text-parchment cursor-none"
        >
          Neelay Kamat
        </a>
        <nav className="flex items-center space-x-10">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
