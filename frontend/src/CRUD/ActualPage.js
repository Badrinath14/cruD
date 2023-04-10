import { useNavigate } from "react-router-dom";

export default function ActualPage()
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
    function to_search_page()
    {
        history("/search")
    }
    return(
        <div className="">
            
                <div className="container">
                <div className="row mt-5" >
                    <div className="col">
                        <button className="btn btn-outline-primary" type="button" onClick={()=>{to_signin_page()}}>
                            Create
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary" type="button" onClick={()=>{to_update_page()}}>
                            Update
                        </button>
                    </div>
                </div>

                <div className="row mt-5">
                <div className="col">
                        <button className="btn btn-outline-primary" type="button" onClick={()=>{to_search_page()}}>
                            Search
                        </button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <button className="btn btn-outline-primary" type="button" onClick={()=>{to_read_page()}}>
                            Read
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary" type="button" onClick={()=>{to_delete_page()}}>
                            Delete
                        </button>
                    </div>
                </div>    
                </div>

        </div>
    );
}