import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SideBar from './SideBar'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="w-full fixed border-b h-14">
      <div
        className="flex container mx-auto h-full"
        style={{
          alignItems: 'center',
        }}
      >
        <div className="text-2xl">test</div>
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
