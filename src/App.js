import "./App.css";
import Main from "./components/main";
import Header from "./components/header";
import Cart from "./components/cart";
import itemData from "./components/itemData";
import { useState } from "react";

function App() {
  const [chosenItems, setChosenItems] = useState([]);
  const onAdd = (p) => {
    const itemExisting = chosenItems.find((item) => item.id === p.id);
    if (itemExisting) {
      setChosenItems(
        chosenItems.map((item) =>
          item.id === p.id
            ? { ...itemExisting, qty: itemExisting.qty + 1 }
            : item
        )
      );
    } else {
      setChosenItems([...chosenItems, { ...p, qty: 1 }]);
    }
  };
  const onMinus = (p) => {
    // console.log(p);
    const itemExisting = chosenItems.find((item) => item.id === p.id);
    if (itemExisting.qty === 1) {
      setChosenItems(chosenItems.filter((item) => item.id !== p.id));
    } else {
      setChosenItems(
        chosenItems.map((item) =>
          item.id === p.id
            ? { ...itemExisting, qty: itemExisting.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} iData={itemData} />
        <Cart onAdd={onAdd} onMinus={onMinus} chosenItems={chosenItems} />
      </div>
    </div>
  );
}

export default App;
