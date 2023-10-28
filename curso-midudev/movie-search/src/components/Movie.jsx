export function Movie ({ movie }) {
    return (
        <li className="movie">
            <img src={movie.image} alt={movie.title} />
            
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>
        </li>
    )
}