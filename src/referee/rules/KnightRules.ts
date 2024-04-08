import { Piece, TeamType, postion } from "../../Cconstants"
import { tileIsEmptyOrOccupiedbyOpponent } from "./GeneralRules"


export const knightMove=(initialPostion:postion, desiredPostion:postion, team:TeamType, boardState:Piece[]):boolean =>{

    for (let i = -1; i < 2; i += 2) {
        for (let j = -1; j < 2; j += 2) {

            // TOP AND BOTTON SIDE MOVEMENT
            if (desiredPostion.y - initialPostion.y === 2 * i) {

                if (desiredPostion.x - initialPostion.x === j) {
                    if (

                        tileIsEmptyOrOccupiedbyOpponent(desiredPostion, boardState, team)) {

                    }{
                        return true
                    }
                    
                }

            }
            //RIGHT AND LEFT SIDE MOVEMENT
            if (desiredPostion.x - initialPostion.x === 2 * i) {
                if (desiredPostion.y - initialPostion.y === j) {
                    if (

                        tileIsEmptyOrOccupiedbyOpponent(desiredPostion, boardState, team)) {

                    }{
                        return true
                    }
                }
            }
        }
    }

return false
}
export const getPossibleKnightMoves=(knight:Piece, boardState:Piece[]):postion[]=>{
const possibleMoves:postion[]=[];

for (let i = -1; i < 2; i += 2) {
    for (let j = -1; j < 2; j += 2) {
const verticalMove:postion={ x: knight.position.x+j, y:knight.position.y+i*2}
  const horizontalMove:postion={x: knight.position.x+i*2, y:knight.position.y+j}
  
if(tileIsEmptyOrOccupiedbyOpponent(verticalMove, boardState, knight.team)){
    possibleMoves.push(verticalMove);
}
if(tileIsEmptyOrOccupiedbyOpponent(horizontalMove, boardState, knight.team)){
    possibleMoves.push(horizontalMove);
}

    }
}


return possibleMoves;
}