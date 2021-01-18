import React from 'react'
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
        <div className="p-4 w-full border-t">asdf</div>
      </div>
    </div>
  )
}

export default Layout
