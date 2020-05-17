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
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Your research"
          value={searchInput}
          type="text"
        />
        <button type="submit">Valid</button>
      </form>
    </div>
  );
};

export default Search;
