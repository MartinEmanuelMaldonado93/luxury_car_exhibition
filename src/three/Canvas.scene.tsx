import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Effects from "./Effects.post_processing";

export default function CanvasScene() {
  return (
		<Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
			<color attach="background" args={["#15151a"]} />
			 
			{/* <Effects /> */}
		</Canvas>
	);
}
