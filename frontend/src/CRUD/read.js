import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Table } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";
export default function Read()
{
    const history=useNavigate();
    const [Items, setItems] = useState([]);
 
    useEffect(() => {
      getUsers();
    }, []);
   
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4000/retrieval");
      setItems(response.data.items);

    };
  //   let users={}

  //   function temp(){
  //     console.log(Items)

  //   // axios.get("http://localhost:4000/retrieval")
  //   // .then((res) => {
  //   //   //setStudents(res.data);
  //   //   console.log(res.data);
  //   //   users=res.data;
  //   //   console.log(users)
      
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });

  // }

      function go_back()
      {
        history("/")
      }
      
      return (
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
            {Items.map((iter) => (
              <tr key={iter._id}>
                <td>{iter.Employee_id}</td>
                <td>{iter.Employee_name}</td>
                <td>{iter.Employee_dept}</td>
              </tr>
            ))}
          </tbody>
          </Table>
          <button className="btn btn-primary" onClick={()=>{go_back()}} type="submit">Back</button>
        {/* <button onClick={()=>{temp()}}>click</button> */}

        </div>
      );

}