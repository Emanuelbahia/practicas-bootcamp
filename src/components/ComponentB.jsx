import React from "react";

function ComponentB(props) {
    return ( 
        <div>
            <p>Nombre: {props.nombre} </p>
            <p>Apellido: {props.apellido} </p>
            <p>Email: {props.email} </p>
            <p>Conectado: {props.contacto} </p>
        </div>
     );
}

export default ComponentB;