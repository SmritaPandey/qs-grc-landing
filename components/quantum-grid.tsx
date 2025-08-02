"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function QuantumPoints() {
  const ref = useRef<THREE.Points>(null!)
  const { size } = useThree()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)

    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00d4ff" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

function GridLines() {
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const lines = useMemo(() => {
    const group = new THREE.Group()
    const material = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.2,
    })

    // Create grid lines
    for (let i = -10; i <= 10; i += 2) {
      // Horizontal lines
      const hGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-10, 0, i),
        new THREE.Vector3(10, 0, i),
      ])
      const hLine = new THREE.Line(hGeometry, material)
      group.add(hLine)

      // Vertical lines
      const vGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i, 0, -10),
        new THREE.Vector3(i, 0, 10),
      ])
      const vLine = new THREE.Line(vGeometry, material)
      group.add(vLine)
    }

    return group
  }, [])

  return <primitive ref={ref} object={lines} />
}

export function QuantumGrid() {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <QuantumPoints />
        <GridLines />
      </Canvas>
    </div>
  )
}
