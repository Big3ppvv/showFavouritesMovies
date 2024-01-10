import RenderImages from "../renderImages";

const ShowMovies = () => {
  const url = fetch('https://mockapi.io/movies', {
    method: 'GET',
    headers: {
      'content-type':'application/json'},
    }).then(res => {
    if (res.ok) {
      return res.json();
    }
    }).then(tasks => {
      tasks.map((key,value) =>{
        return(
          <div>
            <ul>
              <li key={key.id}>{value}</li>
              <RenderImages/>
            </ul>
          </div>
        )

      })

    }).catch(error => {
      return(
        <div>
          <h2>{error}</h2>
        </div>
      )

    }); 
}


export default ShowMovies
