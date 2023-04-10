import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function DeleteUser()
{
    const history=useNavigate();
    const [id, setID] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleID = (e) => {
        setID(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
            console.log("called")
            axios.post("http://localhost:4000/delete",{
                Employee_id:id
            })
            setTimeout(function() {
                console.log("Good Night!");
                history("/");
              }, 2000);
        }
    };
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1>Employee successfully Deleted!!</h1>
        </div>
        );
    };
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields correctly</h1>
        </div>
        );
    };
    
    return(
        <div className="form cre">
	<div>
		<h1>Employee Deletion</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>

		<label className="label">Employee ID</label>
		<input onChange={handleID} className="input"
		value={id} type="number" />


		<div className='mt-3'>
            <button className='btn  btn-danger' onClick={handleSubmit} type="submit">
		    Delete
		    </button>
        </div>
	</form>
	</div>
    );
}