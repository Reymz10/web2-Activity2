
import React from 'react'

const Header = (props) => {
  return (
    <div className='header flex flex-col items-center justify-center'>
      <img src="/src/assets/images/luffy.jfif" alt="" className='w-30 h-30 round rounded-full'/>
     <h2 className='text-1xl font-bold'>{props.name}</h2>
     <p className='text w-80 text-xs'>A web developer with a passion for building user-friendly and accessible applications.</p>
    </div>
  )
}

export default Header
