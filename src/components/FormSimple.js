import React, { Component } from 'react'

export default class FormSimple extends Component {
    //  NECESITAMOS DECLARA VARIABLES DE REFERENCIA
    //  PARA CADA CONTROL DENTRO DE REACT
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    // CREAMOS EL OBJETO QUE GUARDARA LOS DATOS DE LOS INPUTS EN STATE
    state = {
        user: null
    }

    // PARA PROCESAR LA PETICION NECESTAMOS UN METODO
    //  QUE RECIBA Event (e)
    peticionForm = (e) => {
        //  LA PRIMERA LINEA SIEMPRE SERA DETENER LA PROPAGACION
        //  DEL EVENTO (submit)
        e.preventDefault();
        console.log("Petición lista");
        // EL OBJETO SE GUARDA SIEMPRE EN FORMATO TEXTO
        let nombre = this.cajaNombre.current.value;
        let edad = parseInt(this.cajaEdad.current.value);
        //  GUARDAMOS EN LA VARIABLE DE SATATE USER
        this.setState({
            user:{
                nombre: nombre,
                edad: edad
            }
        });

    }

  render() {
    return (
      <div>
        <h1>Formulario simple</h1>
        
        {
            
            this.state.user &&
            <h2 style={{color:"blue"}}>
                Nombre: {this.state.user.nombre},
                Edad: {this.state.user.edad}
            </h2>
        }
        <form onSubmit={this.peticionForm}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre}/><br/>
            <label>Edad: </label>
            <input type="text" ref={this.cajaEdad}/><br/>
            <button>
                Enviar datos
            </button>

        </form>
      </div>
    )
  }
}
