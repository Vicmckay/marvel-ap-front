import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Comic from "./containers/Comic";
import Favoris from "./containers/Favoris";
import Personnages from "./containers/Personnages";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/characters");
      console.log(response.data);
      setCharacters(response.data.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Router>
        <header>
          <div className="headerLogo">
            <Link to="/">
              <img alt="Logo Marvel" src="content/marvelLogo.png" />
            </Link>
          </div>
          <div className="menuHeader">
            <span>
              <Link
                to="/personnages"
                style={{ textDecoration: "none", color: "white" }}
              >
                Personnages
              </Link>
            </span>
            <span>
              <Link
                to="/comics"
                style={{ textDecoration: "none", color: "white" }}
              >
                Comics
              </Link>
            </span>
            <span>
              <Link
                to="/favoris"
                style={{ textDecoration: "none", color: "white" }}
              >
                Favoris
              </Link>
            </span>
          </div>
        </header>
        <Switch>
          <Route path="/personnages">
            <Personnages
              characters={characters}
              setCharacters={setCharacters}
            />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/favoris">
            <Favoris />
          </Route>
          <Route path="/comic/comics/items">
            <Comic />
            <Favoris />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
