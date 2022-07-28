import React from "react";
import { useCart } from "react-use-cart";
import "../Cart/Cart.css";

const Cart = () => {
  const {
    items,
    removeItem,
    isEmpty,
    totalItems,
    cartTotal,
    emptyCart,
    updateItemQuantity,
  } = useCart();

  if (isEmpty) {
    return (
      <p
        style={{
          fontSize: "30px",
          fontWeight: "lighter",
          textAlign: "center",
          margin: "0px 0 400px 0",
          paddingTop: "200px",
        }}
      >
        Please Add Your Favourite items to Your Cart First
      </p>
    );
  }
  return (
    <>
      <div className="gradient">
        {items.map((data) => {
          return (
            <div
              className="card mb-3"
              key={data.id}
              style={{
                maxWidth: "540px",
                display: "inline-block",
                margin: "100px 10px 20px 50px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={data.image}
                    className="img-fluid rounded-start"
                    alt="cart_image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p>Price:₹{data.price}</p>
                    <button
                      className="btn btn-outline-info"
                      onClick={() =>
                        updateItemQuantity(data.id, data.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-info"
                      onClick={() =>
                        updateItemQuantity(data.id, data.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <p className="card-text">{data.details}</p>
                    <p className="card-text">
                      <button
                        className="btn btn-danger btn-close"
                        onClick={() => removeItem(data.id)}
                      ></button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="text-justify mt-5"
          style={{ width: "50%", color: "white" }}
        >
          <ul>
            <li>
              <b>Total datas</b> : {totalItems}
            </li>
            <li>
              <b>Total Amount</b> : {cartTotal}
            </li>
          </ul>
        </div>
        <div className="text-justify" style={{ width: "50%" }}>
          <button onClick={() => emptyCart()} className="btn btn-outline-info">
            <b>Remove All Products</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
