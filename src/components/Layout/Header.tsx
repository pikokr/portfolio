import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="w-full fixed border-b h-14">
      <div
        className="flex container mx-auto h-full px-2"
        style={{
          alignItems: 'center',
        }}
      >
        <Link to="/" className="text-2xl">
          파랑이
        </Link>
        <div className="flex-grow" />
        <div>
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer"
            icon={['fas', 'bars']}
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>
      <SideBar onClose={() => setSidebarOpen(false)} open={sidebarOpen} />
    </div>
  )
}

export default Header
