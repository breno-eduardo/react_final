import '../assets/css/livro.css'

export default function Livro( ){
    return(
        <div className="Card-livro">
            <img src="https://http2.mlstatic.com/D_NQ_NP_791801-MLB52850552441_122022-O.webp" alt="" />
            <h3>Sherlock Holmes</h3>
            <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sit. Modi minima.</p>
            <button className="btnValor">A PARTIR R$8,90</button>
        </div>
    )
}