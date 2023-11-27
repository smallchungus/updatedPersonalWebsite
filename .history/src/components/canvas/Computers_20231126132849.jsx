import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLIF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene_gltf')

    return (
      <mesh>
        <hemisphereLight intensity=(0.15)
    )
}

export default Computers