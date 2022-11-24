import {useEffect, useState} from "react";
export const useApiCharacter = (status: string) => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/?statu=${status}`)
			.then((response) => response.json())
			.then((data) => {
				setCharacter(data.results);
				setIsLoading(false);
			})
			.catch(() => {
				setError(true);
				setIsLoading(false);
			});
	}, [status]);

	return {character, isLoading, error};
};
