import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <div
      className="flex w-full fixed h-14 px-4 border-b"
      style={{
        alignItems: 'center',
      }}
    >
      <div className="text-2xl">test</div>
      <div className="flex-grow" />
      <div>
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </div>
    </div>
  )
}

export default Header
