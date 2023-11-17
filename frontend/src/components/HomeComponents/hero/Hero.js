import React from 'react'
import "./hero.css"
import Title from '../../title/Title'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle= 'WELCOME TO THE ONLINE JOURNEY' title='ONE Of The Best Places For Online Education '/>
            <p>
            CoED (Collaborative Online Education) is an innovative online platform designed to provide users with a dynamic and interactive learning experience. This website is dedicated to helping users, whether they are students, professionals, or lifelong learners, acquire knowledge and skills in a collaborative and engaging manner.</p>

            <div className='button'>
              <button className='primary-btn'>
                GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
              </button>

              <button className=''>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>

            </div>

          </div>
        </div>
      </section>
      <div className='margin'></div>
      </>
  )
}

export default Hero
