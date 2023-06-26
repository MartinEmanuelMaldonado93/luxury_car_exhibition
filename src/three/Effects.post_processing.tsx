import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
	return (
		<EffectComposer>
			<Bloom
				mipmapBlur
				luminanceThreshold={1}
				intensity={1.42}
				// radius={0.72}
			/>
		</EffectComposer>
	);
}
