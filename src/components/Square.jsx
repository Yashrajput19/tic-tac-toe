import React from 'react'

const Square = (props) => {
  return (
    <div

    style={{border: "1px solid" , height: "150px" ,width: "100%",display: "flex" , 
    alignItems:"center" , justifyContent: "center"}} 

    className='square'
    
    onClick={props.onClick}
    >
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square