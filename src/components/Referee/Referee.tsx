import { useEffect, useRef, useState } from "react";
import { Piece, PieceType, TeamType, initalboardstate, postion, samePosition } from "../../Cconstants";
import Chessboard from "../chessboard/ChessBoard";
import { bishopMove, getPossibleBishopMoves, getPossibleKingMoves, getPossibleKnightMoves, getPossiblePawnMoves, getPossibleQueenMoves, getPossibleRookMoves, kingMove, knightMove, pawnMove, queenMove, rookMove } from "../../referee/rules";

export default function Referee(){ 

    const [Pieces, setPieces]=useState<Piece[]>(initalboardstate)
    const [promotionPawn, setPromotionPawn]=useState<Piece>();
    const modalRef=useRef<HTMLDivElement>(null);


    useEffect(()=>{
      updatePossibleMoves();
    }, [])



    function updatePossibleMoves(){
setPieces((current))

    setPieces((CurrentPieces) => {
        return CurrentPieces.map(p=>{
          p.possibleMoves=getVaildMoves(p, CurrentPieces);
          return p;
        });
          });
}

function playMove(playedPiece:Piece, destination:postion):boolean{
    const VaildMove=isvalidMove(
      playedPiece.position,
       destination,
    
       playedPiece.type, 
       playedPiece.team, 
    )
    //reduce function
    // piece=> the current piece we are  handeling
    // results=> a array of results
    
    const enPassantMove=isEnPassantMove(
      playedPiece.position,
     destination,
     playedPiece.type,
     playedPiece.team,

    );
    const pawnDirection=(playedPiece.team === TeamType.OUR) ? 1 : -1;
    
    
    if(enPassantMove){
    const updatePices= Pieces.reduce((results, piece)=>{
    
    if(samePosition(piece.position,playedPiece.position))
    {
    
      piece.enPassant=false;
      piece.position.x=destination.x;
      piece.position.y=destination.y;
      results.push(piece);
    }else if(
     
       (!samePosition(piece.position, {x:destination.x, y:destination.y-pawnDirection})
     ))
      {
      
    
      if(piece.type=== PieceType.PAWN){
        piece.enPassant=false;
      }
      results.push(piece)
    }
    
    
      return results
    },[] as Piece[])
   
      updatePossibleMoves();

    
    setPieces(updatePices);
    
    }else if(VaildMove){
    //UPADTE THE PEICE POSTION
    // AND IF A PIECE IS ATTACKED , REMOVE IT
    
      const updatePices= Pieces.reduce((results, Piece)=>{
        if(samePosition(Piece.position,playedPiece.position)){
    // SPECIAL MOVE
    Piece.enPassant=Math.abs(playedPiece.position.y-destination.y)===2 && Piece.type===PieceType.PAWN
    
      
          Piece.position.x=destination.x;
          Piece.position.y=destination.y
    
          let promotionRow =(Piece.team===TeamType.OUR)? 7 : 0 ;
    if(destination.y===promotionRow && Piece.type===PieceType.PAWN){
      modalRef.current?.classList.remove("hidden");
      setPromotionPawn(Piece);
    
    }
    
          results.push(Piece);
        }else if(!(samePosition(Piece.position,{x:destination.x,y:destination.y} ))){
          if(Piece.type=== PieceType.PAWN){
            Piece.enPassant=false;
          }
          results.push(Piece)
        }
        
        return results;
      },[] as Piece[]);
    
        updatePossibleMoves();
      
      
      setPieces(updatePices);
    
    
    }else{
      return false;
    }

    return true;
}

function isEnPassantMove(
    initialPostion: postion,
    desiredPostion: postion,
    type: PieceType,
    team: TeamType,
  ) {
    const pawnDirection = team === TeamType.OUR ? 1 : -1;






    if (type === PieceType.PAWN) {
        if ((desiredPostion.x - initialPostion.x === -1 || desiredPostion.x - initialPostion.x === 1) && desiredPostion.y - initialPostion.y === pawnDirection) {

            const piece = Pieces.find
                ((p) => p.position.x === desiredPostion.x && p.position.y === desiredPostion.y - pawnDirection && p.enPassant)

            if (piece) {
                return true;
            }

        }


    }



    // if the attacking piece is a pawn
    // upper left / upper right|| bottom left/bottm right
    // if a peice is under /above the attacked tile
    // if the attacked piece has made an en passant move in the pervious turn

    // put peice in correct postion
    //remove en passent peice

    return false
}






function isvalidMove(
    initialPostion: postion,
    desiredPostion: postion,
    type: PieceType,
    team: TeamType,
    )
    
    
    {


        let validMode=false;
    // movement logic
    //const pawnDirection = team === TeamType.OUR ? 1 : -1;
switch(type){



case PieceType.PAWN:
validMode= pawnMove(initialPostion, desiredPostion,team, Pieces);
break;

case PieceType.KNIGHT:
    validMode= knightMove(initialPostion, desiredPostion,team, Pieces);
break;

case PieceType.BISHOP:
    validMode= bishopMove(initialPostion, desiredPostion,team, Pieces);
break;

case PieceType.ROOK:
    validMode= rookMove(initialPostion, desiredPostion,team, Pieces);
    break;
case PieceType.QUEEN:
    
validMode= queenMove(initialPostion, desiredPostion,team, Pieces)
break;


case PieceType.KING:
  validMode = kingMove(initialPostion, desiredPostion, team, Pieces);




}
return validMode;
}

function getVaildMoves(piece:Piece, Pieces:Piece[]):postion[] {

    switch(piece.type){
        case PieceType.PAWN:
          return getPossiblePawnMoves(piece, Pieces);
        case PieceType.KNIGHT:
            return getPossibleKnightMoves(piece, Pieces)
        case PieceType.BISHOP:
            return getPossibleBishopMoves(piece, Pieces)
            case PieceType.ROOK:
                return getPossibleRookMoves(piece, Pieces)
        case PieceType.QUEEN:
        return getPossibleQueenMoves(piece, Pieces)
          case PieceType.KING:
            return getPossibleKingMoves(piece, Pieces);
        
        
        default: 
            return[];
    }   
    }
    function promotePawn(Piecetype:PieceType){
      if(promotionPawn===undefined){
        return;
      }
    const updatedPiecce=Pieces.reduce((results, Pieces)=>{
  if(samePosition(Pieces.position, promotionPawn.position)){
  Pieces.type=Piecetype;
  
  const teamType=(Pieces.team===TeamType.OUR)?"w":"b";
  let image="";
  switch(Piecetype){
    case PieceType.ROOK:{
      image="rook";
      break;
    }
  
    case PieceType.BISHOP:{
      image="bishop";
      break;
    }
  
    case PieceType.KNIGHT:{
      image="knight";
      break;
    }
  
    case PieceType.QUEEN:{
      image="queen";
     
    }
  }
  Pieces.image=`assests/image/${image}_${teamType}.png`
  }
  
      results.push(Pieces);
      return results;
    }, [] as Piece[])
  

    updatePossibleMoves();
  setPieces(updatedPiecce);
  modalRef.current?.classList.add("hidden");
    }
    function promotionTeamType(){
      return (promotionPawn?.team=== TeamType.OUR)?"w":"b";
    }



    return 
    <>
    <div id="pawn-promtion-model" className='hidden' ref={modalRef}>
    <div className="modal-body">
    
    <img onClick={()=> promotePawn(PieceType.ROOK)} src={`assests/image/elephant_${promotionTeamType()}.png`}/>
    <img onClick={()=> promotePawn(PieceType.BISHOP)} src={`assests/image/bishop_${promotionTeamType()}.png`}/>
    <img onClick={()=> promotePawn(PieceType.KNIGHT)}  src={`assests/image/horse_${promotionTeamType()}.png`}/>
    <img onClick={()=> promotePawn(PieceType.QUEEN)}  src={`assests/image/queen_${promotionTeamType()}.png`}/>
  </div>
  </div>

    < Chessboard playMove={playMove}
                pieces={Pieces}/> 
    </>
    
}