import '../assets/css/livro.css'
import { Link } from "react-router-dom";
import Headerconsulta from '../Headerconsulta';
import React,{useState} from 'react';
import { useEffect } from 'react';
import { UpdateLivro } from '../update';





const GetFetch = () => {
    function Deletedata(e){
        console.log(e)
        

        fetch(`https://livraria-modulo3.vercel.app/livros/${e}`,{method:"DELETE"})
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
        
        return (
            window.location.reload(false)
        );
    };

    const[nome,setNome] =useState("null");
    const[autor,setAutor] =useState("null");
    const[preco,setPreco] =useState("null");
    const[url,setUrl] =useState("null");
    const[id,setId] =useState("null");


    function Editdata(){
        fetch(`https://livraria-modulo3.vercel.app/livros/${id}`,{method:"PUT",
            //body:JSON.stringify({ nome,autor,preco,url}),
            headers:{"Content-Type":"Application/json ; charset=UTF-8"}
        }).then(res=>res.json)
        .then(result=>console.log(result))
        .catch(error=>console.log(error))

    }





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



                <div className='container'>
                    {livros.map((livro) =>
                        <div id={livro.id} key={livro.id} className="Card-livro">
                            <img src={livro.url} alt="" />
                            <h3>{livro.nome}</h3>
                            {livro.nome}
                            <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sit. Modi minima.</p>
                            <button className="btnValor">A PARTIR DE: R${livro.preco}</button>
                            <div>
                            <button className='btnEdit btn' onClick={Editdata}>EDITAR</button>
                            <button className='btnDeletar btn' onClick={() => Deletedata(livro.id)}>DELETAR</button>
                            </div>
                        </div>
                    )}
                </div>
                <>
                <div>
                    {console.log(nome)}
                    NOME: <input id="inputnome" type="text"/><br/>
                    AUTOR:<input type="text" /><br/>
                    PRECO:<input type="text" /><br/>
                    URL(foto):<input type="text" /><br/>
                    ID=<input type="text" /><br/>
                <input type="button" value="SALVAR" />
                </div>
                </>

            </>

       )
    };

export default GetFetch;