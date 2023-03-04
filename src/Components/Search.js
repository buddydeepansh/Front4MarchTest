import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react"; // Using MobX instead of Redux
import AppStore from "../Stores/AppStore";
import "./Search.css";

const Search = observer(() => {
  // const params = useParams()
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const handleCity = async () => {
    const userInput = search.replace(" ", "+");
    AppStore.setSearchedPlace(search); // setting search value in store
    const apiUrl =
      "https://api.weatherapi.com/v1/current.json?key=2638573975f54f9db7552323232802&q="; // setting up base api url
    const initialResponse = await fetch(`${apiUrl}${userInput}`); // fetching data from api
    const initialResponseJSON = await initialResponse.json(); // parsing response
    AppStore.setapiResult(initialResponseJSON); // storing fetched response in MobX Store.
    initialResponse.status === 200
      ? navigate(`weather/${userInput}`)
      : navigate(`/notfound`); // navigating to dynamic route where route is the place entered
    // above if api returns a success then we redirect to Card.js and show details otherwise we move to Error Page
  };

  const handleSearchChange = (e) => {
    setsearch(e.target.value); // setting the search bar value
  };

  return (
    <>
      <div className="searchContainer">
        <p className="search">Enter a place to search weather</p>
        <div>
          <input
            type="text"
            name="city"
            id="city"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="button" onClick={handleCity}>
            Search
          </button>
        </div>
      </div>
    </>
  );
});

export default Search;
