import '../assets/css/Header.css'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className='cabecalho'>
        <nav id="menu-h">
          <ul>
              <li><a href='#'>Ação</a></li>  
              <li><a href='#'>Ficção</a></li>
              <li><a href='#'>Terror</a></li>
              <li><a href='#'>Romance</a></li>
              <li><a href='#'>Anime</a></li>
          </ul>
          <div className="btnEntrar">
            <Link to="/painel">Entrar</Link>
          </div>
        </nav>
    </div>
    );
}
