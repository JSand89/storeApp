import React from "react";
import {useHistory} from "react-router-dom";
import { useEffect } from "react";
import * as CompanyServer from './CompanyServer';


const CompanyItem=({mercatodo}) =>{
    //const[mercatodo,setMercatodo]=useState([]);
    
    const history=useHistory();
    //console.log(props.mercatodo);
    //console.log(listCompanies)
    const handleDelete= async(prodId)=>{
       await CompanyServer.deleteCompany(prodId);
       console.log(prodId);

       CompanyServer.listCompanies() 
        
    }; 
   
    // useEffect(() => {
    //     listCompanies();
    // }, []);

    return( 
        
        <div className="col-md-4 mb-4">
            {/* {console.log(mercatodo, 'b')} */}
            <div className="card card-body">
                <h3 className="card-title"> {mercatodo.prod_name} 
                <button onClick={()=>history.push(`/updateCompany//${mercatodo.id}`)} className=" ms-2 btn btn-sm btn-info">Update</button></h3>
                <p className="card-text"> Proveedor: <strong> {mercatodo.prod_provider}</strong>
                <br/>
                Existencias: <strong> {mercatodo.prod_existences}</strong>
                <br/>
                </p>
                
                <p className="card-text"> Descripcion: <strong> {mercatodo.prod_description}</strong></p>
                <p className="card-text"> Fecha de llegada: <strong> {mercatodo.prod_date}</strong></p>
                <p className="card-text"> Categoria: <strong> {mercatodo.prod_category}</strong></p>
                <a href={mercatodo.webside} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Editar producto
                </a>
                <button onClick={()=>mercatodo.prod_id && handleDelete(mercatodo.prod_id)}  className="btn btn-danger my-2">Delete Product</button>
            </div>  
        </div> 
    )
};
export default CompanyItem;