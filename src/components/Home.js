import React from 'react'
import HomeHeader from './HomeHeader'
import HomeStart from './HomeStart'
import HomeWhatDone from './HomeWhatDone'
import HomeFourSimpleSteps from './HomeFourSimpleSteps'
import HomeAboutUs from './HomeAboutUs'
import HomeWhoWeHelp from './HomeWhoWeHelp'
import HomeContact from './HomeContact'
import Footer from './Footer'
import OddajRzeczy from './OddajRzeczy'
import '../scss/component-scss/Home.scss'



function Home() {

    
    return (
        <div className="content-wrapper">
            <HomeStart />
            <HomeWhatDone />
            <HomeFourSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            
            
        </div>
    )
}

export default Home
