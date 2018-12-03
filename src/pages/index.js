import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <div>
    <div className='left-bar'>
      <div className='logo' >
        <img src={require('../images/logo.svg')} width='114px' />
      </div>
      <div className='gq'>
        <div className='quest' id='qestion'> 
          <h1>Are you clean today?</h1>
          <Link to='#'>Change the question</Link>
        </div>
        <div> 
          <button className='raiced' id='yes'>
            Yes
          </button>
        </div>
        <div> 
          <button className='flat' id='no'>
            No
          </button>
        </div>
      </div>
      <div className='about'>
        <h2>
          About the project
        </h2>
        <p>
          This is a project that will help you get rid of bad habits or help you focus on the goal.
        </p>
        <p className='copyright'>
          © Copyright 2018 Forma. All rights reserved.
        </p>
      </div>
      <div className='feedback'>
        <Link to='#'>
          <div className='star'>
            <img src={require('../images/feedback.svg')} width='12px' />
          </div>
          <div className='feedText'>
            Leave a feedback
          </div>
        </Link>
      </div>
    </div>
    <div className='right-bar'>
    </div>
  </div>
)

export default IndexPage
