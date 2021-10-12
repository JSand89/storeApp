import React from 'react';
import { useEffect,useState } from 'react';

// Components:
import CompanyItem from './CompanyItem';

//coneccion  lserver
import * as CompanyServer from './CompanyServer';

const CompanyList = () => {

    const[mercatodo,setMercatodo]=useState([]);

    const listCompanies= async ()=>{
        try {
            const res = await CompanyServer.listCompanies();
            const data= await res.json();
            console.log(data)
            setMercatodo(data);
        } catch (error) {
            console.log(error);
        }
    };    

    useEffect(() => {
        listCompanies();
    }, []);

    /*
    return (
        <div>  
            {companies.map((company) => (
        <CompanyItem key={company.id} company={company} listCompanies={listCompanies} />
      ))}
        </div>
    );
    */

    return (
        <div className="row">  
            <CompanyItem mercatodo={mercatodo}/>
        </div>
    );
};

export default CompanyList;
