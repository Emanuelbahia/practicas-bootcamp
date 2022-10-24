import React, { Component } from "react";
import PropTypes from "prop-types"
import "../assets/componentA.css"
import ComponentB from "./ComponentB";

class ComponentA extends Component {
    //cuando el estado es true el contacto esta en linea, sino aparece como no disponible.
    constructor(props) {
         super(props);
         this.state = {
             conectado: true
         }
    }
    
    render() {

        let estado ;

        if (this.state.conectado === true){
            console.log(this.state)
             estado = "en linea"
        } else {
            estado = "No disponible"
        }
       
     
        return (
            <div className="container-a">
                <h1>Contacto { estado }</h1>
                <div className="contacto">
                   <ComponentB nombre= "Juan" apellido= "Garcia" email="juangarcia@gmail.com" conectado = {this.state.conectado} />
                   
                </div>
            </div>
        )
    }

}

ComponentA.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool

};

export default ComponentA;