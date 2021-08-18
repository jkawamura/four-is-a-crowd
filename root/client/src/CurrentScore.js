
import { useState } from 'react';

const CurrentScore = () => {
    const [Score, setScore] = useState(0);
    const handleClick = () => {
        setScore(Score+1);
    }
    return (
        <div>
            <h2>Score: {Score}</h2>
            <button onClick={handleClick}>Increase Score</button>
        </div> 
        
     );
}
 
export default CurrentScore;