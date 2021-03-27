import React, { useContext, useState } from 'react';
import {FormContext} from './OddajRzeczyForm'
import '../scss/component-scss/Form4.scss'

function Form4() {

    const {state, set} = useContext(FormContext);

    const handleOnSubmit = e => {
        e.preventDefault();
        set({
            step: 5,
            adres : {
                ulica: e.target.ulica.value,
                miasto: e.target.miasto.value,
                kodPocztowy: e.target.kod.value,
                numerTel: e.target.numerTel.value
            },
            terminOdbioru: {
                data: e.target.data.value,
                godzina: e.target.godzina.value,
                uwagi: e.target.uwagi.value
            }
            
        })
    }

    return (
        <div className="step-4-container">
             <div className="steps">Krok {state.step}/4</div>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            
            <form onSubmit={handleOnSubmit}>
                <div className="wrapper">
                <div className="adres">
                    <h2>Adres odbioru</h2>
                    <div className="ulica container">
                        <label>Ulica</label>
                        <input name="ulica"></input>
                    </div>
                    <div className="miasto container">
                        <label>Miasto</label>
                        <input name="miasto"></input>
                    </div>
                    <div className="kod container">
                        <label>Kod pocztowy</label>
                        <input name="kod"></input>
                    </div>
                   <div className="numer-tel container">
                        <label>Numer telefonu</label>
                        <input name="numerTel"></input>
                   </div>
                </div>

                <div className="termin">
                    <h2>Termin odbioru</h2>
                    <div className="data container">
                        <label>Data</label>
                        <input name="data"></input>
                    </div>
                    <div className="godzina container">
                        <label>Godzina</label>
                        <input name="godzina"></input>
                    </div>
                   <div className="uwagi container">
                        <label>Uwagi dla kuriera</label>
                        <textarea name="textarea" name="uwagi"></textarea>
                   </div>
                    

                </div>
                </div>
               
                <button onClick={() => {
                        set({
                            step: state.step -1
                        })
                    }}>Wstecz</button>
                <button type="submit">Dalej</button>
            </form>        
        </div>
    )
}

export default Form4
