import React, {useState, useMemo} from 'react';
import {useCounter} from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

  const {counter, increment} = useCounter( 10 );
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for(let i = 0; i < iteraciones; i++){
      console.log('Contando');
    }
    return `${iteraciones} iteraciones realizadas`;
  }

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h3>Counter: <small>{counter}</small></h3>
      <hr/>

      <p>{memoProcesoPesado}</p>

      <button onClick={increment} className="btn btn-primary">
        +1
      </button>

      <button onClick={() => setShow(!show)} className="btn btn-outline-primary ml-3">
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
