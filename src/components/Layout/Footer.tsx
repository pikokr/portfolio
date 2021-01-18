import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full border-t">
      <div className="py-4 grid md:grid-cols-3 px-2 container mx-auto">
        <div className="flex flex-col">
          <Link to="/">홈</Link>
          <Link to="/about">소개</Link>
        </div>
        <div className="flex flex-col">
          <Link to="/projects">프로젝트</Link>
          <Link to="/discord">디스코드</Link>
        </div>
        <div className="md:text-right">2020 &copy; PIKOSTUDIO</div>
      </div>
    </div>
  )
}

export default Footer
