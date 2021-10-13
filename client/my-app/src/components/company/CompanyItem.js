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
                <h3 className="card-title"> {mercatodo.producto.prod_name} 
                <button onClick={()=>history.push(`/updateCompany//${mercatodo.id}`)} className=" ms-2 btn btn-sm btn-info">Update</button></h3>
                <p className="card-text"> Proveedor: <strong> {mercatodo.producto.prod_provider}</strong>
                <br/>
                Existencias: <strong> {mercatodo.producto.prod_existences}</strong>
                <br/>
                </p>
                
                <p className="card-text"> Descripcion: <strong> {mercatodo.producto.prod_description}</strong></p>
                <p className="card-text"> Fecha de llegada: <strong> {mercatodo.producto.prod_date}</strong></p>
                <p className="card-text"> Categoria: <strong> {mercatodo.producto.prod_category}</strong></p>
                <a href={mercatodo.webside} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Editar producto
                </a>
                <button onClick={()=>mercatodo.id && handleDelete(mercatodo.producto.id)}  className="btn btn-danger my-2">Delete Product</button>
            </div>  
        </div> 
    )
};
export default CompanyItem;