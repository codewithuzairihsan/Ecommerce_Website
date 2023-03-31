import React from 'react'

export const Rating = ({value, text}) => {
  return (
    <>
    <div className="rating">
     
        <span style={{color: '#FF9529'}}>  
        <i className={value >=1.0 ? 'fa-solid fa-star' : value >=0.5 ? 'fa-solid fa-star-half': 'fa-solid fa-star'}></i>    
         </span>
        
         <span style={{color: '#FF9529'}}>  
        <i className={value >=2.0 ? 'fa-solid fa-star' : value >=1.5 ? 'fa-solid fa-star-half': 'fa-solid fa-star'}></i>    
         </span>
         
         <span style={{color: '#FF9529'}}>  
        <i className={value >=3.0 ? 'fa-solid fa-star' : value >=2.5 ? 'fa-solid fa-star-half': 'fa-solid fa-star'}></i>    
         </span>
         
         <span style={{color: '#FF9529'}}>  
        <i className={value >=4.0 ? 'fa-solid fa-star' : value >=3.5 ? 'fa-solid fa-star-half': 'fa-solid fa-star'}></i>    
         </span>
        
         <span style={{color: '#FF9529'}}>  
        <i className={value >=5.0 ? 'fa-solid fa-star' : value >=4.5 ? 'fa-solid fa-star-half': 'fa-solid fa-star'}></i>    
         </span>
         
         {text && text}
    </div>

    </>
  )
}
