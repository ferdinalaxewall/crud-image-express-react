import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
