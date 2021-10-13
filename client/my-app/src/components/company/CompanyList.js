import React from 'react';
import { useEffect,useState } from 'react';

// Components:
import CompanyItem from './CompanyItem';

//coneccion  lserver
import * as CompanyServer from './CompanyServer';

const CompanyList = () => {

    const[mercatodo,setMercatodo]=useState('');

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
        <div className="row">  
            {companies.map((company) => (
        <CompanyItem key={company.id} company={company} listCompanies={listCompanies} />
      ))}
        </div>
    );                  
    */
    if(mercatodo!== '')  {

        return (
                    
            <div className="row">  
            {console.log(mercatodo,'a')}
            {mercatodo.productos.map(product=><CompanyItem mercatodo={product} key={product.prod_id}/> )}

             {/* {mercatodo.productos.map(item=><CompanyItem props={item} />)}  */}

                {/* <CompanyItem mercatodo={mercatodo}/> */}

            </div>
         );


    }  else{
      return(<div/>)
    }        

     
};

export default CompanyList;
