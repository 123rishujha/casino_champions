import React, { useEffect, useState, useRef } from "react";
import { HiLightBulb, HiEmojiHappy } from "react-icons/hi";
import handlebuttonval from "./logic";
import { Test } from "./Test";
import Chance from "../components/Chance";
import { useSelector } from "react-redux";
import "./Gamepage.css";
import { useAppSelector } from "../redux/store";
import { useAppDispatch } from "../redux/store";
import { chanceUpdate } from "../redux/chances/chances.actions";

import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from 'react-confetti-explosion';

import { BiVolumeMute } from "react-icons/bi";
import { BsVolumeUp } from "react-icons/bs";
import { no_of_bulbs, win_chance } from "../redux/chances/chances.types";

export const Gamepage = () => {
  let [bulb, setBulbs] = useState<number[]>(new Array(9).fill(0));
  let [button, setButton] = useState<number[]>([]);
  let [refresh, setrefresh] = useState<number>(0);
  let [chance, setChance] = useState<number>(0);
  let [emoji, setEmoji] = useState<number[]>(new Array(9).fill(0));

  let navigate=useNavigate()
  let [explosion,setexplosion]=useState<boolean>(false)
let noOfchances=useAppSelector((store)=>store?.chanceReducer?.chance )

  const audioInfinityRef = useRef<HTMLMediaElement>(null);



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

  let dispatch = useAppDispatch();
  function restartgame() {
    setButton(handlebuttonval());
    setBulbs(new Array(9).fill(0));
    setChance(0);
    setrefresh(0);
    dispatch(chanceUpdate(0));
    setexplosion(false)
  }



  //sound effects
  // useEffect(() => {
  //   audioInfinityRef?.current?.play();
  //   if (audioInfinityRef.current) {
  //     audioInfinityRef.current.volume = 0.5;
  //   }
  // }, []);

  // const handleToggleMute = () => {
  //   audioInfinityRef?.current?.play();
  //   if (audioInfinityRef.current) {
  //     audioInfinityRef.current.muted = !audioInfinityRef.current.muted;
  //     console.log("called");
  //   }
  // };






  // sound effects
  useEffect(() => {
    audioInfinityRef?.current?.play();
    if (audioInfinityRef?.current) {
      audioInfinityRef.current.volume = 0.5;
    }
  }, []);

  const handleToggleMute = () => {
    audioInfinityRef?.current?.play();
    if (audioInfinityRef.current) {
      audioInfinityRef.current.muted = !audioInfinityRef.current.muted;
      console.log("called");
    }
  };
function redirecttoscore(){
  
  let sum=bulb.filter((a)=>a==1).length
  
  console.log(sum)
  dispatch({type:no_of_bulbs,payload:sum})
  dispatch({type:win_chance,payload:noOfchances})
  dispatch(chanceUpdate(0));
  setexplosion(true)
  setTimeout(()=>{
    navigate("/score")
  },1500)
}

  return (
    <div className="gamepageBg">
      <h1 style={{ textAlign: "center" }}>Win By Luck</h1>
      <div className="flex rounded-lg gap-2.5 mx-auto lg:w-1/2 sm:w-full pl-2 border-indigo-600 shadow-lg shadow-cyan-500/50">
        {bulb?.map((e, i) => {
          return (
            <HiLightBulb
              color={e == 0 ? "white" : `yellow`}
              fontSize={"90px"}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "15px",display:"flex" }}>
        <button
          style={{
            color: "white",
            width: "150px",
            margin: "auto",
            display: "block",
            textAlign: "center",
          }}
          onClick={restartgame}
          className="border-2 border-indigo-600 rounded-lg bg-cyan-600 pl-4 pr-4 "
        >
          Restart
        </button>

        <button
        disabled={chance==0||chance!=noOfchances}
        style={{color:"white",width:"150px",margin:"auto",display:"block",textAlign:"center"}}
  onClick={redirecttoscore}
          className={`border-2 border-indigo-600 rounded-lg bg-green-600 pl-4 pr-4  ${chance === 0||noOfchances!==chance ? `cursor-not-allowed` : `cursor-pointer`}`}>
            
     Score{explosion&&  <ConfettiExplosion />}
        </button>
      

      </div>
      <Chance />

      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="flex rounded-lg lg:gap-0.7 sm:gap-0 mx-auto md:1/2 lg:w-3/4 xl:1/2 2xl:1/2  sm:w-full pl-2 p-5 border-indigo-600 shadow-lg shadow-cyan-500/50"
      >
        {
          // bg-blue-500
          button?.map((e, i) => {
            return (
              <button
                disabled={chance == noOfchances || noOfchances == 0}
                key={i}
                onClick={() => buttonval(e, i)}
                style={{
                  backgroundColor: `${
                    chance == noOfchances
                      ? "white"
                      : e === 0
                      ? "white"
                      : "#99ccff"
                  }`,
                  width: "70px",
                  borderRadius: "10px",
                  margin: "auto",
                }}
                className={` ${
                  chance === noOfchances || noOfchances == 0
                    ? `cursor-not-allowed`
                    : `cursor-pointer`
                }`}
                // className={`rounded-lg rounded-lg w-20 bg-${chance === 5 ?"slate":e==0?"slate":"green"}-400 hover:bg-${chance === 5 ? "green-400" : "orange-400"} m-3 pl-3 pr-3 ${chance === 5 ? `cursor-not-allowed` : `cursor-pointer`}`}
              >
                <HiEmojiHappy
                  fontSize={"30px"}
                  style={{ margin: "auto" }}
                  color={
                    e === 0
                      ? "#3939ac"
                      : chance === noOfchances
                      ? "red"
                      : `white`
                  }
                />
              </button>
            );
          })
        }
      </div>
      {/* background sound */}
      <audio
        className="hidden"
        ref={audioInfinityRef}
        controls
        loop
        src="./bg-music.mp3"
      />
      <div className="mutebutton">
        <button onClick={handleToggleMute}>
          {audioInfinityRef?.current?.muted ? <BiVolumeMute /> : <BsVolumeUp />}
        </button>
      </div>
    </div>
      
  );
};
