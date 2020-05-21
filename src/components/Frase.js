import React from 'react';
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding:3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;


    /* Agregando mediaqueries en un styled component */
    @media(min-width: 992px){
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        /* Esto es un pseudoElemento */
        &::before{
            content: open-quote;
            font-size: 10rem;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;

    }

`;

const Frase = ({frase}) => {

    // Reconociendo si el objeto tiene informacion, para no mostrar un objeto vacio al cargar la primera imagen
    if(Object.keys(frase).length === 0) return null;


    return (
        <ContenedorFrase>
            <h1> {frase.quote} </h1>
            <p>- {frase.author} </p>
        </ContenedorFrase>
    );
}

export default Frase;