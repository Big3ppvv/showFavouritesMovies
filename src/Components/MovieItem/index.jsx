import {movies} from "../Movies"

const MovieItem = (props) => {
  return (
    <div className="text-left ml-8">
      {movies.map((movie) =>{
        <div onClick={() => props.setSelectedMovie(movies)}>
          <h3>{movie.title}</h3>
        </div>
      })}
    </div>
  )
}

export default MovieItem
