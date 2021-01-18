import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="p-4 w-full border-t grid md:grid-cols-3">
      <div className="flex flex-col">
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
      </div>
      <div className="flex flex-col">
        <Link to="/">프로젝트</Link>
        <Link to="/about">디스코드</Link>
      </div>
      <div className="md:text-right">2020 &copy; PIKOSTUDIO</div>
    </div>
  )
}

export default Footer
