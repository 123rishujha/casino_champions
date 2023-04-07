import React from "react"
import AllRoutes from './routes/AllRoutes';
import Gamepage from "./pages/Gamepage";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <AllRoutes  />
      <Gamepage/>
    </div>
  );
}

export default App;
