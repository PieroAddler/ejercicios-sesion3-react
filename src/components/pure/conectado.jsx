import React from 'react';
import { Contact } from '../../models/contact.class';
import PropTypes from 'prop-types';

const Conectado = ({contact}) => {
    return (
        <div>
            <h5>{contact.conectado?'Contacto En Línea':'Contacto No Disponible'}</h5>
        </div>
    );
};

Conectado.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default Conectado;
