import React from 'react'
import Header from './Header'
import Footer from './Footer'

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
        <Footer />
      </div>
    </div>
  )
}

export default Layout
