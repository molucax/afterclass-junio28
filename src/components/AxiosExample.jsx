import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"

export default function AxiosExample() {
  const [array, setArray] = useState([]);
  const { house } = useParams();
  let navigate = useNavigate();

  let URL = house
    ? "http://hp-api.herokuapp.com/api/characters/house/" + house
    : "http://hp-api.herokuapp.com/api/characters"
  //

  let housesObj = {
    gryffindor: "red",
    hufflepuff: "yellow",
    ravenclaw: "blue",
    slytherin: "green"
  }

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setArray(response.data))
      .catch((err) => console.log(err));
  }, [house, URL]);

  function handleClick() {
    navigate("/")
  }

  return (
    <div>
      <button onClick={handleClick}></button>
      {array.map((elem) => {
        return (
          <div style={{ background: housesObj[elem.house.toLowerCase()] }}>
            <h2>{elem.name}</h2>
            <h3>{elem.house}</h3>
          </div>
        )
      })}
    </div>
  );
}
