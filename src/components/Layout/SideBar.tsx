import React from 'react'
import clsx from 'clsx'

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
        className={clsx('fixed h-full bg-white border-l transition-all', {
          '-right-full': !open,
          'right-0': open,
        })}
      >
        사이드바
      </div>
    </div>
  )
}

export default SideBar
