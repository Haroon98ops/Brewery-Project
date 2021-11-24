/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import BreweryCard from "./BreweryCard";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../actions/brewActions";
import "./brewery.css";

const listofBrewery = () => {
  const dispatch = useDispatch();
  const [toFind, settoFind] = useState("");
  const fetchData = async (toFind) => {
    dispatch(fetchSearchData(toFind));
    // const { data } = await axios.get(
    //   `https://api.openbrewerydb.org/breweries/search?query=${toFind}`
    // );
    // setSearch(data);
    // // const id = Object.keys(id.query);
    // // const name = Object.keys(name.query);
    // dispatch({ type: "SEARCH", payload: data.name  });
    // console.log("serachdata", data);
  };

  return (
    <div className="main-div">
      <div className="second-div">
        <div>
          <FaUnlockAlt className="lock" />
          <AiFillBank className="home" />
          <AiFillDatabase className="circle" />
          <h1 className="heading-brewery">Open Brewery DB |</h1>
          <CgMediaLive className="pop" />
        </div>
        <div className="log">
          <input
            className="input-field"
            type="text"
            placeholder="Search..."
            onChange={(e) => settoFind(e.target.value)}
          />
          <button className="src" onClick={() => fetchData(toFind)}>
            @
          </button>
        </div>
      </div>
      <div className="third-div">
        <h1 className="center-div-third">Brewing</h1>
      </div>
      <BreweryCard />
    </div>
  );
};

export default listofBrewery;
