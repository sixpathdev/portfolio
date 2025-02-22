import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/privacy" Component={Privacy} />
    </Routes>
  );
};

export default App;
