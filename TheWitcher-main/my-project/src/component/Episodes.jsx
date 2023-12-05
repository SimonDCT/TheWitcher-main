import { useState } from 'react';

export default function Episodes({ data, theme, season }) {

  const saison = data._embedded.episodes.filter((episode) => episode.season === season);

  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const handleButtonClick = (episodeNumber) => {
    setSelectedEpisode(episodeNumber);
  };

  return (
    <>
      <section className=" pt-48 flex flex-col bg-Dark-50 items-center">

        <div className="flex justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((episodeNumber) => (
            <button
              key={episodeNumber}
              className={`m-2 py-1 px-2 border-solid border-2 border-White rounded-xl w-24 text-center  ${selectedEpisode === episodeNumber ? 'bg-Gray-bleu' : ''
                }`}
              onClick={() => handleButtonClick(episodeNumber)}
            >
              Episode {episodeNumber}
            </button>
          ))}
        </div>

        <div className="flex  w-screen items-center justify-center p-6 mt-10 gap-40">
          {saison
            .filter((e) => e.number === selectedEpisode)
            .map((e) => (

              <div key={e.id} className="  flex bg-Dark py-4 p-5 rounded-3xl border-4 border-Gray ">

                <div>
                  <h3 className="pb-8 font-thin"> Episode {e.number}</h3>
                  <img className='max-w-lg	'  src={e.image.original} alt="" />
                </div>

                <div className=" pl-8 py-14">

                  <h1 className=" w-96 pb-2 font-fontcinzel text-3xl">
                    {' '}
                    {e.name}{' '}
                  </h1>

                  <p
                    className="  max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: e.summary }}>
                  </p>

                  <ul className=" flex pt-4 ">
                    <li className="m-2 py-1 px-2 border-solid border-2 border-White rounded-xl  text-center ">
                      Saison {e.season}
                    </li>
                    <li className=" m-2 py-1 px-2 border-solid border-2 border-White rounded-xl  text-center ">
                      Runtime: {e.runtime} mins
                    </li>
                    <li className=" m-2 py-1 px-2 border-solid border-2 border-White rounded-xl  text-center ">
                      SaisoAirdate: {e.airdate}
                    </li>
                  </ul>


                </div>

              </div>
            ))}
        </div>
      </section>
    </>
  );
}
