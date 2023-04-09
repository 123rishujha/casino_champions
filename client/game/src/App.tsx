import React from 'react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';


import Chance from "./components/Chance";
import { Gamepage } from "./pages/Gamepage";
import { Test } from "./pages/Test";
import Home from './Main/Home';
import Header from './Main/Header';
import Footer from './Main/Footer';




function App() {
  return (
    <div className="text-3xl font-bold">
      {/* <Navbar/> */}
      <Header/>
      <AllRoutes />
      <Footer/>
 
      {/* <Gamepage/> */}
      {/* <Chance /> */}

    </div>
  );
}

export default App;
