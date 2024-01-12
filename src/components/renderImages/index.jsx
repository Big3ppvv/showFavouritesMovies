const RenderImages = (props) =>{
  const urlImage = props.urlImage;
  const id = props.id;
  return(
    <div>
      <img key={id} src={urlImage} alt="Image of a movie"/>
    </div>
  )
}

export default RenderImages