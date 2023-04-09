import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Avatar, Badge, Button, Heading, Text } from "@chakra-ui/react";
import { GiDiamondTrophy } from "react-icons/gi";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router-dom";
const Score = () => {
  const { width, height } = useWindowSize();
  let score = 90;
  let [showcelebration,setshowcelbration]=useState(true)
let navigate=useNavigate()
  function joinname() {
setTimeout(()=>{
setshowcelbration(false)
},5000)
  }
useEffect(()=>{
  joinname()
  
},[])

function redirectTogame(){
navigate("/game")
}
  return (
    <div>
      <Heading textAlign={"center"}>Your Score</Heading>
      {
        showcelebration&&  <Confetti width={width} height={height}  numberOfPieces={500} />
      }
    
      <div
        style={{
          height: "300px",
          marginTop: "20px",
        
          borderRadius: "10px",
          margin: "auto",
          textAlign: "center",
        
         boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        }}
        className=" lg:w-1/2 sm:w-full md:w-2/3"
      >
        <Heading m={"auto"} color={"red.400"}>Congratulation </Heading>
        <Heading>
          {/* <Avatar name={`Sachin Kesarwani`} />{" "} */}
          <Badge bg={"green.600"} p={2} borderRadius={5}>
            <Heading as="h2" fontSize={"2xl"}>
              Sachin Kesarwani
            </Heading>
          </Badge>
        </Heading>
        <Text>You Won...</Text>
        {score > 0 && score < 20 ? <div style={{ width: "13%", display: "flex", margin: "auto" }}>
        
            <GiDiamondTrophy  fontSize={"80px"}  color="blue"/>
            <ConfettiExplosion/>
          </div> : score > 20 && score < 40 ? (
          <div style={{ width: "26%", display: "flex", margin: "auto"}}>
            <GiDiamondTrophy fontSize={"80px"} color="blue"/>
            <ConfettiExplosion/>
            <GiDiamondTrophy fontSize={"80px"} color="blue"/>
         
          </div>
        ) : score > 40 && score < 60 ? (
          <div style={{ width: "39%", display: "flex", margin: "auto" }}>
            <GiDiamondTrophy fontSize={"80px"} color="blue"/>
            <ConfettiExplosion/>
            <GiDiamondTrophy  fontSize={"80px"} color="blue"/>
            <ConfettiExplosion/>
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
          
          </div>
        ) : score > 60 && score < 80 ? (
          <div
            style={{
              width: "50%",
              display: "flex",
              margin: "auto",
            
            }}
          >
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
            <ConfettiExplosion/>
            <GiDiamondTrophy  fontSize={"80px"} color="blue" />
            <GiDiamondTrophy  fontSize={"80px"} color="blue"/>
          
          </div>
        ) : (
          <div style={{ width: "50%", display: "flex", margin: "auto" }}>
            <GiDiamondTrophy fontSize={"80px"} color="blue"  />
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
            <ConfettiExplosion/>
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
            <ConfettiExplosion/>
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
            <GiDiamondTrophy fontSize={"80px"} color="blue" />
           
          </div>
        )}
         <Button onClick={redirectTogame} _hover={{bg:"green.400"}} bg={`green.400`} top={"10px"}>Play Again</Button>
      </div>
     
    </div>
  );
};

export default Score;
