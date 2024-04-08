import { Piece, TeamType, postion, samePosition } from "../../Cconstants";
import { tileIsEmptyOrOccupiedbyOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const bishopMove=(initialPostion:postion, desiredPostion:postion, team:TeamType, boardState:Piece[]):boolean=>{
       
        
    // MOVEMENT LOGIC AND ATTACK LOGIC FOR THE BISHOP
    
    // UP RIGHT MOVEMENT
    
    for(let i=1;i<8;i++){
        // UP RIGHT MOVEMENT
    if(desiredPostion.x>initialPostion.x && desiredPostion.y > initialPostion.y){
       let passedPosition: postion={x: initialPostion.x + i , y: initialPostion.y+i}
      //check if tile is the destination tile
      if(samePosition(passedPosition, desiredPostion)){
    //Dealing with destination tile
    if(tileIsEmptyOrOccupiedbyOpponent(passedPosition, boardState, team )){
     return true
    }
     }else{
        // dealing with passing tile
        if(tileIsOccupied(passedPosition,boardState)){
    break
        } 
      }
    }
    
    
    
    
    // bottom RIGHT MOVEMENT
    
    if(desiredPostion.x > initialPostion.x && desiredPostion.y<initialPostion.y){
        
        let passedPosition:postion ={x:initialPostion.x+i, y:initialPostion.y-i};
    //check if the tile is destination tile
    if(samePosition(passedPosition, desiredPostion)){
        // dealing with passing tile
    if(tileIsEmptyOrOccupiedbyOpponent(passedPosition, boardState, team)){
        return true;
    }
    }
    else{
        if(tileIsOccupied(passedPosition, boardState)){
        
            break;
        }   
    }
    
    }
    
    
    
       
    //bottom LEFT MOVEMENT
    if(desiredPostion.x<initialPostion.x && desiredPostion.y<initialPostion.y ){
    
    let passedPosition:postion ={x:initialPostion.x-i, y:initialPostion.y-i}
    //check if the tile is destination tile
    if(samePosition(passedPosition, desiredPostion)){
        // dealing with passing tile
    if(tileIsEmptyOrOccupiedbyOpponent(passedPosition, boardState, team)){
        return true;
    }
    }
    else{
        if(tileIsOccupied(passedPosition, boardState)){
           
            break;
        }   
    }
    
    }
           
    
    //top LEFT MOVEMENT
    
    if(desiredPostion.x<initialPostion.x && desiredPostion.y>initialPostion.y ){
    
        
        let passedPosition: postion={x:initialPostion.x-i, y:initialPostion.y+i}
    //check if the tile is destination tile
    if(samePosition(passedPosition, desiredPostion)){
        // dealing with passing tile
    if(tileIsEmptyOrOccupiedbyOpponent(passedPosition, boardState, team)){
        return true;
    }
    }
    else{
        if(tileIsOccupied(passedPosition, boardState)){
           
            break;
        }   
    }
    }                  
    }
     
return false

}

export const getPossibleBishopMoves=(bishop:Piece, boardState:Piece[]):postion[]=>{
    const possibleMoves:postion[]=[];


    //UPPER RIGHT MOVEMENT
    for(let i=1;i<8;i++){
const destination: postion={x:bishop.position.x+i, y:bishop.position.y+i}
if(!tileIsOccupied(destination, boardState)){
    possibleMoves.push(destination);
}else if( tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
possibleMoves.push(destination);
break;
}else{
    break;
}
  }
    
//BOTTOM RIGHT MOVEMENT
for(let i=1;i<8;i++){
    const destination: postion={x:bishop.position.x+i, y:bishop.position.y-i}
    if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
    }else if( tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
    possibleMoves.push(destination);
    break;
    }else{
        break;
    }
      }

      //BOTTOM LEFT MOVEMENT
for(let i=1;i<8;i++){
    const destination: postion={x:bishop.position.x-i, y:bishop.position.y-i}
    if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
    }else if( tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
    possibleMoves.push(destination);
    break;
    }else{
        break;
    }
      }

      //UPPER LEFT MOVEMENT
      for(let i=1;i<8;i++){
        const destination: postion={x:bishop.position.x-i, y:bishop.position.y+i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        }else if( tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
        possibleMoves.push(destination);
        break;
        }else{
            break;
        }
          }



    return possibleMoves;
    }
    
    
    
    
           
    
    
    

