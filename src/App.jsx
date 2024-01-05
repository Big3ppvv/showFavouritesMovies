import Movies from "./Movies";

function App() {
  const urls = {communityOfTheRing:"/img/images.png",theTwoTowers:"/img/images2.png", returnOfTheKing:"/img/images3.png"};
  return (
    <>
      <Movies urlMovie={urls}/>
    </>
  )
}


export default App