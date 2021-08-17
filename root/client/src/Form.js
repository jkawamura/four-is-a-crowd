
import { useHistory } from 'react-router-dom';

const Form = ({ setDifficulty, setID }) => {
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/game');
    }
    return ( 
        <div className="form">
            <h2>Four is a Crowd</h2>
            <input type="text" 
                required 
                maxlength='3' 
                minlength='3'
                onChange={(e)=>setID(e.target.value)} /><br />
            <div onChange={ (e) => setDifficulty(e.target.value) }>
                <label htmlFor="easy">Easy</label>
                <input type="radio" value='easy'  name='diff' />
                <label htmlFor="medium">Medium</label>
                <input type="radio" value='medium' name='diff' />
                <label htmlFor="hard">Hard</label>
                <input type="radio" value='hard' name='diff' />
            </div>
            <button onClick={ handleSubmit }>Start Game</button>
        </div>
     );
}
 
export default Form;