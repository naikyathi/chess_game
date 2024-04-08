import { Piece, PieceType, TeamType, postion, samePosition } from "../../Cconstants";
import { tileIsEmptyOrOccupiedbyOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const pawnMove=(initialPostion:postion, desiredPostion:postion, team:TeamType, boardState:Piece[]):boolean=>{
         
    const specialRow = (team === TeamType.OUR) ? 1 : 6;
    const pawnDirection = (team === TeamType.OUR) ? 1 : -1;

    if (initialPostion.x === desiredPostion.x && initialPostion.y === specialRow && desiredPostion.y - initialPostion.y === 2 * pawnDirection) {
        if (!tileIsOccupied(desiredPostion, boardState) && !tileIsOccupied({ x: desiredPostion.x, y: desiredPostion.y - pawnDirection }, boardState)) {
            return true;
        }
    } else if (initialPostion.x === desiredPostion.x && desiredPostion.y - initialPostion.y === pawnDirection) {
        if (!tileIsOccupied(desiredPostion, boardState)) {
            return true;
        }
    }
    // attacking logic
    else if (desiredPostion.x - initialPostion.x === -1 && desiredPostion.y - initialPostion.y === pawnDirection) {
        //ATTACK IN UPPER OR BOTTOM LEFT CORNER

        if (tileIsOccupiedByOpponent(desiredPostion, boardState, team)) {
            return true;
        }
    }
 
    return false;

}
export const getPossiblePawnMoves=(PAWN:Piece, boardState:Piece[]):postion[] =>{
const possibleMoves: postion[]=[];
const specialRow = (PAWN.team === TeamType.OUR) ? 1 : 6;
const pawnDirection = (PAWN.team === TeamType.OUR) ? 1 : -1;


const  normalMove: postion={x: PAWN.position.x, y:PAWN.position.y + pawnDirection}  
const  specialMove: postion={x: normalMove.x, y:normalMove.y + pawnDirection}  
const  upperLeftAttack : postion={x: PAWN.position.x-1, y:PAWN.position.y + pawnDirection}  
const  upperRightAttack : postion={x: PAWN.position.x+1, y:PAWN.position.y + pawnDirection}  
const  leftPostion : postion={x: PAWN.position.x-1, y:PAWN.position.y }  
const  rightPostion : postion={x: PAWN.position.x+1, y:PAWN.position.y}  





if(!tileIsOccupied( normalMove, boardState))
    {
possibleMoves.push(normalMove)
    
if(PAWN.position.y=== specialRow && !tileIsOccupied(specialMove, boardState))
    {
possibleMoves.push(specialMove )
    }
}


if(tileIsOccupiedByOpponent(upperLeftAttack, boardState, PAWN.team)){
    possibleMoves.push(upperLeftAttack);
}else if(!tileIsOccupied(upperLeftAttack, boardState)){
const leftPiece =boardState.find(p=>samePosition(p.position, leftPostion))
if(leftPiece!=null &&   leftPiece.enPassant )
{
    possibleMoves.push(upperLeftAttack);
}
}


if(tileIsOccupiedByOpponent(upperRightAttack, boardState, PAWN.team)){
    possibleMoves.push(upperRightAttack);
}else if(!tileIsOccupied(upperRightAttack, boardState)){
    const rightPiece =boardState.find(p=>samePosition(p.position, rightPostion))
    if(rightPiece!=null &&   rightPiece.enPassant )
    {
        possibleMoves.push(upperRightAttack);
    }
    }


return possibleMoves;
}