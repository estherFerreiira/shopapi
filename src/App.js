import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Details} from "./pages/Details/Details";
function App() {
  return (
    <>
  
  <BrowserRouter>
        <Routes>
         
          <Route path="/" element= {<Home/>}/>
          <Route path="/details/:id" element= {<Details/>}/>
        </Routes>
    </BrowserRouter>
 
    </>
  );
}
/*  
   */
export default App;
