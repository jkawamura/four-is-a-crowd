import { useState } from "react";

const Game = () => {

    const [Current, setCurrent] = useState();

    const remove = () => {

    }

    const findGroup = () => {

    }

    var iconArray = [];
    var count = 0;
    var iconColors = ["#283c55","#6d597a","#e56b6f","#e88c7d", "#d0baa9",  "#5b4a68" ];

    for(let i = 0; i < 15; i++){
        iconArray.push([]);
        for(let j = 0; j<10; j++){
            iconArray[i][j] = <div key={count} className='icon' onHover={ findGroup } onClick={ remove } style={{backgroundColor: iconColors[Math.floor(Math.random()*iconColors.length)]}}></div>
            count++;
        }
    }
    return ( 
        iconArray
     );
}
 
export default Game;