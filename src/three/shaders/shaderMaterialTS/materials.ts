"use client";
import { Object3DNode } from "@react-three/fiber";
import { Color, ShaderMaterial } from "three";
import { shaderMaterial } from "@react-three/drei";

export const StripesShaderMaterial = shaderMaterial(
	{
		uAlpha: 0.5,
		uMultiplier: 42,
		uColorA: new Color(0x48a11d),
		uColorB: new Color(0x48a11d),
		uTime: 0,
	},
	`
			 
		`,
	` 
		`
);
export const DisksShaderMaterial = shaderMaterial(
	{
		uAlpha: 0.5,
		uMultiplier: 42,
		uColorA: new Color(0x48a11d),
		uColorB: new Color(0x48a11d),
		uTime: 0,
	},
	`
			 
		`,
	` 
		`
);

// class MyPlaneShaderMaterial extends ShaderMaterial  {}

declare module "@react-three/fiber" {
	interface ThreeElements {
		stripesShaderMaterial: Object3DNode<
			typeof StripesShaderMaterial,
			typeof StripesShaderMaterial
		>;
		disksShaderMaterial: Object3DNode<
			typeof DisksShaderMaterial,
			typeof DisksShaderMaterial
		>;
	}
}
