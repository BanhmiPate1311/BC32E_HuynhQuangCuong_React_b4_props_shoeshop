import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data.json";
import Modal from "./Modal";

export default class ShoesStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };

  setStateModal = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2" style={{ marginTop: "20%" }}>
            <p>Home</p>
            <p>Shop</p>
          </div>
          <div className="col-10">
            {/* Danh sách giày */}
            <ProductList
              productsData={data}
              setStateModal={this.setStateModal}
            />

            {/* Modal */}
            <Modal content={this.state.productDetail} />
          </div>
        </div>
      </div>
    );
  }
}
