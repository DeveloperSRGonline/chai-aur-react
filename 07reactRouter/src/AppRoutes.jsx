import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/contant.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userid" element={<User />} />
      <Route path="/github" element={<Github />} /> 
    </Routes>
  );
};

export default AppRoutes;
