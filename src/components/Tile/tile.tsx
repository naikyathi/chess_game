import  './tile.css';

// function Tile(number){
//     let number1=number

//     if(number1%2===0){
//         return(
// <div className='tile drak-tile'>hello!</div>
//         )
//     }
//         else{
//             return(
// <div className='tile white-tile'>hello!</div>
//             )
//     }

// }
// export default Tile;
interface props{
    image?:string;
    number:number;
    highlight:boolean;
   

}


export default function tile({number,image, highlight}:props){
const className:string=["tile",
number %2===0 && "black-tile",
number %2!==0 && "white-tile",
highlight && 'tile-highlight'
image && "chess-piece-tile "].filter(Boolean).join(" ");

    
            return(
    <div className={className}>
       {image && <  div style={{backgroundImage:`url(${image})`}} ></div>}
      
        </div>
            );
        }
            