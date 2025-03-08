import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route exact path="/" Component={Home} />
    </Routes>
  );
};

export default App;
