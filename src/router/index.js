import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";

import React from 'react'
import LicenseManagerApp from "../pages/LicenseManagerApp";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/LicenseManager" element={<LicenseManagerApp/>}/>
        
        </Routes>
  )
}

export default Router;