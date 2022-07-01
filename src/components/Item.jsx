import React from "react";

const itemStyle = {
  backgroundColor: "blue",
};

export default function Item({ elem }) {
  return (
    <div style={itemStyle}>
      <h1>{elem.nombre}</h1>
      <h2>{elem.precio}</h2>
    </div>
  );
}
