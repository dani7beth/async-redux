import axios from "axios";

export const getProducts = () => {
  //this is the thunk
  return (dispatch) => {
    axios
      .get("/api/products")
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", products: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addProduct = (productDataFromForm) => {
  return (dispatch) => {
    axios
      .post("/api/products", { product: productDataFromForm })
      .then((res) => {
        dispatch({ type: "ADD_PRODUCT", product: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const products = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.products;
    case "ADD_PRODUCT":
      return [action.products, ...state];
    default:
      return state;
  }
};
export default products;
