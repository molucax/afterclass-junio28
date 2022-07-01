import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosExample() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters")
      .then((response) => setArray(response.data.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {array.map((elem) => {
        return <h2>{JSON.stringify(elem)}</h2>;
      })}
    </div>
  );
}
