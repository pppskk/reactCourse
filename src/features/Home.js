import React, { useState } from "react";
import axios from "axios";
// import data from "../app/data";
import Product from "./Product";
import AddForm from "./Product/AddForm";


let currentProductId = 9;

function Home() {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  async function getProducts() {
    const products = await axios.get(
      'https://mocki.io/v1/1c0ef530-d6ec-4512-97ff-73a5d560d961'
    );
    setProducts(products.data);
  }
  
  getProducts();

  return (
    <>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
      <AddForm addProduct={addProduct} />
    </>
  );
}

export default Home;
