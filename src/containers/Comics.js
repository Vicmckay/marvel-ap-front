import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-react-ap.herokuapp.com/comics?offset=${offset}`
      );
      setComics(response.data.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [offset]);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
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
      {comics.map((comic, index) => {
        return (
          <div>
            <div className="comicsContainer">
              <div className="comicContainer">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                />
                <h2>{comic.title}</h2>
                <p>{comic.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      ;
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

export default Comics;
