
import { useState } from 'react';

const CurrentScore = ({setScore, score}) => {
    // const [Score, setScore] = useState(0);
    const handleClick = () => {
        setScore(score+1);
    }
    return (
        <div className='score'>
            <h2>Score: {score}</h2>
            <button onClick={handleClick}>Increase Score</button>
        </div> 
        
     );
}
 
export default CurrentScore;