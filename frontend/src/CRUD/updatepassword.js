import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function UpdatePassword()
{
    const history=useNavigate();
    const[id,setID]=useState('');
    const[newdept,setDept]=useState('');
    const[submit,setSubmitted]=useState(false);
    const [error, setError] = useState(false);
    const handleID=(e) => {
        setID(e.target.value);
        setSubmitted(false);
    };
    const handleDept=(e) => {
        setDept(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(id === '' || newdept === '')
        {
            setSubmitted(false);
            setError(true);
        }
        else
        {
    
            setSubmitted(true);
            setError(false);
            console.log("called") 
            axios.post("http://localhost:4000/update",
            {
                Employee_id:id,
                Employee_newDept:newdept
                
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
            display: submit ? '' : 'none',
            }}>
            <h1>Your Department has been changed to {newdept}!!</h1>
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
            <h1>Please enter all the fields</h1>
        </div>
        );
    };
    return(
        <div className="form cre">
	        <div>
	        	<h1>Update Department</h1>
	        </div>

	        {/* Calling to the methods */}
	        <div className="messages">
	        	{errorMessage()}
	        	{successMessage()}
	        </div>

	        <form>
	        	<label className="label">Empolyee ID</label>
	        	<input onChange={handleID} className="input"
	        	value={id} type="number" />

	        	<label className="label">Empolyee New Department</label>
	        	<input onChange={handleDept} className="input"
	        	value={newdept} type="text" />

	        	<div className='mt-3'>
                    <button className='btn  btn-primary' onClick={handleSubmit} type="submit">
	        	    Submit
	        	    </button>
                </div>
	        </form>
	    </div>
    );
}