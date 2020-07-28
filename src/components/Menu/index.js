import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';
import Logo from '../../assets/Logo.png';

function Menu (){
    return  (
        <nav className="Menu">
            <Link to="/">
            <img class="Logo" src={Logo} alt="Myflix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;