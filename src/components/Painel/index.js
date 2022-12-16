import '../assets/css/Header.css'
import '../assets/css/consulta.css'
import { Link } from "react-router-dom";
import Headerconsulta from '../Headerconsulta'
import Consulta from '../Consulta'

import React,{useState} from 'react';

export default function Painel(){

    return(
        <>
            <Headerconsulta/>
            <Consulta/>
            
        </>
    )   
}