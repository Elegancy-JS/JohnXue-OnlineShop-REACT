import React from "react";

function Cart(props) {
  const { chosenItems, onAdd, onMinus } = props;
  // console.log(chosenItems);
  return (
    <aside className="block narrowBlock">
      <h1 className="cartTitle">Your shopping cart</h1>
      <h1>{chosenItems.length === 0 && <div>No items in the cart</div>}</h1>

      {chosenItems.map((item) => (
        <div key={item.id}>
          {/* <div>{item.id}</div> */}
          <div>Item: {item.name}</div>
          <div>Price: ${item.price}</div>
          <div>
            Total: {item.qty} * ${item.price}
          </div>
          <div>
            <button onClick={() => onAdd(item)} className="cartBtn">
              +
            </button>
            <button onClick={() => onMinus(item)} className="cartBtn">
              -
            </button>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Cart;
