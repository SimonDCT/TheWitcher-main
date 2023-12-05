export default function CardTheWitcher({ data }) {
  return (
    <section className=" text-white flex flex-col justify-center scroll-smooth">
      <div className="flex justify-center p-10">
        <img className="w-20 " src="logo-the-witcher.png" alt="" />
        <h1 className=" font-fontcinzel font-semibold text-6xl">{data.name}</h1>
      </div>
      <div className="flex justify-between mt-10 gap-10">
        <ul className="text-5xl pl-10">
          <li className="p-6 font-fontcinzel text-6xl  hover:border-2 hover:border-white w-fit rounded-lg">
            Episodes
          </li>
          <li className="p-6 font-fontcinzel text-6xl hover:border-2 hover:border-white w-fit rounded-lg">
            Cast
          </li>
          <li className="p-6 font-fontcinzel text-6xl hover:border-2 hover:border-white w-fit rounded-lg">
            Characters
          </li>
        </ul>

        <div className="bg-Dark-30 w-[27em] mt-10 gap-10 p-4">
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: data.summary }}
          ></p>

          <ul className=" font-semibold text-White flex flex-wrap justify-center items-center">
            <li className="w-[7em] m-2 py-1 px-2 border-solid border-2 border-White rounded-xl text-center ">
              3 saisons
            </li>
            <li className="w-60 m-2 py-1 px-2 border-solid border-2 border-White rounded-xl text-center ">
              Episodes ordered: 8 episodes
            </li>
            <li className="w-64 m-2 py-1 px-2 border-solid border-2 border-White rounded-xl text-center ">
              Genres: Drama | Action | Fantasy
            </li>
            <li className="w-56 m-2 py-1 px-2 border-solid border-2 border-White rounded-xl text-center ">
              Created by: Lauren Schmidt
            </li>
          </ul>
        </div>
      </div>

      <img
        className=" self-center center w-50 mt-56"
        src="logo-netflix.png"
        alt=""
      />
    </section>
  );
}
