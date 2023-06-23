import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  const [values, setValues] = useState({})
  const navigate = useNavigate() 

  const handleChangedValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const validateForm = () => {
    if (!values.email || !values.email.includes('@')) {
      toast.error('Insira um endereço de e-mail válido');
      return false;
    }

    if (!values.senha) {
      toast.error('Por favor, preencha o campo "Senha"');
      return false;
    }

    return true;
  };

  const handleClickButton = () => {
    if (validateForm()) {
      Axios.post('http://localhost:3001/login', values)
        .then(response => {
          console.log(response.data);
          navigate('/caronas');
        })
        .catch(error => {
          console.log('Email ou senha inválidoooooos.')
          console.log(values)
        });
    }
  }

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2>LOGIN</h2>
        <form>
          <div className='input-field'>
            <input type="email" name="email" placeholder="E-mail (@iesb.edu.br)" onChange={handleChangedValues} />
          </div>
          <div className='input-field'>
            <input type="password" name="senha" placeholder="Senha" onChange={handleChangedValues} />
          </div>
          <div className='login-cadastro'>
            <p>Não possui uma conta? <Link to="/">Cadastre-se</Link></p>
          </div>
          <button type="button" onClick={() => handleClickButton()}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;