import React from 'react'
import '../scss/component-scss/FourSteps.scss'
import history from './history'
import { Link } from "react-scroll";

function HomeFourSimpleSteps() {

    const showLogin = () => {
        history.push(`/login`)
    }
    return (
        
           <section className="four-steps-container">

               <div className="description">
                   <h1>Wystarczą 4 proste kroki</h1>
                   <div className="img"></div>
               </div>
               <div className="col-wrapper">
               <div className="columns">
               
               <div className="wybierz">
                   
                       <div className="icon"></div>
                       <h2>Wybierz rzeczy</h2>
                       <div className="dash"></div>
                       <p>ubrania, zabawki, sprzęt i inne</p>
                 
               </div>

               <div className="spakuj">
                  
                       <div className="icon"></div>
                       <h2>Spakuj je</h2>
                       <div className="dash"></div>
                       <p>skorzystaj z worków na śmieci</p>
                  
                   
               </div>

               <div className="zdecyduj">
                  
                       <div className="icon"></div>
                       
                       <h2>Zdecyduj komu chcesz pomóc</h2>
                       <div className="dash"></div>
                       <p>wybierz zaufane miejsce</p>
                  
               </div>

               <div className="zamów">
                   
                       <div className="icon"></div>
                       <h2>Zamów kuriera</h2>
                       <div className="dash"></div>
                       <p>kurier przyjedzie w dogodnym terminie</p>
                       
                 
               </div>
          </div>
         
         
               </div>
               <Link className="oddaj" onClick={showLogin} to="/login"> Oddaj rzeczy</Link>
              
           </section>
      
    )
}

export default HomeFourSimpleSteps
