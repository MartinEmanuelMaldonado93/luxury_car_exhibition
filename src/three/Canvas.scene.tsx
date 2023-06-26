"use client";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Effects from "./Effects.post_processing";
import { ShowCase } from "./ShowCase";
import { Loader } from "@react-three/drei";

export default function CanvasScene() {
	return (
		// a wrapper is needed bc canvas takes the size of the parent
		<div  >
			<Canvas
				style={{ height: "100vh" }}
				shadows
				camera={{ position: [0, 3, 9], fov: 42 }}
			>
				<color attach="background" args={["#15151a"]} />
				<ShowCase />
				<Effects />
			</Canvas>
			<Loader />
		</div>
	);
}
