import React, { useState } from 'react';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.css';
import Stats from './components/Stats';
import data from './data';
import './App.css';
const { products } = data;

function App() {
  const [items, setItems] = useState(products);
  console.log(items);

  const add = productToAdd => {
    if (productToAdd.numberInStock < 10) {
      const addedCount = items.map(product => {
        if (product.id !== productToAdd.id) {
          return product;
        } else {
          return {
            ...productToAdd,
            numberInStock: productToAdd.numberInStock + 1,
          };
        }
      });
      setItems(addedCount);
    }
  };

  const subtract = productToSubtract => {
    const subtractedCount = items.map(product => {
      if (product.id !== productToSubtract.id) {
        return product;
      } else {
        return {
          ...productToSubtract,
          numberInStock: productToSubtract.numberInStock - 1,
        };
      }
    });
    setItems(subtractedCount);
  };

  return (
    <div className="container">
      <h1>The Inventory Game ({items.length})</h1>

      <Stats items={items} />
      <div>
        <Products items={items} add={add} subtract={subtract} />
      </div>
    </div>
  );
}

export default App;
