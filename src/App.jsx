import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
       <Home/>
    </>
  );
};

export default App;
