import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
          <primitive object={earth.scene} scale={5.5} position-y={-1} rotation-y={0} />


    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Adding lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
