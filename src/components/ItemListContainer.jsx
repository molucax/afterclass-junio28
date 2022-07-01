import React, { useEffect, useState } from "react";
import instrumentos from "../data";
import ItemList from "./ItemList";

const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(instrumentos);
  }, 2000);
});

export default function ItemListContainer() {
  const [instrumentList, setInstrumentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setInstrumentList(response);
    });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }
  return (
    <div>
      <ItemList instruments={instrumentList} />
    </div>
  );
}
