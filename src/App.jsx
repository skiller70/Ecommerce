import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import CartItem from "./pages/CartItem";
import Order from "./pages/Order";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" h-[100vw]  w-100% ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={CartItem} />
          <Route path="/order" Component={Order} />
        </Routes>
      </div>
    </>
  );
}

export default App;
