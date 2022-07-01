import React from "react";
import Item from "./Item";

export default function ItemList({ instruments }) {
  return (
    <div>
      {instruments.map((elem) => {
        return <Item elem={elem} />;
      })}
    </div>
  );
}
