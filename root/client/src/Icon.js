
import { useState } from 'react';
const Icon = ( {color, key, handleMouseEnter, remove, row, column}, ) => {
    
    const [Color, setColor] = useState();
    return ( 
        <div key={key} className='icon' onMouseEnter={() => handleMouseEnter(row, column) } onClick={() => remove(row,column) } style={{backgroundColor: Color}}></div>
     );
}
 
export default Icon;