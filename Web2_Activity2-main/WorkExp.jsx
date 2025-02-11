
import React from 'react'

function WorkExp(props) {
  return (
    <div className='border ml-40 mr-40 flex flex-col border rounded-2xl mt-5'>
    <h2 className='text-1xl font-bold'>Work Experience</h2>
    <p>Front End Develoer at Universe7</p>
    <p className='color'>{props.date}</p>
    <p>developing and maintaining the front end of the website</p>
    <p> Web developer at Web Problems
    </p>
    <p className='color'>{props.date2}</p>
    <p>Work on various projects and develop new skills</p>
  </div>
  )
}

export default WorkExp
