import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return(
    <AnimatePresence mode='wait'>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipie />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages;