import React from "react";
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';
import Conectado from "./conectado";

const ContactComponent = ({contact}) =>{
    return(
        <div>
            <h2>Nombre: {contact.nombre}</h2>
            <h3>Apellido: {contact.apellido}</h3>
            <h4>email: {contact.email}</h4>
            <Conectado></Conectado>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;