'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const scaleCursor = () => cursor.classList.add('scale-150')
    const resetCursor = () => cursor.classList.remove('scale-150')

    document.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('button, a, .clickable').forEach((el) => {
      el.addEventListener('mouseenter', scaleCursor)
      el.addEventListener('mouseleave', resetCursor)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] w-6 h-6 rounded-full border border-white mix-blend-difference bg-white/10 backdrop-blur transition-transform duration-200"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}
