import React, { useContext, useState, useEffect } from 'react';
import {FormContext} from './OddajRzeczyForm'
import '../scss/component-scss/Form5.scss'
// import { withFirebase} from '../Firebase';

// import { FirebaseProvider } from './components/Firebase/context';
import { FirebaseContext } from './Firebase';



function Form5() {

    const {state, set} = useContext(FormContext);
    const firebase = useContext(FirebaseContext);
    console.log(firebase);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(userAuth => {
            console.log(userAuth);
            set({
                userId: userAuth.uid
                });

          });
    }, [])

    const onSubmit = event => {
      
       
            // Create a form entity in your Firebase realtime database
            firebase
                .formularz()
                .push({

                     state
                 })
                .then(test => console.log("Working"));


                
                event.preventDefault();
                    set({
                        step: 6
                       
                })
                

                
      }

    return (
        <div className="podsumowanie">
           
            <div className="oddajesz-container">
            <h1>Podsumowanie Twojej darowizny</h1>
                <h2>Oddajesz</h2>
                <div className="co">
                    <div className="img"></div>
                    <p>{state.bags} worki, {state.coChceszOddac.map((el, index) => {
                        if(index === 0) {
                            return el;
                        }else {
                            return  ", " + el;
                        }
                        
                    })}, {state.komuPomoc}</p>
                </div>
                <div className="lokalizacja">
                    
                    <div className="img"></div>
                    <p>Dla lokalizacji: {state.lokalizacja}</p>
                </div>

                <div className="lok-termin-container">
                    <div className="adres">
                    <h1>Adres odbioru</h1>
                        <div className="ulica container">
                            <label>Ulica</label>
                            <p>{state.adres.ulica}</p>
                        </div>
                        <div className="miasto container">
                            <label>Miasto</label>
                            <p>{state.adres.miasto}</p>
                        </div>
                        <div className="kod container">
                            <label>Kod pocztowy</label>
                            <p>{state.adres.kodPocztowy}</p>
                        </div>
                        <div className="numer-tel container">
                            <label>Numer telefonu</label>
                            <p>{state.adres.numerTel}</p>
                        </div>
                    </div>
                    <div className="termin">
                        <h1>Termin</h1>
                        <div className="data container">
                            <label>Data</label>
                            <p>{state.terminOdbioru.data}</p>
                        </div>
                        <div className="godzina container">
                            <label>Godzina</label>
                            <p>{state.terminOdbioru.godzina}</p>
                        </div>
                        <div className="uwagi container">
                            <label>Uwagi dla kuriera</label>
                            <p>{state.terminOdbioru.uwagi}</p>
                        </div>
                    </div>

                </div>
                
                <div className="button-container">
                    <button onClick={() => {
                        set({
                            step: state.step -1
                        })
                    }}>Wstecz</button>
                    <button onClick={onSubmit}>Wyślij</button>
                    
                </div>
               
                   

            </div>
           
        </div>
    )
}

export default Form5
