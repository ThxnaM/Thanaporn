import React from 'react'

export const  Title = (props)  =>{
  return (
    <>
    <div className="titlePort">
        <h2> {props.title}</h2>
        {props.children}
    </div>

    
</>
  )
}
