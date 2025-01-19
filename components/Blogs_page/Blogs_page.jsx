import React from 'react'

function Blogs_page({ post }) {
    return (
        <>
            <h1 className='font-bold text-5xl'>{post.ID}</h1>
            <div>{post.Text}</div>
        </>
    )
}

export default Blogs_page