import Movies from "./Movies";

function App() {
  const urls = ["/img/images.png","/img/images2.png", "/img/images3.png"];
  return (
    <>
      <Movies urlMovie={urls}/>
    </>
  )
}


export default App