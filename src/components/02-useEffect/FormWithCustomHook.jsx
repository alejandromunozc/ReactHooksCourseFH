import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = formValues;

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr/>

      <div className="form-group">
        <input type="text" name="name" placeholder="Tu nombre" className="form-control" autoComplete="off" value={name} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <input type="text" name="email" placeholder="Tu email" className="form-control" autoComplete="off" value={email} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <input type="password" name="password" placeholder="password" className="form-control" value={password} onChange={handleInputChange} />
      </div>
    </>
  )
}
