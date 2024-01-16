import { useState } from "react";
import NameTittle from "./NameTittle";
const MovieList = () => {
  const [movie, setMovie] = useState([
    {
      "id": "a4e4a6c7-36d3-4a3a-b2e9-3c5e6b368730",
      "title": "Inception",
      "description": "A thief who enters the dreams of others to steal their deepest secrets.",
      "year": 2010
    },
    {
      "id": "95ccff67-9097-4a9e-9e79-0253b4f59ddc",
      "title": "The Shawshank Redemption",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "year": 1994
    }])
   

  return(
    <div className="Home">
      <NameTittle nameAndDescription={movie}/>
      <NameTittle nameAndDescription={movie}/>
    </div>
  )
}

export default MovieList;