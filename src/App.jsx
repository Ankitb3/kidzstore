import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CartSection from "./Pages/CartPage";
import { Route,Routes } from "react-router-dom";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartSection/>}/>

      </Routes>
    </>
  );
};

export default App;
