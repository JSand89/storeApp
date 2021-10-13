import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


//Componentes importados
import Navbar from './components/Navbar/Navbar';
import CompanyForm from './components/company/CompanyForm';
import CompanyList from './components/company/CompanyList';

import "bootstrap/dist/css/bootstrap.min.css"




ReactDOM.render(
  <BrowserRouter>
  <Navbar/> 
    <div className="container my-4">
      <Switch>
        <Route exact path="/" component={CompanyList}/>
       <Route path="/CompanyForm" component={CompanyForm}/>
       <Route path="/updateCompany/:id" component={CompanyForm}/>
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
