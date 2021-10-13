//const API_URL='https://jsonplaceholder.typicode.com/users/5';
//const API_URL='https://cryptic-headland-77186.herokuapp.com/productos/25';
const API_URL='https://safe-river-82717.herokuapp.com/';
//const API_PRODUCTOS ='https://safe-river-82717.herokuapp.com/'


export const listCompanies = async() =>{
    return await fetch(`${API_URL}product/`);
};

export const getCompany = async(companyId) =>{
    return await fetch(`${API_URL}product/${companyId}`);

};
    


export const registerCompany = async (newCompany) =>{
    return await fetch(API_URL,{
        method:'POST',
        Headers:{
            'Content-Type':'application/json'
        },
        bady:JSON.stringify({
            "name":String(newCompany.name).trim(),
            "foundation":parseInt(newCompany.foundation),
            "webside":String(newCompany.webside).trim(),
        })
    });

};


export const deleteCompany = async (prod_Id) =>{
    
    return await fetch(`${API_URL}product/${prod_Id}`,{
        method:'DELETE',
        
    });
    
};
   