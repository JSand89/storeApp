import { useState } from "react";
import{ useHistory} from "react-router";

import * as CompanyServer from './CompanyServer';

const CompanyForm=()=> {
    const history =useHistory();
    const initialState={ id:0,name:"",foundation:1950,website:""};
    const[company,setCompany]=useState(initialState);

    const handleInputChange=(e)=>{
        //console.log(e.target.name);
        //console.log(e.target.value);

        setCompany({...company,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //console.log(company);

        try{
            let res;
            res= await CompanyServer.registerCompany(company);
            const data =await res.json();

            if(data.massage= "Success"){
                setCompany(initialState);
            }
           // console.log(data);
           history.push("/");
        } catch(error){
            console.log(error);
        }
    };

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">mercatodo</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={company.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required/> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Foundation</label>
                    <input type="number" name="foundation" value={company.foundation}  onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
                </div>
                <div className="mb-3 ">
                    <label className="form-label"> Webside</label>
                    <input type="url" name="website"  value={company.website}  onChange={handleInputChange} className="form-control" maxLength="100" required/>
                </div>
                 <div className="d-grid gap-2"> 
                 <button type="submit" className="btn btn-block btn-success">register
                    </button>
                 </div>          
            </form>
        </div>
    )
};
export default CompanyForm;