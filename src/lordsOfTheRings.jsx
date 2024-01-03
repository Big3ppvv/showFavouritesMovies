function Movies() {
  const urls = {
    comunityOfTheRing : "images/images.png", 
    theTwoTowers : "images/images2.png", 
    theReturnOfTheKing : "images/images3.png"
  }
  
  return (
    <>
      <h1 className=" text-4xl mb-9 text-center">My favourites movies</h1>
      <div className="grid grid-cols-1 justify-items-center">
        <section className="mb-9 text-center">
          <h2>Top 1</h2>
          <img src={urls.theReturnOfTheKing} />
        </section>

        <section className="mb-9 text-center">
          <h2>Top 2</h2>
          <img src={urls.comunityOfTheRing} />
        </section>
        <section className="text-center">
          <h2>Top 3</h2>
          <img src={urls.theTwoTowers} />
        </section>
      </div>
    </>
  )
}

export default Movies