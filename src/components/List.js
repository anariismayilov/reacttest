import React from 'react'
import { useState,useEffect } from 'react';


import { Globalcontex } from '../App'
export default function One() {  
  const mydata=React.useContext(Globalcontex)   
  return (
     <div className='container'>
     { mydata.one && mydata.one.map((number, indexone) => (
      <div className='item' key={indexone}>  
      <div className='itemtextcontainer'>        
        <h2>{number.caption}</h2>
        <span className='listdesc'>{number.description}</span>
        <span className='listrating'>{number.rating}</span>
        <span>{number.price}$</span>
        <span className='listcategory'>{number.category}</span>
        <button className='listbutton' onClick={()=>{mydata.basket(number.id)
          }}>Buy</button>
          </div>      

        <img src={number.imageurl} alt="" />     

      </div>
    ))}
    </div>
  
  );
}

