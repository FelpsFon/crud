import '../../App.css'
import React, { useState } from 'react'
import Axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../images/vemjunto.png'
import celular from '../../images/img_celular.png'
import imgcadastro from '../../images/terms.png'
import imgcarona from '../../images/car.png'
import imgavaliacao from '../../images/chat.png'
import { Link } from 'react-router-dom'

function Home() {
    const [values, setValues] = useState({})

    const handleChangedValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
        console.log(values);
    }

    const validateForm = () => {
        if (!values.nome) {
            toast.error('Por favor, preencha o campo "Nome"');
            return false;
        }

        if (!values.email || !values.email.includes('@')) {
            toast.error('Insira um endereço de e-mail válido');
            return false;
        }

        if (!values.celular && values.length !== 11) {
            toast.error('O celular deve ter 11 dígitos');
            return false;
        }

        if (!values.matricula && values.length !== 10) {
            toast.error('A matrícula deve ter 10 dígitos');
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
            Axios.post('http://localhost:3001/usuarios', values)
                .then(response => {
                    console.log(response.data);
                    toast.success('Cadastro realizado com sucesso!')
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    return (
        <div className="Home">

            <header>
                {/* navbar */}
                <div className='viewport'>
                    <nav id="home" className="menu">
                        <img src={logo} alt="Logo" className="logo" />

                        <ul className="menu-links">
                            <li><a href="#about">Como funciona</a></li>
                            <li><a href="#cadastro">Cadastro</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>

                        <ul className="menu-icons">
                            <li><a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="mailto:oi@gmail.com"><i className="fas fa-envelope"></i></a></li>
                        </ul>
                    </nav>

                    {/* main info */}
                    <div className="flex-container">
                        <div className='main-texts'>
                            <h1>Seu novo app de caronas chegou</h1>
                            <p>Uma nova solução para deslocamento de estudantes até a faculdade. Integração entre alunos, economia pro seu bolso e tecnologia sem limites. Vem junto!</p>
                        </div>
                        <div className='main-spacer'></div>
                        <div>
                            <img src={celular} alt="Imagem celular" className="img-celular" />
                        </div>


                    </div>
                </div>
            </header >

            {/* como funciona */}
            <div id="about" className="about-box">
                <h2>Como funciona</h2>
                <section className="about-info">
                    <div>
                        <h1>Cadastro</h1>
                        <img src={imgcadastro} alt="Ícone de papéis com um checkmark verde" className="about-icons" />
                        <p>Faça download do app na plataforma de sua escolha e cadastre-se para começar a usar sem limites</p>
                    </div>

                    <div>
                        <h1>Carona</h1>
                        <img src={imgcarona} alt="Ícone de um carro vermelho" className="about-icons" />
                        <p>Ofereça carona para outros alunos ou solicite uma carona com destino ou partida do IESB</p>
                    </div>

                    <div>
                        <h1>Avaliação</h1>
                        <img src={imgavaliacao} alt="Ícone de balões de conversa" className="about-icons" />
                        <p>Envie um feedback sobre a corrida e compartilhe com seus amigos o app de caronas do IESB</p>
                    </div>
                </section>
            </div>

            {/* cadastro */}

            <section id="cadastro" className="cadastro">
                <h2>Cadastro</h2>
                <p>Ao se inscrever com seu e-mail, você concorda com nossos termos e condições</p>
                <div className="cadastro-form">
                    <form>
                        <input type="text" name="nome" placeholder="Nome" className="nome-input" onChange={handleChangedValues} />
                        <input type="email" name="email" placeholder="E-mail (@iesb.edu.br)" className="email-input" onChange={handleChangedValues} />
                        <input type="text" name="celular" placeholder="Celular (DD) 99999-9999" className="celular-input" onChange={handleChangedValues} />
                        <input type="text" name="matricula" placeholder="Matrícula" className="matricula-input" onChange={handleChangedValues} />
                        <input type="password" name="senha" placeholder="Senha" className="senha-input" onChange={handleChangedValues} />
                        <button type="button" className="botao-cadastrar" onClick={() => handleClickButton()}>Cadastrar</button>
                    </form>
                </div>
                <p>
                    Já possui uma conta? <Link to="/login">Faça login</Link>
                </p>

                <ToastContainer /> {/* container para exibir os toasts */}

            </section>

            {/* faq */}
            <section id="faq" className="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Como faço para baixar o app?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui massa, euismod in odio non, maximus elementum purus. Fusce a nisi cursus sem aliquam facilisis. Nulla nisi nulla, malesuada sit amet lacus eu, sodales pellentesque sem. Sed eget turpis lorem.</p>
                </details>

                <details>
                    <summary>Posso utilizar o app sem ser alune do IESB?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui massa, euismod in odio non, maximus elementum purus. Fusce a nisi cursus sem aliquam facilisis. Nulla nisi nulla, malesuada sit amet lacus eu, sodales pellentesque sem. Sed eget turpis lorem.</p>
                </details>

                <details>
                    <summary>Funciona em Android e iOS?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui massa, euismod in odio non, maximus elementum purus. Fusce a nisi cursus sem aliquam facilisis. Nulla nisi nulla, malesuada sit amet lacus eu, sodales pellentesque sem. Sed eget turpis lorem.</p>
                </details>

                <details>
                    <summary>Qual o passo a passo para solicitar ou oferecer carona?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui massa, euismod in odio non, maximus elementum purus. Fusce a nisi cursus sem aliquam facilisis. Nulla nisi nulla, malesuada sit amet lacus eu, sodales pellentesque sem. Sed eget turpis lorem.</p>
                </details>
            </section>

            {/* rodapé */}
            <footer>
                <ul id="navfooter" className="navbarfooter">

                    <div>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Como funciona</a></li>
                        <li><a href="#cadastro">Cadastro</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </div>

                    <div>
                        <li><a href="#termos">Termos e condições</a></li>
                        <li><a href="#privacidade">Política de privacidade</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li><a href="http://www.iesb.com.br">IESB</a></li>
                    </div>
                </ul>

                <p><a href="#home" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></a></p>
            </footer>


        </div>
    )
}

export default Home