import { useState } from "react"

export default function LudoBoard(){
    let[moves,setmoves] = useState({Blue:0,Red:0,Green:0,yellow:0})
    let updateBlue=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,Blue:prevmoves.Blue+1}
        })
    }
      let updateyellow=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,yellow:prevmoves.yellow+1}
        })
    }
      let updateGreen=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,Green:prevmoves.Green+1}
        })
    }
      let updateRed=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,Red:prevmoves.Red+1}
        })
    }
    return (
        <div>
            <p>game Begins!</p>
            <div className="Board">
                <p>Blue moves={moves.Blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Red moves={moves.Red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>Green moves={moves.Green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateyellow}>+1</button>
            </div>
        </div>
    )
}