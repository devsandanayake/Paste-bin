 import React,{Component} from "react";
 import {BrowserRouter,Route, Routes} from 'react-router-dom'
 import AddBin from "./components/addBin";

  
  
 
  export default class App extends Component{
   render(){
     return(
       <BrowserRouter>
         <div className="container">
         <NavBar></NavBar>
         <Routes>
         <Route exact  path="/"  element={<AddBin/>}/>
         
          
         </Routes>
         </div>
                   
       </BrowserRouter>
     
     )
 
   }
 
  }
  