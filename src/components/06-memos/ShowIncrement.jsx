import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

  console.log('generado');

  return (
    <div>
      <button onClick={() => {increment(5)}} className="btn btn-success">
        Incrementar
      </button>
    </div>
  )
})
