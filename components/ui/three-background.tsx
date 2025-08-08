"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"
import * as THREE from "three"
import { useReducedMotion } from "framer-motion"

type ThreeBackgroundProps = {
  currentSlide: number
}

function Starfield({ rotate = true }: { rotate?: boolean }) {
  const count = 1500
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // random points in a sphere
      const r = Math.cbrt(Math.random()) * 10
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      arr[i * 3] = x
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = z
    }
    return arr
  }, [])

  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!rotate || !groupRef.current) return
    groupRef.current.rotation.y += delta * 0.02
    groupRef.current.rotation.x += delta * 0.005
  })

  const geomRef = useRef<THREE.BufferGeometry>(null)
  useEffect(() => {
    if (geomRef.current) {
      geomRef.current.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      )
    }
  }, [positions])

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry ref={geomRef} />
        <pointsMaterial
          size={0.02}
          transparent
          opacity={0.65}
          color={new THREE.Color("#67e8f9")}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function FloatingOrbs({ hue = 200, rotate = true }: { hue?: number; rotate?: boolean }) {
  const color1 = new THREE.Color(`hsl(${hue}, 100%, 65%)`)
  const color2 = new THREE.Color(`hsl(${(hue + 80) % 360}, 100%, 65%)`)
  const color3 = new THREE.Color(`hsl(${(hue + 160) % 360}, 100%, 65%)`)
  const groupRef = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (!rotate || !groupRef.current) return
    groupRef.current.rotation.z += delta * 0.05
  })

  return (
    <group ref={groupRef}>
      <mesh position={[-2.5, 1.5, -4]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial color={color1} transparent opacity={0.18} emissive={color1} emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[2.2, -0.8, -3]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color={color2} transparent opacity={0.16} emissive={color2} emissiveIntensity={0.12} />
      </mesh>
      <mesh position={[0.4, 2.2, -5]}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial color={color3} transparent opacity={0.12} emissive={color3} emissiveIntensity={0.1} />
      </mesh>
    </group>
  )
}

export function ThreeBackground({ currentSlide }: ThreeBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()

  // Pick a base hue per slide for a subtle color shift
  const hues = [190, 10, 200, 270, 140, 190, 40, 310, 200, 250, 220]
  const hue = hues[currentSlide] ?? 200

  // Camera parallax (track mouse globally so pointer-events remain disabled on overlay)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  useEffect(() => {
    if (prefersReducedMotion) return
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      mouseRef.current = { x: x * 2 - 1, y: y * 2 - 1 }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [prefersReducedMotion])

  function CameraRig() {
    const { camera } = useThree()
    useFrame(() => {
      const targetX = prefersReducedMotion ? 0 : mouseRef.current.x * 0.6
      const targetY = prefersReducedMotion ? 0 : -mouseRef.current.y * 0.4
      camera.position.x += (targetX - camera.position.x) * 0.05
      camera.position.y += (targetY - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)
    })
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={[new THREE.Color(0x0b1220), 10, 22]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color={new THREE.Color(`hsl(${hue}, 100%, 70%)`)} />
        <directionalLight position={[-5, -3, -2]} intensity={0.2} color={new THREE.Color(`hsl(${(hue + 120) % 360}, 100%, 70%)`)} />

        <CameraRig />
        <Starfield rotate={!prefersReducedMotion} />
        <FloatingOrbs hue={hue} rotate={!prefersReducedMotion} />
      </Canvas>
    </div>
  )
}
