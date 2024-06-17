import React from 'react'
import Blog from './Blog'

function page({params}:{params:{id:string}}) {
  return (
    <div className='w-[80vw] overflow-scroll'>
    <Blog id={params.id}/>
    </div>
  )
}

export default page