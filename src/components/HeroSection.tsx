'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-dvh flex flex-col justify-center items-start px-6 md:px-12 py-24 overflow-hidden">

      {/* Background Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden pointer-events-none z-0">
        <Image
          src="/cog.svg"
          alt="Cog Background"
          width={1000}
          height={1000}
          className="h-full w-full object-contain scale-[1.25] translate-x-1/4 opacity-10 dark:opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-6 pl-3">
        <h1 className="text-6xl md:text-8xl font-medium leading-tight">
          Hello, I&apos;m <br />
          <span className="relative inline-block font-extrabold highlight-name z-1">
            Neelay Kamat
          </span>
        </h1>

        <p className="text-lg max-w-lg">
          A Data Science student, designer, and developer driven by a passion for building
          innovative tech solutions and continually expanding my knowledge. With a versatile
          skill set and a collaborative mindset, I’m eager to grow and adapt to meet the evolving
          needs of any team.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Link
            href="/#about"
            className="relative inline-block px-6 py-3 text-default dark:bg-muted dark:text-parchment rounded-lg transition duration-300 underline-animate"
          >
            Learn More
          </Link>

          <Link
            href="#experience"
            className="relative px-6 py-3 border-2 border-highlight text-default dark:bg-muted dark:text-parchment rounded-lg overflow-hidden group transition-colors duration-300"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-500">
              My Skills
            </span>
            <span className="absolute inset-0 bg-highlight/30 dark:bg-muted/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
          </Link>
        </div>
      </div>
    </section>
  )
}
