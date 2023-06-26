import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFCyberTruck = GLTF & {
	nodes: {
		interior001: THREE.Mesh;
		interior001_1: THREE.Mesh;
		interior001_2: THREE.Mesh;
		interior001_3: THREE.Mesh;
		interior001_4: THREE.Mesh;
		interior001_5: THREE.Mesh;
		interior001_6: THREE.Mesh;
		steer: THREE.Mesh;
		tires001: THREE.Mesh;
		tires001_1: THREE.Mesh;
	};
	materials: {
		lights: THREE.MeshStandardMaterial;
		body: THREE.MeshStandardMaterial;
		glass: THREE.MeshStandardMaterial;
		glassframes: THREE.MeshStandardMaterial;
		warninglights: THREE.MeshStandardMaterial;
		black: THREE.MeshStandardMaterial;
		shader: THREE.MeshStandardMaterial;
		gray: THREE.MeshPhysicalMaterial;
		tires: THREE.MeshStandardMaterial;
		rims: THREE.MeshStandardMaterial;
	};
};

export type CustomUniforms = {
	uniforms: {
		uAlpha: {
			value: number;
		};
		uMultiplier: {
			value: number;
		};
		uColorA: {
			value: THREE.Color;
		};
		uColorB: {
			value: THREE.Color;
		};
		uTime: {
			value: number;
		};
	};
};
