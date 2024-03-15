import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipie />} />
      </Routes>
  )
}

export default Pages;