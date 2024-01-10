const RenderImages = () =>{
    const urlMovies = ['src/components/Images/elSeñorDeLosAnillos3.jpg',
    'src/components/Images/fuegoContraFuego.jpg',
    'src/components/Images/elPadrino2.jpg',
    'src/components/Images/12HombresEnojados.jpg',
    'src/components/Images/elExorcista.jpg'
    ];

    const [movie, movie2, movie3,movie4,movie5] =  urlMovies;
    const allMovies = [movie, movie2, movie3,movie4,movie5];
    return(
        allMovies.forEach((values) =>{
            <div>
                <img key={values} src={values}/>
            </div>
        })  
    )
}
export default RenderImages
