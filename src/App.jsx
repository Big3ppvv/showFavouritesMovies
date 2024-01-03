import {Movies} from "./lordsOfTheRings"
const urls = {
  comunityOfTheRing : "images/images.png", 
  theTwoTowers : "images/images2.png", 
  theReturnOfTheKing : "images/images3.png"
};

function App() {
  return (
    <>
      <Movies urlMovie={urls}/>
    </>
  )
}


export default App