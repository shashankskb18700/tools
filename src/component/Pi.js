import React,{useState} from 'react';


const Pi = ({ i }) => {
  
    console.log("yew pic wala hai " + i);
    return (
      <div>
        <img
        src={i} />
      </div>
      
    
    )
}
  
export default Pi;