import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading/index";
import addCart from "../../redux/actions/addToCart";
import { connect } from "react-redux";
const ProductList = (props) => {
  const {
    addToCart,
    addToCart: { addcart },
  } = props;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  // console.log(data);
  const ShowProducts = () => {
    // console.log(data);

    const addCart = (item) => {
      // console.log(item);
      addToCart(item);
    };

    return (
      <>
        {data.map((product, id) => {
          return (
            <div className="col-md-3 mb-4" key={id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: {product.price}</p>
                  <button
                    onClick={() => addCart(product)}
                    className="btn btn-primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mmb-5">
          <h1
            className="display-6 fw-bolder
                text-center"
          >
            Latest Products
          </h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    addToCart: state.addToCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => addCart(item)(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
