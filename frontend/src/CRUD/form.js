import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Form() {
const history=useNavigate();
const [id, setID] = useState('');
const [name, setName] = useState('');
const [dept, setDept] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleID = (e) => {
	setID(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handleDept = (e) => {
	setDept(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (id === '' || name === '' || dept === '') {
	setError(true);
	} else {
		axios.post("http://localhost:4000/path",{
			Employee_id:id,
			Employee_name:name,
			Employee_dept:dept
		}).then((res)=>{
			if(res.data.put===1)
			{
				setError(true)
				setSubmitted(false)
			}
			else{
				setSubmitted(true);
				setError(false);
				setTimeout(function() {
					history("/");
				  }, 2000);
			}
		})
		
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Employee {name} has been craeted!!</h1>
	</div>
	);
};

// Showing error message if error is true
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

return (
	<div className="form cre">
	<div>
		<h1>Employee Creation</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Empolyee ID</label>
		<input onChange={handleID} className="input"
		value={id} type="number" />

		<label className="label">Employee Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Employee Department</label>
		<input onChange={handleDept} className="input"
		value={dept} type="text" />

		<div className='mt-3'>
            <button className='btn  btn-primary' onClick={handleSubmit} type="submit">
		    Create
		    </button>
        </div>
	</form>
	</div>
);
}
