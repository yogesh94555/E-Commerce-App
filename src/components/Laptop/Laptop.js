import React from "react";
import lap from "../Data/Data.json";
import { useCart } from "react-use-cart";
import "../Laptop/Laptop.css";

const Laptop = () => {
  const { addItem } = useCart();

  return (
    <>
      <div className="gradient">
        {lap.slice(9, 12).map((item) => {
          return (
            <div
              className="card mb-3"
              key={item.id}
              style={{
                maxWidth: "540px",
                display: "inline-block",
                margin: "100px 10px 20px 50px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt="laptop_image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Price:₹{item.price}</p>
                    <p className="card-text">{item.details}</p>
                    <p className="card-text">
                      <button
                        className="btn btn-outline-info"
                        onClick={() => addItem(item)}
                      >
                        Add To Cart
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Laptop;
