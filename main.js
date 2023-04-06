function App() {
  const [movies, setMovies] = React.useState([]);
  const [randomMovie, setRandomMovie] = React.useState("");
  const [poster, setPoster] = React.useState("#fff");

  React.useEffect(() => {
    // fetch data
    async function fetchData() {
      const res = await fetch("https://api.sampleapis.com/movies/comedy");
      const data = await res.json();
      // update setMovies state with data
      console.log(data);
      setMovies(data);
      //provide random index to generate random movie
      let randomIndex = Math.floor(Math.random() * data.length);
      // update setRandomQuote state with data from randomeIndex
      setRandomMovie(data[randomIndex]);
    }
    fetchData();
  }, []);

  return <div>Hello</div>;

  //   const getNewMovie = () => {
  //     let randomIndex = Math.floor(Math.random() * quotes.length);
  //     let moviePoster = data.posterURL;
  //     setRandomMovie(quotes[randomIndex]);
  //     setPoster(colors[moviePoster]);
  //   };

  //   return (
  //     <div style={{ backgroundImage: { moviePoster }, minHeight: "100vh" }}>
  //       <div className="container pt-5">
  //         <div className="jumbotron">
  //           <div className="card">
  //             <div className="card-header">Inspirational Quotes</div>
  //             <div className="card-body">
  //               {randomQuote ? (
  //                 <>
  //                   <h5 className="card-title">
  //                     - {randomQuote.author || "No Author"}
  //                   </h5>
  //                   <p className="card-text">&quot;{randomQuote.text}&quot;</p>
  //                 </>
  //               ) : (
  //                 <h2>Loading</h2>
  //               )}

  //               <div className="row">
  //                 <button onClick={getNewMovie} className="btn btn-primary">
  //                   New Movie
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

ReactDOM.render(<App />, document.getElementById("app"));
