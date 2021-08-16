import React from "react";
import Product from "./product";

function Main(props) {
  const { iData, onAdd } = props;
  // console.log(iData);
  // console.log(onAdd);
  return (
    <main className="block wideBlock">
      <h1>Top picks of the week!</h1>
      <div className="productBoard">
        {iData.items.map((product) => {
          return <Product key={product.id} product={product} onAdd={onAdd} />;
        })}
      </div>
    </main>
  );
}

export default Main;
