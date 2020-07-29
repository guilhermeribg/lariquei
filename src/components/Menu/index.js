import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';


function Menu(){ //todo componente tem que ter o nome maiusculo 
    return(
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={logo} alt="Lariquei logo"/>

            </a>

            <Button as="a" className="ButtonLink" href="/">
                Nova receita 
            </Button>
        </nav>
    );
};

export default Menu; //exportamos para ser utilizado em outros lugares