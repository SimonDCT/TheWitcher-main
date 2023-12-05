export default function CardMainCast({ data }) {
  const cast = data._embedded.cast;

  return (
    <section className="flex justify-center items-center">
      <section className="max-w-screen-lg w-full">
        <div className="flex items-center w-full justify-center">
          <p className="m-8 py-1 px-2 border-solid border-2 border-White rounded-xl text-center font-fontcinzel text-3xl">
            Casting
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-32">
          {cast.map((e) => (
            <div
              className="p-5 m-5 flex flex-col justify-center items-center text-center bg-Dark-70 w-full md:w-48 h-52 rounded-lg"
              key={e.id}
            >
              <img
                className="w-24 h-28 rounded-lg"
                src={e.person.image.original}
                alt=""
              />
              <br />
              <div className="flex flex-col justify-center items-center max-w-4">
                <h2 className="font-semibold">{e.person.name}</h2>
                <h4 className="text-xs"> as {e.character.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
