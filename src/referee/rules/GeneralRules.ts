import { Piece, TeamType, postion, samePosition } from "../../Cconstants";

export const tileIsOccupied=(position: postion, boardState: Piece[]): boolean=> {

    const piece = boardState.find((p) => samePosition(p.position, position));

    if (piece) {
        return true;
    } else {
        return false;
    }
}


export const tileIsOccupiedByOpponent=(position: postion, boardState: Piece[], team: TeamType): boolean=> {
    const piece = boardState.find(
        (p) => samePosition(p.position, position) && p.team !== team)

    if (piece) {
        return true;
    } else {
        return false;
    }

}

export const tileIsEmptyOrOccupiedbyOpponent=(
    position: postion,
    boardState: Piece[],
    team: TeamType
) =>{
    return (
        !tileIsOccupied(position, boardState) || 
        tileIsOccupiedByOpponent(position, boardState, team)
        );
    
    }