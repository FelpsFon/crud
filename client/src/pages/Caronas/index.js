
import React, { useState } from 'react'
import logo from '../../images/vemjunto.png'
import { Link } from 'react-router-dom'

function Caronas() {
    const [mostrarMensagem, setMostrarMensagem] = useState(true);

    const fecharMensagem = () => {
        setMostrarMensagem(false);
    };

    return (
        <div className="dashboard">
            {/* sidebar */}
            <div className="sidebar">
                <ul>
                    <img src={logo} alt="Logo" className="logo-img" />
                    <li><i className="fa-solid fa-house"></i><Link to="/login">  Geral</Link></li>  {/* ajeitar */}
                    <li><i className="fa-solid fa-right-from-bracket"></i><Link to="/">  Logout</Link></li>
                    <li><a href="#"><i className="fa-solid fa-circle-question"></i>  Ajuda</a></li>
                </ul>
            </div>

            {/* caronas */}
            <div className="content">
                <div className="user-info">
                    <h2>Olá!</h2>
                </div>
                {mostrarMensagem && (
                    <div className="mensagem">
                        <p>Verifique aqui seu histórico de caronas.</p>
                        <button className='close-btn' onClick={fecharMensagem}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                )}

                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Partida</th>
                            <th>Destino</th>
                            <th>Carro</th>
                            <th>Motorista</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01/06/2023</td>
                            <td>07:32</td>
                            <td>SQN 405 Bloco K</td>
                            <td>IESB Sul</td>
                            <td>Hyundai HB20 - ABC1234</td>
                            <td>Julia Paiva</td>
                            <td>Concluída</td>
                        </tr>
                        <tr>
                            <td>05/06/2023</td>
                            <td>12:09</td>
                            <td>IESB Sul</td>
                            <td>Rodoviária</td>
                            <td>Celta - HOP8907</td>
                            <td>Luis André</td>
                            <td>Cancelada</td>
                        </tr>
                        <tr>
                            <td>07/06/2023</td>
                            <td>06:58</td>
                            <td>QE 38</td>
                            <td>IESB Sul</td>
                            <td>Celta - HOP8907</td>
                            <td>Luis André</td>
                            <td>Concluída</td>
                        </tr>
                        <tr>
                            <td>10/06/2023</td>
                            <td>07:29</td>
                            <td>QE 38</td>
                            <td>IESB Sul</td>
                            <td>Volkswagen Gol - YLL1277</td>
                            <td>Ana Clara</td>
                            <td>Concluída</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Caronas;