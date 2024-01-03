export function Movies(urlMovie) {
  
  return (
    <>
      <h1 className=" text-4xl mb-9 text-center">My favourites movies</h1>
      <Image movies={urlMovie.comunityOfTheRing}/>
      <Image movies={urlMovie.theTwoTowers}/>
      <Image movies={urlMovie.theReturnOfTheKing}/>
    </>
  )
}

function Image(movies){
  return(
  <div className="grid grid-cols-1 justify-items-center">
    <img src = {movies}/>
  </div>
  ) 
}