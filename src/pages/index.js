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
          <div className='changeQ'>
          <Link to='#'>Change the question</Link>
          </div>
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
      <div className='calendar'>
        <h2>
          November 2018
        </h2>
        <div>
          <ul className="days">
            <li><span class="old-new">29</span></li>
            <li><span class="old-new">30</span></li>
            <li><span class="old-new">31</span></li>
            <li>1</li>
            <li>2</li>
            <li>3<div class="medal"></div></li>
            <li>4<div class="medal"></div></li>
            <li>5<div class="medal"></div></li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21<div class="medal"></div></li>
            <li>22<div class="medal"></div></li>
            <li>23<div class="medal"></div></li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li><span class="active">28</span></li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li><span class="old-new">1</span></li>
           </ul>
        </div>
      </div>

      <div className='goal'>
        <div className='goalDays'>
            <h3>Cuurent goal is 28 days 🤘</h3>
        </div>
        <div className='loader'>
          <div className='loaderActive'>
          </div>
        </div>
        <div className='counter'>
          <div className='changeGoal'>
          <Link to='#'>Change goal</Link>
          </div>
          <div className='count'>
            <p>18/28</p>
          </div>
        </div>
      </div>

      <div className='long'>
        <div className='path'>
          <h3>Longest path is 39 days</h3>
        </div>
          <p>It was 12/05/2018 — 31/06/2018</p>
      </div>

      <div className='total'>
        <div className='totalCount'>
          <h3>In total 284 badgets earned by incredible hard work</h3>
        </div>
          <Link to='#'>View it all</Link>
      </div>

      <div className='feedback'>
          <div className='star'>
            <img src={require('../images/inUse.svg')} width='12px' />
          </div>
          <div className='feedText'>
            Already helped 2,395 peoples
          </div>
      </div>

    </div>


    <div className='main'>

      <div className='badget'>
        <img src={require('../images/medal.png')} width='460px' />
      </div>

      <div className='cheers'>
        <p>This is your last badget. Earned 27/11/2018</p>
        <div className='text'>
          <h3>Be proud and share your resault 😎</h3>
        </div>

        <div className='social'>
          <ul className='socialIcon'>
            <li>
              <Link to='#'>
                <img src={require('../images/facebook.svg')} width='18px' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <img src={require('../images/twitter.svg')} width='21px' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <img src={require('../images/instagram.svg')} width='18px' />
              </Link>
            </li>
          </ul>
        </div>

        <div className='credits'>
        <p>Design and code by <Link to='tematroinoi.com'>Artem Troinoi</Link></p>
        </div>

      </div>
      </div>



  </div>
)

export default IndexPage
