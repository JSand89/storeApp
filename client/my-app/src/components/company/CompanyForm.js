import { useEffect, useState } from "react";
import{ useHistory, useParams} from "react-router";

import * as CompanyServer from './CompanyServer';

const CompanyForm=()=> {
    const history =useHistory();
    const params = useParams();

    const initialState={prod_category:"",prod_description:"",prod_existences:0,prod_name:"",prod_provider:""};
    const[company,setCompany]=useState(initialState);

    const handleInputChange=(e)=>{
        console.log(e.target.name,'name');
        console.log(e.target.value,'value');
        console.log(company,'company')
        setCompany({...company,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //console.log(e);

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

    // modo de actualizacion,getComany lee los datos de la compañia 
    const getCompany= async(companyId) =>{
        try{
            const res= await CompanyServer.getCompany(company.prod_Id);
            const data =await res.json();
            const{prod_id,prod_category,prod_date,prod_description,prod_existences,prod_name,prod_provider}=data.company;
            console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    // const API = 'https://safe-river-82717.herokuapp.com'
    
    // const getProducts=async()=>{
    //     const res=await fetch (API)
    //     const data=await res.json()
    //     console.log("Data productos ")
    //     console.log(data)
    // }

    //getProducts()   


    useEffect(()=> {
        if (params.id){
            getCompany(params.id);
           
        }        
    },[]);







    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Mercatodo</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="prod_name" value={company.id} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required/> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" name="prod_category" value={company.id}  onChange={handleInputChange} className="form-control"   />
                </div>
                <div className="mb-3 ">
                    <label className="form-label"> date</label>
                    <input type="date" name="prod_date"  value={company.id}  onChange={handleInputChange} className="form-control" maxLength="100" />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Description</label>
                    <input type="text" name="prod_description"  value={company.id}  onChange={handleInputChange} className="form-control" maxLength="100" />
                </div>

                <div className="mb-3 ">
                    <label className="form-label"> Existences</label>
                    <input type="number" name="prod_existences"  value={company.id}  onChange={handleInputChange} className="form-control" maxLength="100" />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">provider</label>
                    <input type="text" name="pro_provider"  value={company.id}  onChange={handleInputChange} className="form-control" maxLength="100"/>
                </div>

                 <div className="d-grid gap-2"> 
                 <button type="submit" className="btn btn-block btn-success"> Agregar
                    </button>
                 </div>          
            </form>
        </div>
    )
};
export default CompanyForm;