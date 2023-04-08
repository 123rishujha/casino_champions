import React from "react";
import AllRoutes from "./routes/AllRoutes";

import Chance from "./components/Chance";
import { Gamepage } from "./pages/Gamepage";
import { Test } from "./pages/Test";




function App() {
  return (
    <div className="text-3xl font-bold">
      <AllRoutes />
       <Gamepage/>
      <Chance />

    </div>
  );
}

export default App;
