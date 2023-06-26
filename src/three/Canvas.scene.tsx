"use client";
import { Canvas } from "@react-three/fiber";
import Effects from "./Effects.post_processing";
import { ShowCase } from "./ShowCase";
import { Loader, Stats } from "@react-three/drei";
import { Boxes } from "./components/Boxes";

export default function CanvasScene() {
	return (
		<>
			<Canvas
				style={{ height: "100vh" }}
				shadows
				camera={{ position: [0, 3, 9], fov: 42 }}
			>
				<color attach="background" args={["#15151a"]} />
				<ShowCase />
				{/* <Boxes /> */}
				<Effects />
				<Stats />
			</Canvas>
			<Loader />
		</>
	);
}
