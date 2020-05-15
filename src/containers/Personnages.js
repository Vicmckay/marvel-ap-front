import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";

const Personnages = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/characters?offset=${offset}`
      );
      console.log(response.data);
      setCharacters(response.data.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [offset]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div>
        <Search setData={setData} />
      </div>
      <div className="pageButton">
        <button
          onClick={() => {
            offset > 0 && setOffset(offset - 20);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setOffset(offset + 20);
          }}
        >
          Next
        </button>
      </div>
      {characters.map((character, index) => {
        return (
          <div className="charactersContainer">
            <Link
              to={"/offer/" + character.urls[2]}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="characterContainer">
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt={character.name}
                />
                <h2>{character.name}</h2>
                {character.description ? (
                  <p>{character.description}</p>
                ) : (
                  <p>Description is missing</p>
                )}
              </div>
            </Link>
          </div>
        );
      })}
      <div className="pageButton">
        <button
          onClick={() => {
            offset > 0 && setOffset(offset - 20);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setOffset(offset + 20);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Personnages;
