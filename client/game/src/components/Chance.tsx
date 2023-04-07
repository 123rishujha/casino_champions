import "./Chance.css";
import { useState } from "react";

const Chance = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col m-auto border-2 border-rose-600">
      <div className="boxContainer m-auto">
        <div className={`boxCap ${open ? "-rotate-[110deg]" : ""} `}></div>
        <div className="box"></div>
        <div className="absolute6 top-30 border-2 border-rose-0 bg-amber-6003 rounded-full">
          <h1 className="bg-amber-400  rounded">5</h1>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="flex items-center justify-items-center bg-red-400 w-30 px-3 m-auto rounded"
      >
        PRESS
      </button>
    </div>
  );
};

export default Chance;
