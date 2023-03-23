"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanavasLoader";
import { Mesh } from "three";

const Model = () => {
  const phone = useGLTF("./phone/scene.gltf");
  return (
    <primitive object={phone.scene} scale={4} position-y={0} rotation-y={0} />
  );
};

const PhoneCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
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
        <Model />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default PhoneCanvas;
