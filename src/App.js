import "./Styles/App.css";

import Row from "./components/Row";
import requests from "./utils/requests";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner movieTitles={requests.fetchNetflixOriginals} />
      <Row
        title="Netflix Originals"
        movieTitles={requests.fetchNetflixOriginals}
        isNetflixOriginal
      />
      <Row title="Trending Now" movieTitles={requests.fetchTrending} />
      <Row title="Top Rated" movieTitles={requests.fetchTopRated} />
      <Row title="Action Movies" movieTitles={requests.fetchActionMovies} />
      <Row title="Comedy Movies" movieTitles={requests.fetchComedyMovies} />
      <Row title="Horror Movies" movieTitles={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" movieTitles={requests.fetchRomanceMovies} />
      <Row title="Documentaries" movieTitles={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
