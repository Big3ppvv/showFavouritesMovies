import {movies} from "../Movies"

const MovieItem = (props) => {
  return (
    <div className="bg-blue-600 h-screen p-8 flex flex-col gap-2 w-36 text-left">
      {movies.map((movie) =>{
        return<div onClick={() => props.setSelectedMovie(movie)}><h3>{movie.title}</h3></div>
      })}
    </div>
  )
}

export default MovieItem
