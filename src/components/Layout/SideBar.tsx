import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar: React.FC<{
  onClose: () => void
  open: boolean
}> = ({ open, onClose }) => {
  return (
    <div
      className={clsx('z-50 transition-all', {
        'opacity-0': !open,
        'pointer-events-none': !open,
      })}
    >
      <div
        onClick={onClose}
        className="bg-black opacity-50 fixed w-full h-full left-0 top-0"
      />
      <div
        className={clsx(
          'fixed h-full bg-white border-l transition-all flex flex-col',
          {
            '-right-full': !open,
            'right-0': open,
          },
        )}
        style={{
          minWidth: '100px',
        }}
      >
        <Link
          to="/"
          className="p-2 hover:bg-gray-200 transition-colors w-full"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={['fas', 'home']} className="mr-2" />홈
        </Link>
      </div>
    </div>
  )
}

export default SideBar
