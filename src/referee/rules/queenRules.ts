import { Piece, TeamType, postion, samePosition } from "../../Cconstants";
import { tileIsEmptyOrOccupiedbyOpponent, tileIsOccupied,  tileIsOccupiedByOpponent } from "./GeneralRules";

export const queenMove=(initialpostion:postion, desiredPostion:postion, team:TeamType, boardState:Piece[]):boolean=>{

    for(let i=1;i<8;i++){
    
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
    
        
    //TO DO
    //pawn promotion
    //prevent the king from into danger
    //add castling
    //add check
    //check mate
    //add stalemate

    export const getPossibleQueenMoves=(queen:Piece, boardState:Piece[]):postion[]=>{
        const possibleMoves:postion[]=[];
        for(let i=1;i<8;i++){
            const destination: postion={x:queen.position.x, y:queen.position.y+i}
    
    if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
    }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
    possibleMoves.push(destination);
    break;
    }else{
        break;
    }
        
        }
    
        //bottom movement
        for(let i=1;i<8;i++){
            const destination: postion={x:queen.position.x, y:queen.position.y-i}
    
    if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
    }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
    possibleMoves.push(destination);
    break;
    }else{
        break;
    }
        
        }
    
        //right movement
        for(let i=1;i<8;i++){
            const destination: postion={x:queen.position.x+i, y:queen.position.y}
    
    if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
    }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
    possibleMoves.push(destination);
    break;
    }else{
        break;
    }
        
        }
        //rigth movement
        for(let i=1;i<8;i++){
            const destination: postion={x:queen.position.x-i, y:queen.position.y}
    
    if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
    }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
    possibleMoves.push(destination);
    break;
    }else{
        break;
    }
        
        }

        for(let i=1;i<8;i++){
            const destination: postion={x:queen.position.x+i, y:queen.position.y+i}
            if(!tileIsOccupied(destination, boardState)){
                possibleMoves.push(destination);
            }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination);
            break;
            }else{
                break;
            }
              }
                
            //BOTTOM RIGHT MOVEMENT
            for(let i=1;i<8;i++){
                const destination: postion={x:queen.position.x+i, y:queen.position.y-i}
                if(!tileIsOccupied(destination, boardState)){
                    possibleMoves.push(destination);
                }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
                possibleMoves.push(destination);
                break;
                }else{
                    break;
                }
                  }
            
                  //BOTTOM LEFT MOVEMENT
            for(let i=1;i<8;i++){
                const destination: postion={x:queen.position.x-i, y:queen.position.y-i}
                if(!tileIsOccupied(destination, boardState)){
                    possibleMoves.push(destination);
                }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
                possibleMoves.push(destination);
                break;
                }else{
                    break;
                }
                  }
            
                  //UPPER LEFT MOVEMENT
                  for(let i=1;i<8;i++){
                    const destination: postion={x:queen.position.x-i, y:queen.position.y+i}
                    if(!tileIsOccupied(destination, boardState)){
                        possibleMoves.push(destination);
                    }else if( tileIsOccupiedByOpponent(destination, boardState, queen.team)){
                    possibleMoves.push(destination);
                    break;
                    }else{
                        break;
                    }
                      }

        
return possibleMoves;
    }