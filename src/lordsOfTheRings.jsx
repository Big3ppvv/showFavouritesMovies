import Image from "./Image"

export function Movies(urlMovie) {
  return(
    urlMovie.forEach((value) =>{
    <>
      <h1>My favourites movies!</h1>
      <Image key={value} movies={value}/>
      <Image key={value} movies={value}/>
      <Image key={value} movies={value}/>
    
    </>
  })
)
}
  
