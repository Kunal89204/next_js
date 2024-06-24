import React from 'react'

const Blog = () => {
  return (
    <div className='bg-gray-700 rounded-lg'>
    <div className='flex items-center justify-between p-2'>
        <div className='w-10 h-10 rounded-full bg-gray-800'></div>
        <div>
            <div className='w-72 mb-1 h-4 rounded-sm bg-gray-800'></div>
            <div className='w-36 h-4 rounded-sm bg-gray-800'></div>
        </div>
        <div>
            <div className='w-2  h-2  rounded-full bg-gray-800'></div>
            <div className='w-2  h-2 my-1  rounded-full bg-gray-800'></div>
            <div className='w-2  h-2  rounded-full bg-gray-800'></div>
        </div>
    </div>

    <div className='p-48 bg-gray-800 text-gray-400'>content</div>
    <div className='p-2 text-gray-400'>Lorem ipsum dolor sit.</div>
  </div>
  )
}

export default Blog
