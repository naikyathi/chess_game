import { Piece, TeamType, postion, samePosition } from "../../Cconstants";
import { tileIsEmptyOrOccupiedbyOpponent, tileIsOccupied,  tileIsOccupiedByOpponent } from "./GeneralRules";

export const kingMove=(initialpostion:postion, desiredPostion:postion, team:TeamType, boardState:Piece[]):boolean=>{

    for(let i=1;i<2;i++){

        //diagonal
        let multiplierX=(desiredPostion.x<initialpostion.x)?-1:(desiredPostion.x>initialpostion.x)?1:0;
        let multiplierY=(desiredPostion.y<initialpostion.y)?-1:(desiredPostion.y>initialpostion.y)?1:0;
        
        
        
        
        let passedPosition:postion={x:initialpostion.x+(i*multiplierX), y:initialpostion.y+(i*multiplierY)};
        
        //left intialpostion.x+{i *-1}
        // right intialpostion.x+(i*1)
        //middle initialpostion.x+(i*0)
        
        
        
            if(samePosition(passedPosition, desiredPostion)){
            if(tileIsEmptyOrOccupiedbyOpponent(passedPosition, boardState,team)){
                return true;
            }
        }else{
            if(tileIsOccupied(passedPosition,boardState)){
                break;
            }
        }
        
        }

    return false;
}



export const getPossibleKingMoves=(king:Piece, boardState:Piece[]):postion[]=>{
    const possibleMoves:postion[]=[];
    for(let i=1;i<2;i++){
        const destination: postion={x:king.position.x, y:king.position.y+i}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }

    //bottom movement
    for(let i=1;i<2;i++){
        const destination: postion={x:king.position.x, y:king.position.y-i}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }

    //right movement
    for(let i=1;i<2;i++){
        const destination: postion={x:king.position.x+i, y:king.position.y}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }
    //rigth movement
    for(let i=1;i<2;i++){
        const destination: postion={x:king.position.x-i, y:king.position.y}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }

    for(let i=1;i<2;i++){
        const destination: postion={x:king.position.x+i, y:king.position.y+i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        }else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
        possibleMoves.push(destination);
        break;
        }else{
            break;
        }
          }
            
        //BOTTOM RIGHT MOVEMENT
        for(let i=1;i<2;i++){
            const destination: postion={x:king.position.x+i, y:king.position.y-i}
            if(!tileIsOccupied(destination, boardState)){
                possibleMoves.push(destination);
            }else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
            possibleMoves.push(destination);
            break;
            }else{
                break;
            }
              }
        
              //BOTTOM LEFT MOVEMENT
        for(let i=1;i<2;i++){
            const destination: postion={x:king.position.x-i, y:king.position.y-i}
            if(!tileIsOccupied(destination, boardState)){
                possibleMoves.push(destination);
            }else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
            possibleMoves.push(destination);
            break;
            }else{
                break;
            }
              }
        
              //UPPER LEFT MOVEMENT
              for(let i=1;i<2;i++){
                const destination: postion={x:king.position.x-i, y:king.position.y+i}
                if(!tileIsOccupied(destination, boardState)){
                    possibleMoves.push(destination);
                }else if( tileIsOccupiedByOpponent(destination, boardState, king.team)){
                possibleMoves.push(destination);
                break;
                }else{
                    break;
                }
                  }

return possibleMoves;
}