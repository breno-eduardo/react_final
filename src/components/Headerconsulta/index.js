import '../assets/css/Header.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect} from 'react';

export default function Painel(){
    return(
        <>
            <nav id="menu-h">
                <ul>
                    <li><Link to="/painel">CONSULTA</Link></li>  
                    <li><Link to="/cadastro">CADASTRAR</Link></li>
                </ul>
                <div className="btnEntrar">
                    <Link to="/">Sair</Link>
                </div>
            </nav>

        


        </>
    )   
}