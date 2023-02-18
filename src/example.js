import React from 'react'



const Example = ({people})=>{
    return(
        <>
       {people.map((person)=>{
        const {id,name,age,image} = person
        return(
            <div key={id} className={"container"}> 
                <img src={image} alt="" srcset="" />
                <div className='flex-item'>
                    <h4>{name}</h4>
                    <h5>{age} years old</h5>
                </div>
            </div>
        )
       })}
        </>
    )
   
}
   


export default Example