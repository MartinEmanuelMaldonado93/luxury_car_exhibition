"use client";
import { shaderMaterial, useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { CustomUniforms, GLTFCyberTruck } from "../types";
import disksVertex from "../shaders/cyber/disk.vertex.glsl";
import disksFragment from "../shaders/cyber/disk.fragment.glsl";
import stripesFragment from "../shaders/cyber/stripes.fragment.glsl";
import stripesVertex from "../shaders/cyber/stripes.vertex.glsl";
import { extend, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import {
	DisksShaderMaterial,
	StripesShaderMaterial,
} from "../shaders/shaderMaterialTS/materials";
import { MathUtils } from "three";

extend({ DisksShaderMaterial });
extend({ StripesShaderMaterial });

const URL_MODEL = "/models/cybertruck.gltf";
export function Cybertruck(props: JSX.IntrinsicElements["group"]) {
	/* Auto-generated by: https://github.com/pmndrs/gltfjsx */
	const { nodes, materials } = useGLTF(URL_MODEL) as GLTFCyberTruck;
	const tiresRef = useRef<THREE.Mesh>(null!);
	const stripesRef = useRef<THREE.ShaderMaterial>(null!); //diskRef
	const diskRef = useRef<THREE.ShaderMaterial>(null!); //diskRef
	const { shader } = useControls({
		shader: {
			options: ["none", "disks", "stripes"],
		},
	});
	const disksControls = useControls("disks", {
		alpha: {
			min: 0,
			max: 1,
			value: 0.5,
		},
		multiplier: {
			min: 1,
			max: 142,
			value: 42,
		},
		colorA: "#FF0000",
		colorB: "#0000FF",
	});
	const stripesControls = useControls("stripes", {
		alpha: {
			min: 0,
			max: 1,
			value: 0.5,
		},
		multiplier: {
			min: 1,
			max: 142,
			value: 42,
		},
		colorA: "#FF00FF",
		colorB: "#FFFF00",
	});
	// RAF
	useFrame((state, delta) => {
		if (diskRef.current) {
			diskRef.current.uniforms.uTime.value = state.clock.elapsedTime;
		}
		if (stripesRef.current) {
			stripesRef.current.uniforms.uTime.value = state.clock.elapsedTime;
		}
	});
	
	useEffect(() => {
		//console.log(nodes);
		materials.lights.toneMapped = false;
		materials.warninglights.toneMapped = false;
		materials.warninglights.color = new THREE.Color(82, 0, 0);
	}, []);

	const stripesUniforms: CustomUniforms = useMemo(
		() => ({
			uniforms: {
				uAlpha: { value: 0.5 },
				uMultiplier: { value: 42 },
				uColorA: { value: new THREE.Color(0x000000) },
				uColorB: { value: new THREE.Color(0x000000) },
				uTime: { value: 0 },
			},
		}),
		[]
	);
	const diskUniforms: CustomUniforms = useMemo(
		() => ({
			uniforms: {
				uAlpha: { value: 0.5 },
				uMultiplier: { value: 42 },
				uColorA: { value: new THREE.Color(0x000000) },
				uColorB: { value: new THREE.Color(0x000000) },
				uTime: { value: 0 },
			},
		}),
		[]
	);
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.interior001.geometry} material={materials.lights} />
			<mesh geometry={nodes.interior001_1.geometry} castShadow>
				<meshStandardMaterial {...materials.body} />
			</mesh>
			<mesh geometry={nodes.interior001_2.geometry}>
				<meshStandardMaterial
					opacity={0.92}
					envMapIntensity={1}
					transparent
					roughness={0.2}
					color={"black"}
				/>
			</mesh>
			<mesh
				geometry={nodes.interior001_3.geometry}
				material={materials.glassframes}
				castShadow
			/>
			<mesh
				geometry={nodes.interior001_4.geometry}
				material={materials.warninglights}
			/>
			<mesh
				geometry={nodes.interior001_5.geometry}
				material={materials.black}
				castShadow
			/>
			<mesh geometry={nodes.interior001_6.geometry}>
				{shader === "disks" && (
					<disksShaderMaterial
						//@ts-ignore
						ref={diskRef}
						transparent
						//@ts-ignore
						uAlpha={disksControls.alpha}
						uMultiplier={disksControls.multiplier}
						uColorA={disksControls.colorA}
						uColorB={disksControls.colorB}
						vertexShader={disksVertex}
						fragmentShader={disksFragment}
					/>
				)}
				{shader === "stripes" && (
					<stripesShaderMaterial
						//@ts-ignore
						ref={stripesRef}
						// args={[stripesUniforms]}
						transparent
						//@ts-ignore
						uAlpha={stripesControls.alpha}
						uMultiplier={stripesControls.multiplier}
						uColorA={stripesControls.colorA}
						uColorB={stripesControls.colorB}
						vertexShader={stripesVertex}
						fragmentShader={stripesFragment}
					/>
				)}
			</mesh>

			<mesh geometry={nodes.steer.geometry} material={materials.gray} />
			<mesh
				ref={tiresRef}
				geometry={nodes.tires001.geometry}
				material={materials.tires}
				castShadow
			/>
			<mesh
				geometry={nodes.tires001_1.geometry}
				material={materials.rims}
				castShadow
			/>
		</group>
	);
}

useGLTF.preload(URL_MODEL);
