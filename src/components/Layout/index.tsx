import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className="w-full flex flex-col"
        style={{
          minHeight: '100vh',
        }}
      >
        <div>
          <div className="h-14 w-full" />
          {children}
        </div>
        <div className="flex-grow" />
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
      </div>
    </div>
  )
}

export default Layout
