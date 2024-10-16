import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/Cine">Cine</a>
            </li>
            <li>
                <a href="/musica">Música</a>
            </li>
            <li>
                <a href="/formulario">Formulario</a>
            </li>
            <li>
                <a href="/collatz">Collatz</a>
            </li>
            <li>
                <a href="/tablamultiplicar">Tabla TablaMultiplicar</a>
            </li>
            <li>
                <a href="/seleccionmultiple">Seleccion múltiple</a>
            </li>
        </ul>
      </div>
    )
  }
}
