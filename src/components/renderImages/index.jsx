const RenderImages = () =>{
  const urlImages = ['src/components/Images/12HombresEnojados.jpg',
  'src/components/Images/elExorcista.jpg', 
  'src/components/Images/elPadrino2.jpg',
  'src/components/Images/elSeñorDeLosAnillos3.jpg',
  'src/components/Images/fuegoContraFuego.jpg']

  const imageMovies = urlImages.map( values =>{
    <div>
      <img src={values}/>
    </div>
  }) 

  return(imageMovies)
}
export default RenderImages