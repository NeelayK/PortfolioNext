'use client'

import { Canvas } from '@react-three/fiber'
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Glitch,
  Noise,
  Scanline
} from '@react-three/postprocessing'
import clsx from 'clsx'
import { KernelSize } from 'postprocessing'
import { Suspense, useEffect, useState } from 'react'
import ModelCanvas from './ModelCanvas'

interface Props {
  name: string
  path: string
  selected: boolean
  onSelect: () => void
}

export default function ModelViewer({ name, path, selected, onSelect }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const check = () => {
      const dark = document.documentElement.classList.contains('dark')
      setIsDarkMode(dark)
    }

    check()

    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      onClick={onSelect}
      className={clsx(
        'w-full h-96 rounded-lg cursor-pointer overflow-hidden'
      )}
    >
      <Canvas shadows camera={{ position: [0, 5, 0], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
<Suspense fallback={null}>
  <ModelCanvas
    path={path}
    selected={selected}
    isDarkMode={isDarkMode}
  />
</Suspense>

<EffectComposer>
  <Bloom
    intensity={selected ? 2.5 : 1.5}
    luminanceThreshold={0.3}
    luminanceSmoothing={0.9}
    kernelSize={KernelSize.LARGE}
  />
  <Noise opacity={selected ? 0.2 : 0.02} />
  <Scanline density={selected ? 1.25 : 1.0} />
  <ChromaticAberration offset={new Vector2(0.0005, 0.002)} />
  <Glitch
    delay={new Vector2(2, 5)}
    duration={new Vector2(0.3, 0.7)}
    strength={new Vector2(0.2, 0.5)}
  />
</EffectComposer>

      </Canvas>
    </div>
  )
}
