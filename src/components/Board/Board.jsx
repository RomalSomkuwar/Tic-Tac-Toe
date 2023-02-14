import React from 'react'
import Box from '../Box/Box'
import "./Board.css"

const Board = ({board, onClick, id}) => {
  return (
    <div className = "board">
        {board.map((item, id) => (
            <Box id={id} value={item} onClick = {()=> item === null && onClick(id)}/>
        ))} 
    </div>
  );
};

export default Board