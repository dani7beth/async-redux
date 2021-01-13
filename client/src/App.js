import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error grabbing products");
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
