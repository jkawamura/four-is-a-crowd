const SubmitForm = ({ id, score }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { id };

        fetch('/api', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('score added');
        }).catch((error) => {
            console.log(error);
        });
    }
    return ( 
        <div className="submit">
            <form onSubmit={ handleSubmit }>
                <button>Submit Score</button>
            </form>
        </div>
     );
}
 
export default SubmitForm;