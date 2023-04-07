import React from "react";
import AllRoutes from "./routes/AllRoutes";
import Gamepage from "./pages/Gamepage";
import Chance from "./components/Chance";

function App() {
  return (
    <div className="text-3xl font-bold">
      <AllRoutes />
      <Gamepage />
      <Chance />
    </div>
  );
}

export default App;
