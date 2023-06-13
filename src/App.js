import React from 'react'
import './App.css';
import One from './components/List';
import Basket from './components/Basket';
import Select from './components/Select';
import { createContext, useEffect,useState } from 'react';
import axios from 'axios';
export const Globalcontex=createContext()
function App() {

  const [one, setone] = useState(null)
  const [main, setmain] = useState(null)
  const [itemid, setitemid] = useState([])
  const [modal, setModal] = useState(false);
  const [constant,setConstant]=useState(null)
  
   const getinfo = async() => {
    let res = await  axios.get("http://localhost:1337/products")
    setone(res.data)
    setmain(res.data)
    setConstant(res.data)
    console.log(one);
  }

  useEffect(  ()=>{ 
  getinfo()
  },[])  

  function inputvalue(e) {  
    console.log(e.target.value)
    var arr=[]
         main && main.map((number) => {
          var tester=number.caption+number.description         
          if (tester.toLowerCase().indexOf(e.target.value.toLowerCase())>-1) {
            arr.push(number)          
          }        
          else {            
            setone([])
          }
         })
         setone(arr)
         if (e.target.value==="") {setone(main)}        
  }  
  const catalogchange = (e) => {     
    var arr=[]
    constant && constant.map((number) => {              
          if (e.target.id=="1") {
            if(number.category=="man") {arr.push(number)}        
           }        
          else if (e.target.id=="2") {
            if(number.category=="woman")  
            {arr.push(number)}                     
          }      
          else if (e.target.id=="4") {
            if(number.category=="jewelery") 
             {arr.push(number)}                    
          }      
          else if (e.target.id=="3") {
            if(number.category=="electronics")  
             {arr.push(number)}                  
          }   
         })
         console.log(arr)
         setone(arr)
         setmain(arr)
         if (e.target.id=="5") {setone(constant)
          setmain(constant)
        } 
    }  
 
  const basket = (id) => {          
    main && main.map((number) => {             
     if (number.id===id) {
       if(number.count){number.count++}  
        else {number.count=1   
       setitemid(itemid.concat(number))        
       }         
     }      
    })}  

  function showbasket()
  {
    setModal(true)
  }


  return (
    <Globalcontex.Provider value={{one,main,itemid,basket,catalogchange}}>
    <div className="App">   
    <Select/>
    <div className='container'>
    <button className='basketbutton' onClick={showbasket}><i className="fa-solid fa-cart-shopping"></i></button>
      
    <div className="modal" style={{ display: modal ? "flex" : "none" }}>
      <button id='close' onClick={()=> { setModal(false)}}>x</button>
      <Basket />   
    </div>      
    <div style={{ display: modal ? "none" : "block"  }}>
    <input type="text" onInput={inputvalue} placeholder="Search Name"/>      
      <One/>

    </div>

    </div>   

    </div>
    </Globalcontex.Provider>
  );
}

export default App;
