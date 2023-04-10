import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
export default function Search()
{
    const history=useNavigate();
    const [id, setid]=useState('');
    const [a, seta]=useState('');
    const [b, setb]=useState('');
    const [c, setc]=useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [notfound, setnotfound] = useState(false);
    const handleID = (e) => {
        setid(e.target.value);
        setSubmitted(false);
    };
    
    
    

    //   const getUsers = async () => {
    //     const response = await axios.get("http://localhost:4000/search",{params:{Employee_id:id}});
    //     setItems(response.data.items);
  
    //   };

    function go_back()
      {
        history("/")
      }

    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (id === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        
        axios.get("http://localhost:4000/search",{
            params:{Employee_id:id}
        }).then((res)=>{
            console.log(res.data.items.length);
            console.log(res.data);
            if(res.data.items.length>0)
            {
            seta(res.data.items[0].Employee_id);
            setb(res.data.items[0].Employee_name);
            setc(res.data.items[0].Employee_dept);
            setSubmitted(true);
            setError(false);
            setnotfound(false);
            }
            else{
                setnotfound(true);
                setSubmitted(false);
                setError(false);
            }

            // print_the_data(res.data.items.Employee_id,res.data.items.Employee_name,res.data.items.Employee_dept)
        });
        }
        <h1>{a}</h1>
    };
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1>Employee found!!</h1>
        </div>
        );
    };
    const notFoundMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: notfound ? '' : 'none',
            }}>
            <h1>Employee Not found!!</h1>
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
        <div>
        <div className="form cre">
	<div>
		<h1>Employee Search</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
        {notFoundMessage()}
	</div>

	<form>

		<label className="label">Employee ID</label>
		<input onChange={handleID} className="input"
		value={id} type="number" />


		<div className='mt-3'>
            <button className='btn  btn-primary' onClick={handleSubmit} type="submit">
		    Search
		    </button>
        </div>

        

	</form>
	</div>

<div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
            <tr >
                <td>{a}</td>
                <td>{b}</td>
                <td>{c}</td>
              </tr>
            </tbody>
            </Table>
            </div>
        
            <button className="btn btn-primary" onClick={()=>{go_back()}} type="submit">Back</button>
        </div>
      );
}