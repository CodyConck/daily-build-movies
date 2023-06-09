function App() {
  const [movies, setMovies] = React.useState([]);
  const [randomMovie, setRandomMovie] = React.useState("");
  const [poster, setPoster] = React.useState("");
  const [color, setColor] = React.useState("fff");

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
      setPoster(data[randomIndex].posterURL);
    }
    fetchData();
  }, []);

  const getNewMovie = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#e74c3c",
      "#77B1A9",
      "#73A857",
      "#472E32",
    ];

    let randomIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomIndex]);
    setPoster(movies[randomIndex].posterURL);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-3">
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
