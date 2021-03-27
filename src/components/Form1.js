import React, { useContext, useState } from 'react';
import {FormContext} from './OddajRzeczyForm'
import '../scss/component-scss/Form1.scss'

function Form1() {
    const { state, set } = useContext(FormContext);
    const [coChceszOddac, setCoChceszOddac] = useState([]);

    const handleOnSubmit = e => {
        e.preventDefault();
        set({
            step: 2,
            // bags: e.target.bag.value
            coChceszOddac: [...coChceszOddac]
        })
    }

    const handleCoChceszOddac = (e) => {
            if(e.target.checked) {
                setCoChceszOddac([...coChceszOddac, e.target.value]);
            }
           
       
    }

    return (
  
            <div className="step-1-container">
           
           <form onSubmit={handleOnSubmit}>
           <div className="steps">Krok {state.step}/4</div>
               {/* <input type="number" name="bag" /> */}
               <div className="checkbox-container">
                   <h1>Zaznacz, co chcesz oddać</h1>
                   <div className="checkbox1 checkbox">
                       <label>
                           <input onChange={handleCoChceszOddac} type="checkbox" name="checkbox1" value="ubrania które nadają się do ponownego uzytku" />
                           <span class="checkmark"></span>Ubrania, które nadają się do ponownego uzytku 
                       </label>
                   </div>
                   <div className="checkbox2 checkbox">
                       <label>
                           <input onChange={handleCoChceszOddac} type="checkbox" name="checkbox2" value="ubrania do wyzucenia" />
                           <span class="checkmark"></span>Ubrania, do wyrzucenia
                       </label>
                   </div>
                   <div className="checkbox3 checkbox">
                       <label>
                           <input onChange={handleCoChceszOddac} type="checkbox" name="checkbox3" value="zabawki" />
                           <span class="checkmark"></span>Zabawki
                       </label>
                   </div>
                   <div className="checkbox4 checkbox">
                       <label>
                           <input onChange={handleCoChceszOddac} type="checkbox" name="checkbox4" value="ksiązki" />
                           <span class="checkmark"></span>Ksiązki
                       </label>
                   </div>
                   <div className="checkbox5 checkbox">
                       <label>
                           <input onChange={handleCoChceszOddac} type="checkbox" name="checkbox5" value="inne" />
                           <span class="checkmark"></span>Inne
                       </label>
                   </div>

                   <button type="submit">Dalej</button>
               </div>
          
           </form>
       </div>
    
       
    )
}

export default Form1
