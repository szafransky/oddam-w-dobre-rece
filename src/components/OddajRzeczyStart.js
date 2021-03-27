import React from 'react'
import '../scss/component-scss/OddajRzeczyStart.scss'

function OddajRzeczyStart() {
    
    return (
        <section >
            <div className="container oddaj-rzeczy-container">
                <div className="img-container"></div>
                <div className="description-container">
                <div className="description">
                    <h2>Oddaj rzeczy których już nie chcesz POTRZEBUJACYM</h2>
                    
                    <div className="img-description"></div>
                    <p>Wystarczą 4 proste kroki:</p>
                    <div className="kroki-wrapper">
                        <div className="square">
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="square">
                            <p>Spakuj w worki</p>
                        </div>
                        <div className="square">
                            <p>Wybierz fundacje</p>
                        </div>
                        <div className="square">
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                
                </div>
                </div>
            </div>
            <div className="wazne-container">
                <h1>Ważne!</h1>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>
            </div>
       
        
    </section>
    )
}

export default OddajRzeczyStart
