const Canvas = (props) =>{
    return(
        <div>
            {props.selectedMovie ?(
                <div>
                    <p>{props.selectedMovie.description}</p>
                    <p>{props.selectedMovie.year}</p>
                </div>
            ):(
                <h1>Nothing Yet</h1>
            )}
        </div>
    )

}
export default Canvas
