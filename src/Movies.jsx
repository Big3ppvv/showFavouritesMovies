import Image from "./Image"

function Movies(urlMovie){
  
  return(
    urlMovie.map((name, movie) =>{
      <>
      <h1>My favourites movies!</h1>
      <Image key={key={name}} movies={movie}/>
      <Image key={key={name}} movies={movie}/>
      <Image key={key={name}} movies={movie}/>
    
    </>
    }) 
  ) 
}

export default Movies