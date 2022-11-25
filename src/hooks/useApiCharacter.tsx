import {useEffect, useState} from "react";
import { CharacterI } from '../components/Character/Character';

export const useApiCharacter = (status: string) => {
	const [character, setCharacter] = useState<CharacterI[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const getCharacter = async () => {
		const url = `https://rickandmortyapi.com/api/character/?status=${status}`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			setCharacter(data.results);
			setIsLoading(false);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
	
		getCharacter();
	
	}, [status]);

	return {character, isLoading, error};
};
