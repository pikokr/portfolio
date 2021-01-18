import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className="flex-grow flex"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="text-center">
        <div className="text-4xl">파랑이</div>
        <div className="text-2xl">그냥 개발자</div>
        <div className="flex gap-2 justify-center">
          <a href="mailto:pikokr@piko.app" target="_blank">
            <FontAwesomeIcon icon={['fas', 'envelope']} />
          </a>
          <Link to="/discord">
            <FontAwesomeIcon icon={['fab', 'discord']} />
          </Link>
          <a href="https://github.com/pikokr" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
