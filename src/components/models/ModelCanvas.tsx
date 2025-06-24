
'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Props {
  path: string
  selected: boolean
  isDarkMode: boolean
}

export default function ModelCanvas({ path, selected }: Props) {
  const { scene } = useGLTF(path)
  const ref = useRef<THREE.Object3D>(null)

  useEffect(() => {
    console.log('Loading model:', path)
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat, idx) => {
            console.log(`Mesh ${mesh.name} material[${idx}].name:`, mat.name)
          })
        } else {
          console.log(`Mesh ${mesh.name} material.name:`, mesh.material.name)
        }

        const makeHoloMaterial = (baseColor: string) => {
          return new THREE.MeshBasicMaterial({
            color: baseColor,
            transparent: true,
            opacity: 0.6,               
            blending: THREE.AdditiveBlending,
            depthWrite: false,         
          })
        }

        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((origMat, idx) => {
            const name = origMat.name || ''
            let baseColorHex: string

            if (name === 'HoloBase') {
              baseColorHex = selected ? '#aa3333' : '#ffffff'   
            } else if (name === 'HoloGlow') {
              baseColorHex = selected ? '#220011' : '#444444' 
            } else {
              if (mesh.material) {
                baseColorHex = idx === 0
                  ? (selected ? '#aa3333' : '#ffffff')
                  : (selected ? '#220011' : '#444444')
              } else {
                baseColorHex = selected ? '#0077ff' : '#f'
              }
            }

            const holoMat = makeHoloMaterial(baseColorHex)
            holoMat.name = name || (idx === 0 ? 'HoloBase_fallback' : 'HoloGlow_fallback')
            return holoMat
          })
        } else {
          const name = mesh.material.name || ''
          let baseColorHex: string
          if (name === 'HoloBase') {
            baseColorHex = selected ? '#aa3333' : '#ffffff'
          } else if (name === 'HoloGlow') {
            baseColorHex = selected ? '#220011' : '#444444'
          } else {
            baseColorHex = selected ? '#aa3333' : '#ffffff'
          }
          mesh.material = makeHoloMaterial(baseColorHex)
          ;(mesh.material as THREE.MeshBasicMaterial).name = name || 'HoloBase_fallback'
        }
      }
    })
  }, [scene, selected, path])

  useFrame(({ clock }) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.y += 0.003 

      const time = clock.getElapsedTime()
      const baseFlicker = 0.5
      const flickerAmplitude = 0.15   
      const flickerSpeed = 3     
      const flicker = baseFlicker + Math.sin(time * flickerSpeed) * flickerAmplitude

      ref.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              if (mat instanceof THREE.MeshBasicMaterial) {
                mat.opacity = flicker
              }
            })
          } else if (mesh.material instanceof THREE.MeshBasicMaterial) {
            mesh.material.opacity = flicker
          }
        }
      })
    }
  })

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={1.8}                      
      position={[0, -1, 0]}        
      rotation={[-Math.PI / 2, 0, 0]}  
    />
  )
}
