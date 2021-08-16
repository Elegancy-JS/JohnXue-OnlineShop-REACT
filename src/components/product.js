import React from "react";

function Product(props) {
  const { onAdd, product } = props;
  // console.log(props);
  return (
    <div>
      <img className="productImage" src={product.image}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} className="selectBtn">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
