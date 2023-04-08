import "./Chance.css";
import { useState, useEffect } from "react";
import { displayPartsToString } from "typescript";
import { GiOpenTreasureChest } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { chanceUpdate } from "../redux/chances/chances.actions";

const Chance = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [random, setRandom] = useState<number>(5);
  const dispatch = useAppDispatch();
  const chance = useAppSelector((store) => store.chanceReducer.chance);

  const handleOpen = () => {
    let randomNum = Number(Math.floor(Math.random() * 3) + 3);
    console.log("random number", randomNum);
    // setRandom(randomNum);
    dispatch(chanceUpdate(randomNum));
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  console.log(chance);

  return (
    <div className="mainBoxContainer flex flex-col m-auto mt-10 border-2 border-green-400">
      <div className="boxContainer m-auto">
        <div className={`boxCap ${open ? "-rotate-[110deg]" : ""} `}></div>
        <div className="box"></div>
        <div
          className={`points  ${open ? "scale-[1.7] w-12" : "w-5"} `}
          style={{
            top: open ? "-20px" : "90px",
          }}
        >
          <h1
            className={`textPoint bg-green text-amber-400  rounded-full text-center ${
              open
                ? "block opacity-100 block scale-[1] "
                : "hidden opacity-0  hidden scale-[0.2]"
            }`}
          >
            {chance}
          </h1>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="bg-yellow-400 my-10  px-3  rounded"
      >
        <GiOpenTreasureChest className="bg-yellow-400" />
      </button>
    </div>
  );
};

export default Chance;
