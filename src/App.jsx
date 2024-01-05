import {Movies} from "./lordsOfTheRings"
const urls = [
  "/img/images.png", 
  "/img/images2.png", 
  "/img/images3.png"
];

function App() {
  return (
    <>
      <Movies urlMovie={urls}/>
    </>
  )
}


export default App