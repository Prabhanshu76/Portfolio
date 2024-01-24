import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#a5adb0",
  });
  const data = useScroll();

  const tl = useRef();

  useFrame(() => {
    if (data.scroll) {
      tl.current.progress(data.scroll.current);
    }
    material.current.color = new THREE.Color(color.current.color);
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#a0a9ac",
    });
    tl.current.to(color.current, {
      color: "#929ca0",
    });
    tl.current.to(color.current, {
      color: "#849094",
    });
    tl.current.to(color.current, {
      color: "#778488",
    });
    tl.current.to(color.current, {
      color: "#6b767b",
    });
    tl.current.to(color.current, {
      color: "#5f696d",
    });
    tl.current.to(color.current, {
      color: "#535c5f",
    });
    tl.current.to(color.current, {
      color: "#474f52",
    });
    tl.current.to(color.current, {
      color: "#3b4244",
    });
  }, []);

  return (
    <group>
      <Sphere scale={[50, 50, 50]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
