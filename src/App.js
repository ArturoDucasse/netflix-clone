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
    </div>
  );
}

export default App;
