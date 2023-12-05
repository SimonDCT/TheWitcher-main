import { useState } from "react";
import Episodes from "./Episodes";

const Header = ({ data, onSeasonChange }) => {
    // const uniqueSeason = Array.from(new Set(seasons.map((season) => season.season)));
    const episodes = data._embedded.episodes
    const oneSelectedSeason= 1

    const [indice, setIndice] = useState(1)

    const episodesSaison = episodes.filter((episode) => episode.season === indice)

    const setSeason = (season) => () => {
      setIndice(season);
      onSeasonChange(season); // Call the callback to update selectedSeason in App.js
    };

    console.log(episodesSaison)
  
    return (
      <header className="fixed flex justify-center place-content-center bg-Dark border-b-2 border-White w-full">
        <div className="flex h-12 space-x-28 items-center">
              <button className="text-xl hover:text-Gray"  onClick={setSeason(1)}> Saison 1 </button>
              <button className="text-xl hover:text-Gray"  onClick={setSeason(2)}> Saison 2 </button>
              <button className="text-xl hover:text-Gray"  onClick={setSeason(3)}> Saison 3 </button>
        </div>
      </header>
    );
  };
  
  export default Header;