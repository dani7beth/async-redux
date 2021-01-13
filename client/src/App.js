import "./App.css";
import { useEffect } from "react";
import { getProducts } from "./reducers/products";
import { connect } from "react-redux";
import Product from './Product';

function App(props) {
  useEffect(() => {
    props.dispatch(getProducts());
  }, []);

  return <div className="App">
    <h1>Test</h1>
    {props.products.map((product)=> <Product product={product} />)}
  </div>;
}
const mapStateToProps = (state) =>({
  products: state.products,
})

export default connect(mapStateToProps)(App);
