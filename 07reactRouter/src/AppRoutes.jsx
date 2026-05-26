import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/contant.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import { githubInfoLoader } from "./components/loaders/githubLoader.js";
import App from "./App.jsx";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {path:"",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"user/:userid",element:<User/>},
      {path:"github",element:<Github/>,loader:githubInfoLoader},
    ]
  }
])
