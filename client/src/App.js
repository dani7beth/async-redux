import "./App.css";
import { useEffect, useState } from "react";
import { addProduct, getProducts } from "./reducers/products";
import { connect } from "react-redux";
import Product from "./Product";

function App(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [department, setDepartment] = useState("");
  useEffect(() => {
    props.dispatch(getProducts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addProduct({ name, description, price, department }));
    setName("");
    setDescription("");
    setPrice("");
    setDepartment("");
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <p>name</p>
          <input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>description</p>
          <input
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>price</p>
          <input
            type="number"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>department</p>
          <input
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <button type='submit'>submit</button>
        </form>
      </div>

      {props.products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(App);
