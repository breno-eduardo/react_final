import '../assets/css/livro.css'
import { Link } from "react-router-dom";
import Headerconsulta from '../Headerconsulta';
import React,{useState} from 'react';
import { useEffect } from 'react';

const Mostrar = () => {
    const[livros,setLivros] =useState([]);
    useEffect(() => {
        fetch('https://livraria-modulo3.vercel.app/livros')
         .then((response) => response.json())
         .then((result) => setLivros(result))
         .catch((err) => {
          console.log(err.message);
         });
       }, []);
        return(
            <>
                {livros.map((livro) =>
                    <div id={livro.id} key={livro.id} className="Card-livro">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_791801-MLB52850552441_122022-O.webp" alt="" />
                        <h3>{livro.nome}</h3>
                        {livro.nome}
                        <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sit. Modi minima.</p>
                        <button className="btnValor">A PARTIR DE: R${livro.preco}</button>

                    </div>
                )}

            </>

       )
    };

export default Mostrar;