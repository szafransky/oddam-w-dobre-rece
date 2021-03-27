import React from 'react'
import '../scss/component-scss/Contact.scss'

function HomeContact() {
    return (
        <section className="contact-container">
            <div className="img"></div>
            <div className="contact-us-container">
                <div className="contact-wrapper">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="title-img"></div>
                    <div className="form-wrapper">
                        <form>
                            <div className="name-email-container">
                                <div className="name">
                                    <label>Wpisz swoje imie</label>
                                    <input placeholder="Max" className="name"></input>
                                </div>
                                <div className="email">
                                    <label>Wpisz swój email</label>
                                    <input placeholder="example@gmail.com" className="email"></input>
                                </div>
                                
                            </div>
                            <div className="textarea-container">
                                <label>Wpisz swoją wiadomośc</label>
                                <textarea placeholder="Lorem ipsum helr3ede fedncns cfjdksuf dnxnoeuf fncnuwufhn cndmldjd"></textarea>
                            </div>
                        
                        </form>
                    </div>
                </div>
               
            </div>
            
        </section>
    )
}

export default HomeContact
