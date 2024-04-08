import { Piece, TeamType, postion, samePosition } from "../../Cconstants";
import { tileIsEmptyOrOccupiedbyOpponent, tileIsOccupied,  tileIsOccupiedByOpponent } from "./GeneralRules";

export const rookMove=(initialPostion:postion, desiredPostion:postion, team:TeamType, boardState:Piece[]):boolean=>{

        
   
    if(initialPostion.x===desiredPostion.x){
       for(let i=1;i<8;i++){
        
        
            let multiplier= (desiredPostion.y<initialPostion.y)?-1:1;
            let passedPostion:postion={x:initialPostion.x, y:initialPostion.y+(i*multiplier)}
         
          if(samePosition(passedPostion, desiredPostion)){
           if(tileIsEmptyOrOccupiedbyOpponent(passedPostion, boardState, team)){
            return true;
           }

        }else{
            if(tileIsOccupied(passedPostion, boardState)){
                break;
            }
        }
        
        }
    }
// aaaaaa


if(initialPostion.y===desiredPostion.y){

    for(let i=1;i<8;i++){
let multiplier =(desiredPostion.x<initialPostion.x)?-1:1;

        let passedPosition:postion={x:initialPostion.x+(i*multiplier), y:initialPostion.y};
        
        if(samePosition(passedPosition, desiredPostion)){
    if(tileIsEmptyOrOccupiedbyOpponent(passedPosition, boardState, team)){
        return true;
        
    }
    
}else{
if(tileIsOccupied(passedPosition,boardState)){
    break;
}
}
} 
}

return false;  
}

export const getPossibleRookMoves=(rook:Piece, boardState:Piece[]):postion[]=>{
    const possibleMoves:postion[]=[];


//top movement
    for(let i=1;i<8;i++){
        const destination: postion={x:rook.position.x, y:rook.position.y+i}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, rook.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }

    //bottom movement
    for(let i=1;i<8;i++){
        const destination: postion={x:rook.position.x, y:rook.position.y-i}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, rook.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }

    //right movement
    for(let i=1;i<8;i++){
        const destination: postion={x:rook.position.x+i, y:rook.position.y}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, rook.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }
    //rigth movement
    for(let i=1;i<8;i++){
        const destination: postion={x:rook.position.x-i, y:rook.position.y}

if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, rook.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
    
    }

    return possibleMoves;


}