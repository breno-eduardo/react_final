import React, { useState } from 'react';
import Headerconsulta from '../Headerconsulta'
import axios from  "axios";
import '../assets/css/consulta.css'
import { Link } from "react-router-dom";

const PostFetch = () => {
    const[nome,setNome] =useState("null");
    const[autor,setAutor] =useState("null");
    const[preco,setPreco] =useState("null");
    const[url,setUrl] =useState("null");
   let Postdata=()=>{
    axios.post('https://livraria-modulo3.vercel.app/livros',{
    // body:JSON.stringify
   nome,autor,preco,url
        })
        // .then(res=>res.json)
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
        window.location.href = 'http://localhost:3000/painel'
   }
    return (
        <>
            <Headerconsulta/>
            <div className="container">
                <div className='itemForm'><p>NAME:</p> <input type="text" onChange={e=>setNome(e.target.value)} /><br/></div>
                <div className='itemForm'><p>Autor:</p><input type="text" onChange={e=>setAutor(e.target.value)}/><br/></div>
                <div className='itemForm'><p>Preço:</p><input type="text"onChange={e=>setPreco(e.target.value)} /><br/></div>
                <div className='itemForm'><p>URL(FOTO)</p><input type="text" onChange={e=>setUrl(e.target.value)}/><br/></div>
                <div className='btnCadastrar'>
                    <input type="button" value="Cadastrar" onClick={Postdata} />
                </div>
            </div>
        </>
    );
};

export default PostFetch;