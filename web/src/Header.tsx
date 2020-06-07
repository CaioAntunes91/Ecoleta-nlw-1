import React from 'react';

interface HeaderProps {//Mecanismo utilizado no typescript, que possui tipagem estática, para atribuirmos tipos mais complexos (não nativo) para alguma constante ou variável
    title: string;//Aqui foi definida uma propriedade obrigatória para essa interface, caso não fosse obrigatória, deveria vir com uma ? no final
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;