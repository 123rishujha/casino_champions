import React, { useEffect, useState } from "react";
import { HiLightBulb, HiEmojiHappy } from "react-icons/hi";
import handlebuttonval from "./logic";
import { Test } from "./Test";
import Chance from "../components/Chance";
import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/store";
import { useAppDispatch } from "../redux/store";
import { chanceUpdate } from "../redux/chances/chances.actions";
 export  const Gamepage = () => {
  let [bulb, setBulbs] = useState<number[]>(new Array(9).fill(0));
  let [button, setButton] = useState<number[]>([]);
  let [refresh, setrefresh] = useState<number>(0);
  let [chance, setChance] = useState<number>(0);
  let [emoji, setEmoji] = useState<number[]>(new Array(9).fill(0));

let noOfchances=useAppSelector((store)=>store.chanceReducer.chance )
  function buttonval(val: number, index: number) {

    setChance((prev) => prev + 1);
    button[index] = 0;
    setButton(button);
    if (val <= 9) {
      bulb[val - 1] = 1;
      emoji[val - 1] = 1;

      setBulbs(bulb);

      setrefresh((prev) => prev + 1);
      setEmoji(emoji);
    }
  }

  useEffect(() => {
    setButton(handlebuttonval());
  }, []);

let dispatch=useAppDispatch()
  function restartgame() {
   setButton(handlebuttonval());
    setBulbs(new Array(9).fill(0));
    setChance(0);
    setrefresh(0);
    dispatch(chanceUpdate(0));
  }
console.log(noOfchances,"no")
  return (
    <div>
     <div className="flex rounded-lg gap-2.5 mx-auto lg:w-1/2 sm:w-full pl-2 border-indigo-600 shadow-lg shadow-cyan-500/50">
        {bulb?.map((e, i) => {
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            
              className={`fill-${e === 1 ?`yellow`:`blue`}-300 md:fill-${e === 1 ? `yellow`:`blue`}-300 w-20 h-20 m-2`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          );
        })}
      </div>
      <div style={{ border: "1px solid black" }}>
        <button
        style={{color:"white"}}
          onClick={restartgame}
          className="border-2 border-indigo-600 rounded-lg bg-cyan-600 pl-4 pr-4">
            
        Restart
        </button>
        <Chance/>
</div>
      <div
      style={{display:"flex",flexWrap:"wrap"}}
       className="flex rounded-lg lg:gap-0.7 sm:gap-0 mx-auto md:1/2 lg:w-3/4 xl:1/2 2xl:1/2  sm:w-full pl-2 p-5 border-indigo-600 shadow-lg shadow-cyan-500/50"
       >
        {
          // bg-blue-500
          button?.map((e, i) => {
            return (
              <button
                disabled={chance == noOfchances||noOfchances==0}
                key={i}
                onClick={() => buttonval(e, i)}
                style={{backgroundColor:`${chance==noOfchances?"white":e===0?"white":"#99ccff"}`,width:"70px" ,borderRadius:"10px",margin:"auto"}}
                className={` ${chance === noOfchances||noOfchances==0 ? `cursor-not-allowed` : `cursor-pointer`}`}
                // className={`rounded-lg rounded-lg w-20 bg-${chance === 5 ?"slate":e==0?"slate":"green"}-400 hover:bg-${chance === 5 ? "green-400" : "orange-400"} m-3 pl-3 pr-3 ${chance === 5 ? `cursor-not-allowed` : `cursor-pointer`}`}
              >
         <HiEmojiHappy fontSize={"30px"} style={{margin:"auto"}} color={e === 0 ? "#3939ac":chance===noOfchances?"red": `white`} />
              </button>
            );
          })
        }
      </div>
  
    </div>
  );
};


