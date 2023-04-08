import React from 'react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="text-3xl font-bold underline">
      <AllRoutes />
     <Navbar/>
    </div>
  );
}

export default App;
