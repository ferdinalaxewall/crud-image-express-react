import Card from "./Components/Card";
import axios from "axios";

const getProducts = async () => {
  await axios.get("http://localhost:5000/products")
}

console.log(getProducts)

function App() {
  return (
    <div className="container mt-5 py-5 px-3">
      <button className="btn btn-primary">Add Product</button>
      <div className="row mt-3">
        <Card />
      </div>
    </div>
  );
}

export default App;
