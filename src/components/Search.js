import React, { useState } from "react";
import axios from "axios";

const Search = ({ setData }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3000/characters=${searchInput}`
    );
    setData(response.data.data.results.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Recherche personnages"
          type="text"
        />
        <input type="submit" value="Rechercher" name="search" />
      </div>
    </form>
  );
};

export default Search;
