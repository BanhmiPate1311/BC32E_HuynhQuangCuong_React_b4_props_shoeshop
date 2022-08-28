import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props;
    // console.log("const: ", setStateModal);
    return (
      <div className="row justify-content-around">
        <h1 className="text-center">Shoes shop</h1>
        {productsData.map((product) => {
          return (
            <div
              style={{ width: "360px" }}
              className="col-xl-4 col-lg-6 mt-4"
              key={product.id}
            >
              <ProductItem item={product} setStateModal={setStateModal} />
            </div>
          );
        })}
      </div>
    );
  }
}
