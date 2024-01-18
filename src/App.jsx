import MovieItem from "./Components/MovieItem"
import Canvas from "./Components/Canvas"
import { useState } from "react"

function App() {
  const [selectedMovie, setSelectedMovie] = useState()

  return(
    <div className="grid grid-cols-2">
      <MovieItem setSelectedMovie={setSelectedMovie}/>
      <Canvas selectedMovie={selectedMovie}/>
    </div>
  )
}

export default App
