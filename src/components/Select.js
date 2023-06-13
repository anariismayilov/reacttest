import React from 'react'
import { Globalcontex } from '../App'

export default function Select() {
    const mydata=React.useContext(Globalcontex) 
  return (
    <div className='catalog'>
        <span id='1' onClick={mydata.catalogchange}>Man</span>
        <span id='2' onClick={mydata.catalogchange}>Woman</span>
        <span id='3' onClick={mydata.catalogchange}>Electronics</span>
        <span id='4' onClick={mydata.catalogchange}>Jewelery</span>
        <span id='5' onClick={mydata.catalogchange}>All</span>
    </div>
  )
}
