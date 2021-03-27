import React, { useContext } from 'react'
import {FormContext} from './OddajRzeczyForm'
import '../scss/component-scss/Form6.scss'

const Form6 = () => {

  

    const {state, set} = useContext(FormContext);
    return (
        <div className="step-6-container">
            
            <div className="wrapper">
            <h1>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</h1>
            <div className="img"></div>
            </div>
           

        </div>
    )
}

export default Form6
