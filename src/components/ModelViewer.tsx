import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface ModelViewerProps {
  modelPath: string
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF(modelPath)
  
  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone()

  useEffect(() => {
    if (groupRef.current && clonedScene) {
      // Center the model
      const box = new THREE.Box3().setFromObject(clonedScene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      // Scale the model to fit in view
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim
      
      clonedScene.position.copy(center).multiplyScalar(-1)
      groupRef.current.scale.setScalar(scale)
      
      // Add some subtle rotation animation
      groupRef.current.rotation.y = 0
    }
    
    // Cleanup on unmount
    return () => {
      if (clonedScene) {
        disposeObject(clonedScene)
      }
    }
  }, [clonedScene])

  useFrame(() => {
    if (groupRef.current) {
      // Subtle rotation animation
      groupRef.current.rotation.y += 0.005
    }
  })



  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  )
}

useGLTF.preload('https://wsnbh.oss-cn-hangzhou.aliyuncs.com/models/13iubd9b1uwdi/scene.gltf')

// Cleanup function to dispose of geometries and materials
const disposeObject = (obj: THREE.Object3D) => {
  if (obj instanceof THREE.Mesh) {
    if (obj.geometry) obj.geometry.dispose()
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach(material => material.dispose())
      } else {
        obj.material.dispose()
      }
    }
  }
  obj.children.forEach(child => disposeObject(child))
}

export default ModelViewer