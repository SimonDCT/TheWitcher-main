
export default function Cards ({data}) {
    const saison = data._embedded.episodes.filter((episode) => episode.season == 1)
    console.log(saison)

    const EpiNew = saison.map(
        (number) => number.name
    );

    return(
        <h1> {EpiNew} </h1>
        
        // <div> {data.map((episode) => <Card data={episode}/>)} </div>
    )
}