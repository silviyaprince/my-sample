import React, { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function Tictactoe() {
    const { width, height } = useWindowSize()
    const[board,setBoard]=useState([
        null,null,null,null,null,null,null,null,null
    ])
const decideWinner=(board)=>{
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
        const[a,b,c]=lines[i]
        if(board[a]!==null&&board[a]===board[b]&&board[b]===board[c]){
            console.log("winner",board[a])
            return board[a]
        }
    }
    return null
}
    const[isXturn,setIsXturn]=useState(true)
    const winner=decideWinner(board)
    console.log(winner)
    const handleClick=(index)=>{
if(winner===null&&!board[index]){
  const  boardcopy=[...board]
    boardcopy[index]=isXturn?"X":"O";
    setBoard(boardcopy)
    setIsXturn(!isXturn)
}
    }
  return (
    <div className='fullgame'>
        <h1>Tic Tac Toe</h1>
       {winner? <Confetti
      width={width}
      height={height}
    />:""}
    <div className='board'>    {board.map((val,index)=>{
           return(
             <Gamebox val={val} onPlayerClick={()=>handleClick(index)}/>
           )
        })}
        </div>
        </div>
  )
}

function Gamebox({val,onPlayerClick}){
    const styles={
        color:val==="X"?"green":"red"
    }
    return(
<div className='gamebox' style={styles} onClick={onPlayerClick}>{val}</div>
    )
}
