
import React from 'react'

function Skills(props) {
  return (
    <div>
       <div className='border ml-40 mr-40 flex flex-col border rounded-2xl mt-5'>
      <h2 className='text-1xl font-bold'>Skills</h2>
      <p className='color'> {props.skill1}</p>
      <p className='color'> {props.skill2}</p>
      <p className='color'> {props.skill3}</p>
      <p className='color'> {props.skill4}</p>
      <p className='color'> {props.skill5}</p>
    </div>
    </div>
  )
}

export default Skills
