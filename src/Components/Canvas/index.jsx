const Canvas = (props) =>{
    return(
        <div>
            {props.selectedMovie ?(
                <div key={props.id} className=" bg-gray-200 float-right w-min gap-2 text-right h-screen p-8 ">
                    <p key={props.id} className="mb-4">{props.selectedMovie.description}</p>
                    <p key={props.id}>{props.selectedMovie.year}</p>
                </div>
            ):(
                <h1 className="ml-8">Nothing Yet</h1>
            )}
        </div>
    )

}
export default Canvas
