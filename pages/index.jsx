import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='flex '>
      {/* <Link className='' href="/"><Image
        src={"https://img.playbook.com/ZAcf9E2_ezL_No1cRd3mBsCjHOMEId6iVx1Ex5hfsmk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY5Y2NmMmUw/LTdmMmUtNGMxYy1i/YWRjLTgwNzE4Njdj/ZjNjOQ"}
        alt="Logo"
        width={500}
        height={500}
        quality={100}
        className=''>
      </Image></Link> */}
      <Link className='flex' href="/about">About Us</Link>
      <Link className='flex' href="/project">Projects</Link>
      <Link className='flex' href="/fundraising">Fundraising</Link>
      <Link className='flex' href="/news-and-memories">News And Memories</Link>
    </div >
  )
}