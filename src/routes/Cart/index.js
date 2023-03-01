import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Cart = (props) => {
  const { addToCart } = props;
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  // console.log(addToCart?.image);
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-hover mx-5 my-4">
          <thead className="thead-light">
            <tr>
              <th scope="col">Product</th>
              <th scope="col ">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={
                    addToCart?.addcart?.image
                      ? addToCart?.addcart?.image
                      : "Cart is Empty"
                  }
                  style={{ width: "400px" }}
                  title={addToCart?.addcart?.title}
                />
              </td>
              <td>
                {addToCart?.addcart?.title
                  ? addToCart?.addcart?.title
                  : "UnKown"}
              </td>
              <td>{`Price :${
                addToCart?.addcart?.price * count
                  ? addToCart?.addcart?.price * count
                  : "NA"
              }`}</td>
              <td>{`Quantity :${
                count === 0 ? navigate("/ProductList") : count
              }`}</td>
              <td className="mx-2">
                <button
                  className="btn btn-primary  "
                  onClick={() => setCount(count + 1)}
                >
                  <AiOutlinePlus />
                </button>
                <button
                  className="btn btn-primary mx-4"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  <AiOutlineMinus />
                </button>
                <td className="btn btn-danger my-4">
                  <MdOutlineDelete
                    onClick={() => navigate("/ProductList")}
                    style={{ width: "30px", height: "25px" }}
                  />
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex  flex-column justify-content-center align-items-center">
        <h1>Order Summery</h1>
        <h3>
          {" "}
          {`Total Amount : Rs. ${
            addToCart?.addcart?.price * count
              ? addToCart?.addcart?.price * count
              : "NA"
          }`}
        </h3>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    addToCart: state.addToCart,
  };
};

export default connect(mapStateToProps)(Cart);
