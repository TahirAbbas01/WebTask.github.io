import React from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import {Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Search from './Search';

const App = () => {
  return (<>
              <Navbar />
    <Routes>
            
             <Route path='/'           element={<Home />} />
             <Route path='/About'      element={<About />} />
             <Route path='/Contact'    element={<Contact />} />
             <Route path='/Services'   element={<Services />} />
             <Route path='/Search'     element={<Search />} />
             
    </Routes>
    
    </>
  );
  }
export default App;
