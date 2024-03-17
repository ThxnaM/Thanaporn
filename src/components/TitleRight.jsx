import React from 'react'

export const  TitleRight = (props)  =>{
  return (
    <>
    
    <div className="titlePortRight">
        <h2>{props.titles}</h2>
        {props.children}
    </div>
    
</>
  )
}