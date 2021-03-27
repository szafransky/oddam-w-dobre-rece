import React, { useContext, useState } from 'react';
import {FormContext} from './OddajRzeczyForm'
import '../scss/component-scss/Form2.scss'

function Form2() {

    const {state, set} = useContext(FormContext);
        
    const handleOnSubmit = e => {
        e.preventDefault();
        set({
            step: 3,
            // bags: e.target.bag.value
            bags: e.target.numOfBags.value
        })
    }

    return (
        <div className="step-2-container">
            
           
            <form onSubmit={handleOnSubmit}>
            <div className="steps">Krok {state.step}/4</div>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                <div className="wrapper">
                    <label>Liczba 60 litrowych worków:</label>
                    <select placeholder="— wybierz —" name="numOfBags" id="bags">
                    <option value="" disabled selected>— wybierz —</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            
                <button onClick={() => {
                        set({
                            ...state,
                            step: state.step -1
                            
                        })
                    }}>Wstecz</button>
            <button type="submit">Dalej</button>
            </form>
        </div>
    )
}

export default Form2
