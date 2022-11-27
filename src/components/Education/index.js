import React from 'react'

function Education({ data, children }) {
  return <div className="card gap-4">
    <div>
      <div className="label-icon bg-icon-school">{data.school}</div>
      <div className="label-icon bg-icon-edu">{data.level}</div>
      <div className="label-icon bg-icon-date">{data.date}</div>
    </div>
    <hr className="border-gray-500 border-[1.75px]" />
    <div>
      <img src={data.logo} className="w-1/4 mx-2 float-right" />
      <div>{children}</div>
    </div>
    <div className='clear-both'></div>
  </div>
}

export default Education