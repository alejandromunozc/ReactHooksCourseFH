import React, {memo} from 'react'

export const Small = memo(({value}) => {
  console.log('llamado');
  return (
    <small>
      {value}
    </small>
  )
});
