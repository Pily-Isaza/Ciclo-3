import React from 'react'
import {Foot} from 'elements/Layouts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faFileSignature, faAtlas} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <Foot>
            <span> Página con fines acádemicos Proyecto MINTIC 2022 - Colombia </span>
            <span><FontAwesomeIcon icon={faAtlas}/></span>
            <span> Todos los derechos reservados </span>
            <span><FontAwesomeIcon icon={faPhone}/> - </span>
            <span> Contáctenos </span>
            <span><FontAwesomeIcon icon={faFileSignature}/> - </span>
            <span> Preguntas frecuentes </span>
            <span><FontAwesomeIcon icon={faAtlas}/></span>
        </Foot>
    )
}

export default Footer;
