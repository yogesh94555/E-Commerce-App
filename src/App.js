import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/components/Home/Home";
import Shoe from "../src/components/Shoe/Shoe";
import Mobile from "../src/components/Mobile/Mobile";
import Laptop from "../src/components/Laptop/Laptop";
import Fashion from "../src/components/Fashion/Fashion";
import Electronics from "../src/components/Electronics/Electronics";
import Contact from "../src/components/Contact/Contact";
import Cart from "../src/components/Cart/Cart";
import Makeup from "../src/components/Makeup/Makeup";
import Appliances from "../src/components/Appliances/Appliances";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="shoe" element={<Shoe />}></Route>
            <Route path="mobile" element={<Mobile />}></Route>
            <Route path="laptop" element={<Laptop />}></Route>
            <Route path="fashion" element={<Fashion />}></Route>
            <Route path="electronics" element={<Electronics />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="makeup" element={<Makeup />}></Route>
            <Route path="appliances" element={<Appliances />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
