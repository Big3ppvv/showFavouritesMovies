import Image from "./Image"

function Movies(urlMovie){
  
  return(
    Object.entries(urlMovie).map((name, movie) =>{
      <>
      <h1>My favourites movies!</h1>
      <Image key={key={name}} movies={movie}/>
      <Image key={index} movies={movie}/>
      <Image key={index} movies={movie}/>
    
    </>
    }) 
  ) 
}

export default Movies