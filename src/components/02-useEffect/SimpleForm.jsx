import React, {useState, useEffect} from 'react'
import {Message} from './Message'
import './effects.css';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const {name, email} = formState

  useEffect(()=> {
    // console.log('hey');
  }, []);

  useEffect(()=> {
    // console.log('hey');
  }, [formState]);

  useEffect(()=> {
    // console.log('hey');
  }, [email]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>

      <div className="form-group">
        <input type="text" name="name" placeholder="Tu nombre" className="form-control" autoComplete="off" value={name} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <input type="text" name="email" placeholder="Tu email" className="form-control" autoComplete="off" value={email} onChange={handleInputChange} />
      </div>

      {(name === '123') && <Message />}

    </>
  )
}
