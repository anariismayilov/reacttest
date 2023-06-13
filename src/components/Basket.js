import React from 'react'
import { Globalcontex } from '../App'

export default function Basket() {
    const mydata=React.useContext(Globalcontex) 
   
  return (
    <div className='basketcontainer'>
   { mydata.itemid && mydata.itemid.map((number, index) => (      
      <div className='item' key={index}>
        <div className='itemtextcontainer'>    
        <h2>{number.caption}</h2>   
        <span className='listdesc'>{number.description}</span>
        <span className='listrating'>{number.rating}</span>
        <span>{number.price}$</span>
        <span className='listcategory'>{number.category}</span> 
        <div className='listcount'>      
          <span>{number.count}</span>          
          </div>        
        </div>
        <img src={number.imageurl} alt="" />        
      </div>
    ))}
    </div>
  )
}
