import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// 静止的小球组件
const StaticSphere: React.FC = () => {
  return (
    <mesh position={[0, 0.5, 0]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" roughness={0.3} metalness={0.1} />
    </mesh>
  )
}

// 地面组件
const Ground: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="rgb(255, 240, 180)" />
    </mesh>
  )
}

// 主场景组件
const Scene3D: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#87CEEB' }}>
      <Canvas
        camera={{
          position: [5, 5, 5],
          fov: 50
        }}
        shadows
        onCreated={({ camera }) => {
          // 设置摄像机45度角俯视
          camera.lookAt(0, 0, 0)
        }}
      >
        {/* 环境光 */}
        <ambientLight intensity={1.2} />
        
        {/* 主光源 - 产生阴影 */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={2.0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />
        
        {/* 额外的填充光 */}
        <directionalLight
          position={[-5, 8, -5]}
          intensity={0.8}
          color="#ffffff"
        />
        
        {/* 地面 */}
        <Ground />
        
        {/* 静止的小球 */}
        <StaticSphere />
        
        {/* 轨道控制器 */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>
    </div>
  )
}

export default Scene3D