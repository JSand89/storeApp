import React from "react";
import {useHistory} from "react-router-dom";
import { useEffect,useState } from 'react';
import * as CompanyServer from './CompanyServer';


const CompanyItem=({mercatodo}) =>{
    //const[mercatodo,setMercatodo]=useState([]);
    
    const history=useHistory();
    //console.log(props.company);
    //console.log(listCompanies)
    const handleDelete= async(companyId)=>{
        await CompanyServer.deleteCompany(companyId);
       // console.log(companyId);

        //listCompanies() 

    }; 
   
    // useEffect(() => {
    //     listCompanies();
    // }, []);

    return( 
        
        <div className="col-md-4 mb-4">
            {console.log(mercatodo, 'b')}
            <div className="card card-body">
                <h3 className="card-title"> {mercatodo.username} 
                <button onClick={()=>history.push(`/updateCompany//${mercatodo.message}`)} className=" ms-2 btn btn-sm btn-info">Update</button></h3>
                <p className="card-text"> Proveedor: <strong> {mercatodo.username}</strong>
                <br/>
                Existencias: <strong> {mercatodo.email}</strong>
                <br/>
                </p>
                
                <p className="card-text"> Descripcion: <strong> {mercatodo.username}</strong></p>
                <p className="card-text"> Fecha de llegada: <strong> {mercatodo.username}</strong></p>
                <p className="card-text"> Categoria: <strong> {mercatodo.username}</strong></p>
                <a href={mercatodo.webside} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Go to webside
                </a>
                <button onClick={()=>mercatodo.id && handleDelete(mercatodo.id)}  className="btn btn-danger my-2">Delete Company</button>
            </div>  
        </div> 
    )
};
export default CompanyItem;