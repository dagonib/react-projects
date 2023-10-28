const API_KEY = 'bd6b8a11'

export const searchMovies = async ({ search }) => {
    if (search === '') return null
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }))

    } catch (err) {
        throw new Error('Error searching movies')
    }
}