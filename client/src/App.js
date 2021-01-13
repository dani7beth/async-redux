import "./App.css";
import { useEffect } from "react";
import { getProducts } from "./reducers/products";

function App() {
  useEffect(() => {
    getProducts();
  }, []);

  return <div className="App">
    <h1>Test</h1>
  </div>;
}

export default App;
