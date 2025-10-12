import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
// import data from "../app/data";
import Product from "./Product";
import AddForm from "./Product/AddForm";
import styled from "styled-components";

let currentProductId = 9;

const reducer = (state, action) => {
  switch(action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};

function Home({ className }) {
  // const [products, setProducts] = useState([]);
  const [products, dispatch] = useReducer(reducer, []);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    // setProducts([...products, newProduct]);
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  }

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        "https://mocki.io/v1/1c0ef530-d6ec-4512-97ff-73a5d560d961"
      );
      // setProducts(products.data);
      dispatch({ type: "GET_PRODUCTS", payload: products.data }); 
    }

    getProducts();
  }, []);

  return (
    // <>
    <div className={className}>
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
    </div>
    //  </> 
  );
}

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;
