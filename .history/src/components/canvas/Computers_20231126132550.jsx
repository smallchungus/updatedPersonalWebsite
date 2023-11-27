import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLIF } from '@react-three/drei';

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene_gltf')
}

export default Computers