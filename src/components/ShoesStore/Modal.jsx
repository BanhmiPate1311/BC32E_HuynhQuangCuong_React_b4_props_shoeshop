import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img
                  style={{ width: "300px" }}
                  // className="img-fluid"
                  src={content.image}
                  alt={content.name}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>Product Name:</td>
                    <td>{content.name}</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>${content.price}</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>{content.description}</td>
                  </tr>
                  <tr>
                    <td>Quantity:</td>
                    <td>{content.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
