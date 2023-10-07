import React from 'react'

const Square = ({color,hexa,isDarkText}) => {
  return (
    <div>
        <div className='box'
        style={{
            backgroundColor: color,
            color: isDarkText ? "#000" : "#FFF"
        }}
        >
            
        <p>{color ? color : "Empty Value" }</p>
        <p>{hexa ? hexa : null}</p>
        
        </div>
       
    </div>
  )
}

Square.defaultProps = {
    color:"Empty Color Vlaue"
}

export default Square