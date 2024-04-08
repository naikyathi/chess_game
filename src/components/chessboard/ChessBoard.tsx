

import { getValue } from '@testing-library/user-event/dist/utils';

import Tile from '../Tile/tile';
import './ChessBoard.css'
import React, { useRef, useState } from 'react';
import { HORIZONTALAXIS, VERTICALAXIS,GRIDSIZE, Piece,postion, samePosition} from '../../Cconstants';

interface props{

  playMove:(piece:Piece, position:postion)=>boolean;
  pieces:Piece[];
}

function Chessboard({updatePossibleMoves, playMove, pieces}: props){
const [activePiece, setActivePiece]=useState<HTMLElement | null> (null);
const [grabpostion,setGrabPostion]=useState<postion >({x:-1, y:-1})
const chessboardref=useRef<HTMLDivElement>(null);







function grabpiece(e:React.MouseEvent){



    const element=e.target as HTMLElement;
    const chessboard=chessboardref.current
    if(element.classList.contains("chess-piece")&& chessboard){
const grabx=  Math.floor((e.clientX -chessboard.offsetLeft)/GRIDSIZE)
const graby=  Math.abs(Math.ceil((e.clientY- chessboard.offsetTop-800)/GRIDSIZE))
setGrabPostion({x:grabx, y:graby})
  
const x=e.clientX-GRIDSIZE/2;
const y=e.clientY-GRIDSIZE/2;
      element.style.position="absolute";
      element.style.left=`${x}px`;
      element.style.top=`${y}px`;

setActivePiece(element);
    }
  }



  
  
  
  function movePiece(e:React.MouseEvent){
      const chessboard=chessboardref.current
      if(activePiece){
        
        if(activePiece && chessboard){


        const minx=(chessboard.offsetLeft-25);
        const miny=(chessboard.offsetTop-20);
        const maxx= chessboard.offsetLeft+chessboard.clientWidth-60;   
        const maxy= chessboard.offsetTop+chessboard.clientHeight-65;



      const x=e.clientX-50;
      const y=e.clientY-50;

            activePiece.style.position="absolute";
            // activePiece.style.left=`${x}px`;
            // activePiece.style.top=`${y}px`;

 activePiece.style.left= x<minx?`${minx}px`:`${x}px`;
 activePiece.style.top= y<miny?`${miny}px`:`${y}px`;
 
 if(x<minx){
activePiece.style.left=`${minx}px`
 }else if(x>maxx){
activePiece.style.left=`${maxx}px`
 }else{
activePiece.style.left=`${x}px`
 }
 if(y<miny){
  activePiece.style.top=`${miny}px`
   }else if(y>maxy){
  activePiece.style.top=`${maxy}px`
   }else{
  activePiece.style.top=`${y}px`
   }


      }
    }
  }

    
    function dropPiece(e:React.MouseEvent){

      const chessboard=chessboardref.current

      if(activePiece && chessboard){
const x=Math.floor((e.clientX -chessboard.offsetLeft)/GRIDSIZE);
const y=Math.abs(Math.ceil((e.clientY- chessboard.offsetTop-800)/GRIDSIZE));


const currentPiece=pieces.find(p=> samePosition(p.position, grabpostion) )




//currentp(3,4)iece



 if(currentPiece){
let success= playMove(currentPiece, {x, y});
if(!success){
  activePiece.style.position="relative";
  activePiece.style.removeProperty("top");
  activePiece.style.removeProperty("left");


}
  
}
     setActivePiece(null) 
    }
  }


  




let board=[];
for(let j=VERTICALAXIS.length-1;j>=0;j--){
for(let i=0;i<HORIZONTALAXIS.length;i++){
    const number=j+i+2;

    const piece=pieces.find((p)=> 
    samePosition (p.position,{x:i, y:j}))
    let image= piece?piece.image:undefined;

    let currentPiece=activePiece!=null? pieces.find(p=> samePosition(p.position, grabpostion)):undefined;
let highlight=currentPiece?.possibleMoves? 
currentPiece.possibleMoves.some(p=>samePosition(p, {x:i,y:j}))
:false;

    board.push(<Tile key={`${j},${i}`}image={image} number={number} highlight={highlight}/>);
  
}
}




return(
  <>


    <div
    onMouseMove ={(e)=>movePiece(e)}  
    onMouseDown={(e)=>grabpiece(e)}
    onMouseUp={(e)=>dropPiece(e)}
    id="chessboard"
    ref={chessboardref}
     >
    
     {board}
    </div>
    </>
)
}
export default Chessboard;