function App() {
  const [movies, setMovies] = React.useState([]);
  const [randomMovie, setRandomMovie] = React.useState("");
  const [poster, setPoster] = React.useState("");

  React.useEffect(() => {
    // fetch data
    async function fetchData() {
      const res = await fetch("https://api.sampleapis.com/movies/comedy");
      const data = await res.json();
      // update setMovies state with data
      setMovies(data);
      //provide random index to generate random movie
      let randomIndex = Math.floor(Math.random() * data.length);
      // update setRandomMovie state with data from randomIndex
      setRandomMovie(data[randomIndex]);
    }
    fetchData();
  }, []);

  const getNewMovie = () => {
    let randomIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomIndex]);
    setPoster(movies[randomIndex].posterURL);
  };

  return (
    <div style={{ backgroundImage: `url(${poster})`, minHeight: "100vh" }}>
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header">Random Movies</div>
            <img className="card-img-top" src={poster} alt="Card image cap" />
            <div className="card-body">
              {randomMovie ? (
                <>
                  <h5 className="card-title">
                    "{randomMovie.title || "No Title"}"
                  </h5>
                </>
              ) : (
                <h2>Loading</h2>
              )}
              <div className="row">
                <button onClick={getNewMovie} className="btn btn-primary">
                  New Random Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
