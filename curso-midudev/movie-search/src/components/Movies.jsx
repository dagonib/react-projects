import { Movie } from "./Movie"

function ListOfMovies ({ movies }) {
    return (
        <ul className="movies">
            { 
                movies.map(movie => <Movie key={movie.id} movie={movie} />) 
            }
         </ul>
    )
}

function NoMoviesresults () {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0  

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesresults />
    )
}