import React from 'react';
import Chessboard from 'chessboardjsx';
import "./ChessBoard.css";
import useValidator from '../../hooks/useValidator';
import {ChessInstance, Square} from 'chess.js';
import useTheme from '../../hooks/useTheme';

interface ChessBoardProps {
    game: ChessInstance, 
    fen: string, 
    setFen:React.Dispatch<React.SetStateAction<string>>,
    position: string , 
    onDropOption: ({ sourceSquare, targetSquare }: { sourceSquare: Square; targetSquare: Square; }) => void, 
    onClickOption?: (square: Square) => void,
    options:Boolean ,
    orientation: "white" | "black",
    botmatch?: boolean,
}

function ChessBoard({
   game, fen, setFen, position = "start", onDropOption, onClickOption, options = false, orientation,botmatch=true
}: ChessBoardProps
    ){
    const { 
         onMouseOverSquare, 
         onMouseOutSquare,
         onDragOverSquare, 
         onSquareClick,
         dropStyle,
         squareStyles,
         onDrop
        } = useValidator(game, fen, setFen); 

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const {theme} = useTheme();
    React.useEffect(()=>{
       window.onresize = () => {
            setWidth(window.innerWidth);
       }
    },[])
    
    const resizeBoard = () =>  width < 700 ? width - 10: 600;
    const boardStyle = { 
        borderRadius: "5px",
        boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
    }

    function undoMove(){
        game.undo();
        setFen(game.fen());
        game.undo();
        setFen(game.fen());
    }
    return (
    <>

    <div id="board-wrapper">
                <Chessboard 
        id="humanvshuman"
        boardStyle={boardStyle} 
        calcWidth={resizeBoard} 
        position={position}
        onDrop={options ? onDropOption : onDrop}
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare} 
        onDragOverSquare={onDragOverSquare}
        onSquareClick={onClickOption ? onClickOption : onSquareClick}
        squareStyles={squareStyles}
        dropSquareStyle={dropStyle}
        transitionDuration={200}
        darkSquareStyle={{backgroundColor:theme.darkSquare}}
        lightSquareStyle={{backgroundColor:theme.lightSquare}}
        orientation={orientation}
        />
        
    </div>
    
     {
      botmatch &&
      <button id="undo" onClick={undoMove}>↩</button>
    } 

         
    
   </> 
    )
}

export default ChessBoard;