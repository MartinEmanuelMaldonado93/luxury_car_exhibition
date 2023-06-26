import CanvasScene from '@/three/Canvas.scene';
import Image from 'next/image'

export default function Home() {
  return (
		<div className="flex min-h-screen flex-col  justify-between">
			<CanvasScene />
		</div>
	);
}
