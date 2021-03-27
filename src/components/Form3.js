import React, { useContext, useState } from 'react';
import {FormContext} from './OddajRzeczyForm'
import '../scss/component-scss/Form3.scss'

function Form3() {

    const {state, set} = useContext(FormContext);
    const [komuPomoc, setKomuPomoc] = useState([])

    const handleOnSubmit = e => {
        e.preventDefault();
        set({
            step: 4,
            lokalizacja: e.target.who.value,
            nazwaOrganizacji: e.target.organizacja.value,
            komuPomoc: [...komuPomoc]
        })
    }

    const handleArray = e => {
       
        console.log(komuPomoc);
        console.log(e.target.innerText);
        console.log( e.target.dataset.clicked);
        if(e.target.dataset.clicked === "false"){
            e.target.style.background="transparent";
            e.target.dataset.clicked="true";
            
        } else {
            e.target.style.background="#FAD648";
            e.target.dataset.clicked="false";
            setKomuPomoc([...komuPomoc, e.target.innerText]);
            

            let array = [...komuPomoc]; // make a separate copy of the array
            let index = array.indexOf(e.target.innerText);
            if (index !== -1) {
                array.splice(index, 1);
                setKomuPomoc([...array]);
  }
        }
       
    }

    return (
        <div className="step-3-container">
             <div className="steps">Krok {state.step}/4</div>
            <h1>Lokalizacja:</h1>
            <form onSubmit={handleOnSubmit}>
                <select name="who">
                    <option value="" disabled selected>— wybierz —</option>
                    <option value="Poznań">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                </select>

                <h3>Komu chcesz pomóc? </h3>
                <div className="block-container">
                    <div data-clicked="true" className="block" onClick={handleArray} name="dzieciom">dzieciom</div>
                    <div data-clicked="true" className="block" onClick={handleArray} name="samotnym matkom">samotnym matkom</div>
                    <div data-clicked="true" className="block" onClick={handleArray} name="bezdomnym">bezdomnym</div>
                    <div data-clicked="true" className="block" onClick={handleArray} name="niepełnosprawnym">niepełnosprawnym</div>
                    <div data-clicked="true" className="block" onClick={handleArray} name="osobom starszym">osobom starszym</div>
                </div>
                

                <div className="wrapper">
                    <label>Wpisz nazwe konkretnej organizacji (opcjonalnie)</label>
                    <input name="organizacja"></input>
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

export default Form3
