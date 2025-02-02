import React from 'react'

function Blogs_page({ post }) {
    return (
        <>
            <main className="text-center m-4 w-[80%] mx-auto" >
            <h1 className='font-bold text-5xl mb-6 text-[#8cee6b]'>{post.ID}</h1>
            <div className='text-2xl'>{post.Text}</div>
            </main>
            
        </>
    )
}

export default Blogs_page