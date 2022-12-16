import '../assets/css/consulta.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Headerconsulta from '../Headerconsulta';
import axios from 'axios'

export default function Consulta(){

    const [livros, setLivros] = useState([])

    const buscar = ()=>{
        axios.get('https://livraria-modulo3.vercel.app/livros')
        .then(resp => {
            setLivros([resp.data])
            console.log(resp.data)
        })
        .catch(error => console.log(error))
    }

    return(
        <>
            <Headerconsulta/>  
            <p>Consulta</p>
            <button onClick={buscar}>chama</button>
            <div className="view">
                
            {livros.map((livro => {
                <div className="Card-livro">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_791801-MLB52850552441_122022-O.webp" alt="" />
                    <h3>{livro.nome}</h3>
                    {livro.nome}
                    <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sit. Modi minima.</p>
                    <button className="btnValor">A PARTIR R$8,90</button>
                </div>

            }))}

            </div>

        </>
    )   
}