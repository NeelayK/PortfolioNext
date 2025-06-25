// src/components/Footer.tsx
import { Instagram, Linkedin, Mail, Codepen, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-light-section dark:bg-light-section py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center text-default space-y-4">
        <div className="flex justify-center gap-8">

          <a
            href="mailto:neelaykamat@gmail.com"
            className="group transition-transform duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-default group-hover:text-highlight dark:group-hover:text-highlight transition-colors duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/neelay-kamat-464079293"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-default group-hover:text-highlight dark:group-hover:text-highlight transition-colors duration-300" />
          </a>

          <a
            href="https://www.instagram.com/nawt_nile/"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-default group-hover:text-highlight dark:group-hover:text-highlight transition-colors duration-300" />
          </a>

          <a
            href="https://codepen.io/Neelay-Kamat"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
            aria-label="CodePen"
          >
            <Codepen className="w-6 h-6 text-default group-hover:text-highlight dark:group-hover:text-highlight transition-colors duration-300" />
          </a>

                    <a
            href="https://github.com/NeelayK"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
            aria-label="Github"
          >
            <Github className="w-6 h-6 text-default group-hover:text-highlight dark:group-hover:text-highlight transition-colors duration-300" />
          </a>
          
        </div>
      </div>
    </footer>
  )
}
