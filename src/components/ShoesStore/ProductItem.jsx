import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div>
        <div className="card">
          <img
            role="button"
            src={item.image}
            alt={item.name}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setStateModal(item)}
          />
          <div className="card-body">
            <p>{item.name}</p>
            <div>
              <span>${item.price}</span>
            </div>
            <button className="btn btn-dark">
              add to cart{" "}
              <span>
                <i className="fa-solid fa-cart-arrow-down"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
