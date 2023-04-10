// import { useState } from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Firstpage()
{
    const history=useNavigate();
    function to_signin_page()
    {
        history("/create")
    }
    function to_update_page()
    {
        history("/update")
    }
    function to_read_page()
    {
        history("/read")
    }
    function to_delete_page()
    {
        history("/delete")
    }
    return(
        <div className="">
            <nav className="navbar bg-light">
                <form className="form-inline">
                    <button className="btn btn-outline-primary" type="button" onClick={()=>{to_signin_page()}}>
                        Create
                    </button>
                    <button className="btn btn-outline-primary" type="button" onClick={()=>{to_update_page()}}>
                        Update
                    </button>
                    <button className="btn btn-outline-primary" type="button" onClick={()=>{to_read_page()}}>
                        Read
                    </button>
                    <button className="btn btn-outline-primary" type="button" onClick={()=>{to_delete_page()}}>
                        Delete
                    </button>
                </form>
            </nav>
        </div>
    );
}