import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioProjects from './PortfolioCards/PortfolioProjects'
import "./Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
    <div className='portfolio-container'>
    <h2>Some of our Works</h2>
    <div className='project-section' >
        <PortfolioProjects items={4} />
    </div>
    <Link to="portfolio" className="portfolio-button" >
      See More Projects
    </Link>
    </div>
    </div>
  )
}

export default Portfolio