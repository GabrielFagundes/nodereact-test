import React from 'react'
import background from '../../assets/background.svg'
import RaceCard from '../../styleguide/RaceCard'

const Home = () => {


  return (
    <div className="home-container">
      <Logo />
      <div className="search-box">
        <div className="search-field">
          <input type="text" />
        </div>
      </div>
      <RaceCard />
      <RaceCard />
      <RaceCard />
      <RaceCard />
      <RaceCard />
    </div>

  )

}

const Logo = () => (
  <div className="logo">
    McRaces
  </div>
)

export default Home;