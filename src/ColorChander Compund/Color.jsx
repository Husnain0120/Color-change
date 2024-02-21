import React from 'react'
import {useState} from 'react';

const Color = () => {
    const [color, setColor]= useState("olive");
  return (

      <div className=' w-full h-screen duration-1000' style={{backgroundColor:color}}>
             <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className=' flex flex-wrap gap-3 justify-center shadow-lg bg-white  py-2 px-3 rounded-3xl'>
                    <button onClick={()=>setColor("red")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}}>Red</button>
                    <button onClick={()=>setColor("green")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"green"}}>Green</button>
                    <button onClick={()=>setColor("blue")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"blue"}}>Blue</button>
                    <button onClick={()=>setColor("orange")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"orange"}}>Orange</button>
                    <button onClick={()=>setColor("yellow")} className=' outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg ' style={{backgroundColor:"yellow"}}>Yellow</button>
                    <button onClick={()=>setColor("limeGreen")} className=' outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg ' style={{backgroundColor:"limeGreen"}}>Lime green</button>
                    <button onClick={()=>setColor("crimson")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"crimson"}}>Crimson</button>
                    <button onClick={()=>setColor("teal")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"teal"}}>Teal</button>
                    <button className='md:block hidden'>new</button>
                </div>
            </div>
      </div>
    
  )
}

export default Color
