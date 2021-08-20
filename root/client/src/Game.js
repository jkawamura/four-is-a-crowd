import { useState } from "react";
import Icon from './Icon';

const Game = () => {

    const [Colors, setColors] = useState([]);

    var group = [];
    class icon {
        constructor(color, checked, element) {
            this.color = color;
            this.checked = checked;
            this.element = element;
        }
    }

    //stores all squares in the game
    var iconArray = [];

    const remove = (row, column) => {
        console.log(row, column)
    }

    const handleMouseEnter = (row, column) => {
        findGroup(row, column);
        groupHighlight();

    }

    const findGroup = (row, column) => {
        var current = iconArray[row][column];
        if(current.color === 'transparent'){
            return;
        }
        group.push(row, column);

        current.checked = true;

        if(column - 1 >= 0){
            var left = iconArray[row][column - 1];
            if(left.color === current.color && left.checked === false){
                findGroup(row, column - 1);
            }
        }
    
        //checks if the icon above the current one has the same color
        if(row - 1 >= 0){
            var top = iconArray[row - 1][column];
            if(top.color === current.color && top.checked === false){
                findGroup(row - 1, column);
            }
        }
    
        //checks if icon to the right of the current one has the same color
        if(column + 1 < iconArray[0].length){
            var right = iconArray[row][column + 1];
            if(right.color === current.color && right.checked === false){
                findGroup(row, column + 1);
            }
        }
    
        //checks if the icon below the current one has the same color
        if(row + 1 <  iconArray.length){
            var bot = iconArray[row + 1][column];
            if(bot.color === current.color && bot.checked === false){
                findGroup(row + 1, column);
            }
        }
    }

    const groupHighlight = () => {
        if(group.length >= 8){
            for(let i = 0; i < group.length; i+=2){
                let temp = [...Colors];
                temp[group[i]][group[i+1]] = 'black';
                setColors(temp);
                iconArray[group[i]][group[i+1]].color = '#000000';
            }
        }
    }

    var count = 0;
    var iconColors = ["#283c55","#6d597a","#e56b6f","#e88c7d", "#d0baa9",  "#5b4a68" ];

    for(let i = 0; i < 15; i++){
        iconArray.push([]);
        Colors.push([]);
        for(let j = 0; j<10; j++){
            let color = iconColors[Math.floor(Math.random()*iconColors.length)];
            Colors[i][j] = color;
            let html = <div key={count} className='icon' onMouseEnter={() => handleMouseEnter(i, j) } onClick={() => remove(i,j) } style={{backgroundColor: Colors[i][j]}}></div>
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