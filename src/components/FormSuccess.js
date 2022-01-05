import React from 'react';
import logo from '../images/logo2.png'
import './Form.css';

function FormSuccess(props){
  
  return (
    
    <div className='form-content-right'>
      {props.name}   
      <h1 className='form-success'>The Avengers has received from you!</h1>
      <img className='form-img' src={logo} alt='success'/>
    </div>
    
  );
};

export default FormSuccess;