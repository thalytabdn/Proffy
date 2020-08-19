import React from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div id="page-login">
            <div id="page-login-content">
                <div className="login-logo-container">  
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
            
            <div className="login-form">
                <fieldset>
                    <form >
                        <header>
                            <legend>Fazer login</legend>
                            <Link to='#' className="signup-button">
                                <label className="label-header">Criar uma conta</label>
                            </Link>
                        </header>
                    
                        <div className="input-container">
                            <Input 
                                name="email" 
                                placeholder="E-mail"                                 
                            />
                            <Input 
                                name="password" 
                                placeholder="Senha"
                                type="password"
                            />
                        </div>
                        <footer>
                            <div>
                                <input type="checkbox" name="remember"/>
                                <label htmlFor="remember">Lembrar-me</label>
                            </div>
                            <Link to='/signup' className="signup-button">
                                <label>Escqueci minha senha</label>
                            </Link>
                        </footer>
                        <button type="submit">Entrar</button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Login;