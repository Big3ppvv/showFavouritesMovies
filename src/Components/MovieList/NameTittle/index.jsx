const NameTittle = (props) =>{
    const titleName = props.nameAndDescription;
    return(
        <div>
            {titleName.map((values) =>{
                <div key={values.id} className="bg-red-500">
                <h2>{values.title}</h2>
                <p>{values.description}</p>
                </div>
            })}
        </div>
    )
}

export default NameTittle