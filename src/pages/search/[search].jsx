import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SearchPage() {
	const [anime, setAnime] = useState([]);
	const route = useRouter();

	useEffect(() => {
		const animeStore = localStorage.getItem("@anime.Result");
		if (animeStore !== "undefined") {
			setAnime(JSON.parse(animeStore));
		}
	}, []);

	console.log(anime);

	return <></>;
}
