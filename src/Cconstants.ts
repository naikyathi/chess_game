export const HORIZONTALAXIS=["a", "b", "c", "d", "e", "f", "g","h"]
export const VERTICALAXIS=["1", "2", "3", "4","5","6","7","8"]


export function samePosition(p1:postion, p2:postion){
    return p1.x===p2.x && p1.y=== p2.y }

export const GRIDSIZE=100;

export interface postion{
    x:number;
    y:number
}



 export enum PieceType{
    PAWN,
    BISHOP,
    KNIGHT,
    ROOK,
    QUEEN,
    KING
   }
  
   export enum TeamType{
  
    OPPONENT,
    OUR
   }

   export interface Piece{
    image:string;
    position:postion
    type: PieceType;
    team:TeamType;
    enPassant?:boolean;
    possibleMoves? :postion[];

 }

  export const initalboardstate: Piece[]=[

    {
        image:'assests/image/elephant_b.png',
        position:{x:0,
        y:7},
        type:PieceType.ROOK,
        team:TeamType.OPPONENT,
    },


    {
    image:`assests/image/horse_b.png`,
    position:{x:1, 
    y:7, },
    type:PieceType.KNIGHT, 
    team:TeamType.OPPONENT
    },


    {
        image:`assests/image/bishop_b.png`,
        position:{x:2, 
        y:7,
     },
        type:PieceType.BISHOP, 
        team:TeamType.OPPONENT
        },
        {
            image:`assests/image/queen_b.png`,
            position:{x:3, 
            y:7, 
            },
            type:PieceType.QUEEN, 
            team:TeamType.OPPONENT
            },


            {
                image:`assests/image/king_b.png`,
                position:{x:4, 
                y:7, },
                type:PieceType.KING, 
                team:TeamType.OPPONENT
                },


                {
                image:'assests/image/elephant_b.png',
               position:{ x:7,
                y:7,
               },
                type:PieceType.ROOK,
                team:TeamType.OPPONENT
            

            },
            {
            image:`assests/image/horse_b.png`,
            position:{x:6, 
            y:7, 
            },
            type:PieceType.KNIGHT, 
            team:TeamType.OPPONENT
            },
            {
                image:`assests/image/bishop_b.png`,
                position:{x:5, 
                y:7} ,
                type:PieceType.BISHOP, 
                team:TeamType.OPPONENT
                },










{
                image:'assests/image/elephant_w.png',
                position:{x:0,
                y:0},
                type:PieceType.ROOK,
                team:TeamType.OUR,
            },
            {
            image:`assests/image/horse_w.png`,
           position:{ x:1, 
            y:0},
            type:PieceType.KNIGHT, 
            team:TeamType.OUR
            },
            {
                image:`assests/image/bishop_w.png`,
               position:{ x:2, 
                y:0}, 
                type:PieceType.BISHOP, 
                team:TeamType.OUR
                },
                {
                    image:`assests/image/queen_w.png`,
                    position:{x:3, 
                    y:0}, 
                    type:PieceType.QUEEN, 
                    team:TeamType.OUR
                    },
                    {
                        image:`assests/image/king_w.png`,
                        position:{x:4, 
                        y:0}, 
                        type:PieceType.KING, 
                        team:TeamType.OUR
                        },
                        {
                        image:'assests/image/elephant_w.png',
                       position:{x:7,
                        y:0},
                        type:PieceType.ROOK,
                        team:TeamType.OUR,
                    },
                    {
                    image:`assests/image/horse_w.png`,
                    position:{x:6, 
                    y:0}, 
                    type:PieceType.KNIGHT, 
                    team:TeamType.OUR
                    },
                    
                    {
                        image:`assests/image/bishop_w.png`,
                        position:{x:5, 
                        y:0}, 
                        type:PieceType.BISHOP, 
                        team:TeamType.OUR
                        },





                           
                             {
                           
                    image:'assests/image/soldier_w.png',
                    position:{x:0, 
                    y:1},
                    type:PieceType.PAWN,
                     team:TeamType.OUR
                    },
                   
                    
                    {    
                        image:'assests/image/soldier_w.png',
                        position:{x:1, 
                        y:1},
                        type:PieceType.PAWN,
                         team:TeamType.OUR
                        },    


                        {    
                            image:'assests/image/soldier_w.png',
                            position:{x:2, 
                            y:1},
                            type:PieceType.PAWN,
                             team:TeamType.OUR
                            }, 



                            {    
                                image:'assests/image/soldier_w.png',
                                position:{x:3, 
                                y:1},
                                type:PieceType.PAWN,
                                 team:TeamType.OUR
                                }, 


                                {    
                                    image:'assests/image/soldier_w.png',
                                    position:{x:4, 
                                    y:1},
                                    type:PieceType.PAWN,
                                     team:TeamType.OUR
                                    }, 


                                    {    
                                        image:'assests/image/soldier_w.png',
                                       position:{x:5, 
                                        y:1},
                                        type:PieceType.PAWN,
                                         team:TeamType.OUR
                                        }, 



                                        {    
                                            image:'assests/image/soldier_w.png',
                                            position:{x:6, 
                                            y:1},
                                            type:PieceType.PAWN,
                                             team:TeamType.OUR
                                            }, 


                                            {    
                                                image:'assests/image/soldier_w.png',
                                                position:{x:7, 
                                                y:1},
                                                type:PieceType.PAWN,
                                                 team:TeamType.OUR
                                                }, 




                                                
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:0, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:1, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:2, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:3, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },


                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:4, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                           position:{ x:5, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:6, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                        {
                    
                            image:'assests/image/soldier_b.png',
                            position:{x:7, 
                            y:6},
                            type:PieceType.PAWN, 
                            team:TeamType.OPPONENT
                        },

                        
                   
                            

  ];