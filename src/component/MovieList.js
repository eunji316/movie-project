import MovieItem from "./MovieItem";

const MovieList = ({dummy, category}) => {

    const filterDummy =
        category === 'all'
        ? dummy
        : dummy.filter((it) => (it.year === category)) 

    return(
        <div className="MovieList">
            {filterDummy.map((it)=>(
                <MovieItem key={it.id} {...it} />
            ))}
        </div>
    )
}

export default MovieList;