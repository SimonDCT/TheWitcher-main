import { useState } from "react";
// import Card from './component/Card'
import CardTheWitcher from "./component/CardTheWitcher";
import CardMainCast from "./component/CardMainCast";
import Episodes from "./component/Episodes";
import Header from "./component/Header";
import useFetch from "./hook/useFetch";

let dataApi = {};

function App() {
  const [theme, setTheme] = useState(false);

  const handlerClick = () => {
    setTheme(!theme);
    console.log("Theme changed to:", !theme ? "dark" : "light");
  };

  const { isLoading, isError, data } = useFetch(
    `https://api.tvmaze.com/shows/28276?embed[]=episodes&embed[]=cast&embed[]=seasons`
  );

  const maClass2 = theme
    ? "text-White flex flex-col h-screen w-screen"
    : "text-White flex flex-col h-screen w-screen theme-dark";
  console.log("Current class:", maClass2);

  const [selectedSeason, setSelectedSeason] = useState(1);
  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
  };

  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      <main className={maClass2}>
        {data && <Header data={data} onSeasonChange={handleSeasonChange} />}

        <label className=" inline-flex items-center cursor-pointer fixed">
          <input
            onClick={handlerClick}
            type="checkbox"
            value=""
            className="sr-only toggle-checkbox peer"
          ></input>
          <div className="m-4 w-12 h-6 bg-Gray peer-focus:outline-none  rounded-full peer bg-toggle peer-checked:after:translate-x-full peer-checked:after:border-White after:content-[''] after:absolute after:bottom-[1.10em] after:left-[1.22em] after:bg-White after:border-Gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all  "></div>
        </label>

        {/* ///////////////////// SECTION 1 ////////////////////// */}

        <section className="mt-12">
          <div
            className={`${theme ? "bg-FondPart1" : "bg-FondPart1-light"
              } bg-cover bg-center h-screen`}
          >
            {data && <CardTheWitcher data={data} />}
          </div>
        </section>

        {/* ///////////////////// SECTION 2 ////////////////////// */}

        <section>
          <div
            className={`${theme ? "bg-FondPart2" : "bg-FondPart2-light"
              } bg-cover bg-center h-screen`}
          >
           {data && <Episodes data={data} theme={theme} season={selectedSeason} />}
          </div>
        </section>

        {/* ///////////////////// SECTION 3 ////////////////////// */}

        <section>
          <div className={`${theme ? "bg-FondPart3" : "bg-FondPart3-light"
            } bg-cover bg-center h-screen`}>
            {data && <CardMainCast data={data} />}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
