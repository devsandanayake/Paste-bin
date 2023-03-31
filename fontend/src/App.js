import React,{Component} from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import AddBin from "./componenets/AddBin";
  
  
 
  export default class App extends Component{
   render(){
     return(
       <BrowserRouter>
         <div className="container">
         
         <Routes>
         <Route exact  path="/"  element={<AddBin/>}/>
         
          
         </Routes>
         </div>
                   
       </BrowserRouter>
     
     )
 
   }
 
  }
  