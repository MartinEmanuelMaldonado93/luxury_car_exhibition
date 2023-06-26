import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MathUtils, Mesh } from "three";
import { useGLTF } from "@react-three/drei";
const URL_MODEL = "/models/Chevrolet_Corvette/scene.gltf";
// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a)
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function CorvetteCar() {
	const gltf = useLoader(GLTFLoader, URL_MODEL);

	useEffect(() => {
		gltf.scene.scale.set(0.005, 0.005, 0.005);
		gltf.scene.position.set(0, -0.035, 0);
		gltf.scene.traverse((object) => {
			if (object instanceof Mesh) {
				object.castShadow = true;
				object.receiveShadow = true;
				object.material.envMapIntensity = 20;
			}
		});
	}, [gltf]);
	
	const RAD = MathUtils.degToRad(5);
	useFrame((state, delta) => {
		let elapsed = state.clock.getElapsedTime();

		let group = gltf.scene.children[0].children[0].children[0];
		group.children[0].rotation.x = elapsed * RAD;
		group.children[2].rotation.x = elapsed * RAD;
		group.children[4].rotation.x = elapsed * RAD;
		group.children[6].rotation.x = elapsed * RAD;
	});

	return <primitive object={gltf.scene} />;
}

useGLTF.preload(URL_MODEL);
