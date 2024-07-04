import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import Products from "./Products";
import ProductDetails from "./Components/ProductDetails";


function App() {
  return (
    <div className="App">
        <AppHeader />
        <div className="pageContent">
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/:id" element={<ProductDetails />}></Route>
          </Routes>
        </div>
        <AppFooter />
    </div>
  );
}
export default App;