import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  Text,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={0.5} damping={0.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Text
          color="#000000"
          fontSize={0.1}
          position={[0, -0.25, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          anchorX="center"
          anchorY="middle"
        >
          {props.text}
        </Text>

      </mesh>
    </Float>

  );
};

const BallCanvas = ({ text }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball text={text} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
