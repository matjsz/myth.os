"use client"

import { useState, useEffect } from 'react';
import MythosMap from './components/MythosMap';

export default function Home() {
	const [worldData, setWorldData] = useState([])

	useEffect(() => {
		fetch('./worldSeed.json')
			.then((response) => response.json())
			.then((json) => setWorldData(json));
	}, [])

	return (
		<div>
			<div>{worldData.length > 0 ? '' : 'Carregando mapa...'}</div>
			<MythosMap worldData={worldData} />
		</div>
	);
}
