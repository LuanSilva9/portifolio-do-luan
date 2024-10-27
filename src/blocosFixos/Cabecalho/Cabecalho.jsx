import './Cabecalho.css'

import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <header>
            <Link to="/">
                <h2 className='logo'>Luan Silva</h2>
            </Link>

            <div className="items">
                <li>
                    <Link className='link' to="/">Sobre Mim</Link>
                </li>
                
                <li>
                    <Link className='link' to="/">Experiencia</Link>
                </li>
                
                <li>
                    <Link className='link' to="/">Trabalhos e Projetos</Link>
                </li>
                
                <li>
                    <Link className='contatos' to="/">Contatos</Link>
                </li>
            </div>
        </header>
    );
}