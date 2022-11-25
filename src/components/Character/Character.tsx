import {useApiCharacter} from "../../hooks/useApiCharacter";
import "./style.css";

interface CharacterProps {
	status: string;
}

export interface CharacterI {
	id: number;
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
}

const Character = ({status}: CharacterProps) => {
	const {character, isLoading, error} = useApiCharacter(status);

	return (
		<section>
			{isLoading && <p>Loading...</p>}
			{error && <p>En estos momentos no podemos procesar su solicitud</p>}
			{character.map((data: CharacterI) => {
				return (
					<article key={data.id} className="character">
						<img src={data.image} />
						<div>
							<h2>{data.name}</h2>
							<p>Status: {data.status}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Character;
