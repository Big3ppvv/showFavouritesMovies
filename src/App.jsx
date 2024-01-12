import RenderImages from "./components/renderImages"

function App() {
  const urlImages = [
    {url:'src/components/Images/12HombresEnojados.jpg',id:'882c5ef4e2'},
    {url:'src/components/Images/elExorcista.jpg', id:'015ce99556'}, 
    {url:'src/components/Images/elPadrino2.jpg', id:'fdc3aa0227'},
    {url:'src/components/Images/elSeñorDeLosAnillos3.jpg', id:'301493e834'},
    {url:'src/components/Images/fuegoContraFuego.jpg', id:'d301c5baf4'}]

  return(
    urlImages.map((values) =>{
      <div>
        <RenderImages urlImage={values.url} id={values.id}/>
      </div>
    })
  )

  
}


export default App