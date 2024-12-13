import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='flex flex-col text-5xl'>
      <div className=''>Jay Jagannath ⭕❗⭕</div>
      <div>
        To know more about <Link className='underline' href="/fundraising">Fundraising</Link>
      </div>
    </div>
  )
}