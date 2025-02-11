
import React from 'react'

function Contact(props) {
  return (
    <div className='border ml-40 mr-40 flex flex-col border rounded-2xl mt-5'>
      <h2 className='text-1xl font-bold'>Contact information</h2>
      <p>email: <p className='color'>{props.email}</p></p>
      <p>phone: <p className='color'> {props.phone}</p></p>
      <p>Address: <p className='color'>{props.address}</p></p>
    </div>
  )
}

export default Contact
