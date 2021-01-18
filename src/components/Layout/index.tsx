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
        <div className="flex-grow flex flex-col">
          <div className="h-14 w-full" />
          <div className="container px-2 mx-auto flex-grow flex flex-col">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
