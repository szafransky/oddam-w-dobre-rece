import React, { createContext, useState } from 'react';
import Form1 from './Form1'
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import '../scss/component-scss/OddajRzeczyForm.scss'
import Form6 from './Form6';

export const FormContext = createContext(null);

function OddajRzeczyForm() {
    const [state, setState] = useState({
        userId: "",
        step: 1,
        bags: 0,
        coChceszOddac: [],
        lokalizacja: "",
        komuPomoc: [],
        nazwaOrganizacji: "",
        adres: {
            ulica: "",
            miasto: "",
            kodPocztowy: "",
            numerTel: "",
        },
        terminOdbioru: {
            data: "",
            godzina: "",
            uwagi: " "
        }
    })
    const set = value => {
        setState(prev => ({
            ...prev,
            ...value
        }))
    }
const getComponents = () => {
    switch (state.step) {
        case 1:
            return <Form1 />
        case 2:
            return <Form2 />
        case 3:
            return <Form3 />
        case 4:
            return <Form4 />
        case 5:
            return <Form5 />
        case 6:
            return <Form6 />
    
        default:
            return <div>default</div>
    }
}

    return (
        <FormContext.Provider value={{state, set}}>
            <section className="oddaj-rzeczy-form-container">
                <div className="form-components">
                    {getComponents()}
                </div>

                
            </section>
        </FormContext.Provider>
    )
}

export default OddajRzeczyForm
