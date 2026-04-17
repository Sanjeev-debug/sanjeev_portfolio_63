import React from 'react'
import './SkillCard.css'

const SkillCard = ({item}) => {
  console.log(item)
  return (
    <>
    <div className='card' >
      <h2>{item.title}</h2>
      <br />
      {item.name.length > 0  &&
        item.name.map((list,index)=>{
          return <h3 key={index} >{list}</h3>
          
          
        })
      }
    </div>
    </>
  )
}

export default SkillCard