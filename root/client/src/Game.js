import { useState } from "react";

const Game = () => {

    const [Group, setGroup] = useState();
    class icon {
        constructor(color, checked, element) {
            this.color = color;
            this.checked = checked;
            this.element = element;
        }
    }

    //stores all squares in the game
    var iconArray = [];

    const remove = () => {

    }

    const findGroup = (row, column) => {
        var current = iconArray[row][column];
        if(current.color === 'transparent'){
            return;
        }
    }

    var count = 0;
    var iconColors = ["#283c55","#6d597a","#e56b6f","#e88c7d", "#d0baa9",  "#5b4a68" ];

    for(let i = 0; i < 15; i++){
        iconArray.push([]);
        for(let j = 0; j<10; j++){
            
            let color = iconColors[Math.floor(Math.random()*iconColors.length)];
            let html = <div key={count} className='icon' onHover={() => findGroup(i, j) } onClick={ remove } style={{backgroundColor: color}}></div>
            iconArray[i][j] = new icon(color, false, html);
            count++;
        }
    }

    return (
        <div className="board">
            {iconArray.map((row) => {
                return row.map((x) => {
                    return x.element; 
                })
            })}
        </div> 
     );
}
 
export default Game;