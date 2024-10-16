import React, { Component } from 'react'

export default class Collatz extends Component {

  cajaNumero = React.createRef();

  state = {
    num: null,
    numeroCollatz: []
  }

  peticionForm = (e) => {
    e.preventDefault();

    let numero = parseInt(this.cajaNumero.current.value);

    this.setState({
      num : numero,
      numeroCollatz: []
    })

    while (numero != 1) {
      if(numero % 2 == 0){
        numero = numero / 2;
        // console.log(numero);
        this.state.numeroCollatz.push(numero);
        this.setState({
          numeroCollatz: this.state.numeroCollatz
        });
      }else{
        
        numero = (numero / 3) +1;
        // console.log(numero);
        this.state.numeroCollatz.push(numero);
        this.setState({
          numeroCollatz: this.state.numeroCollatz
        });
      }
      // console.log(this.state.num)
    }

    console.log(this.state.numeroCollatz);

  }

  render() {
    return (
      <div>
        <h1>PRACTICA CONJETURA DE COLLATZ </h1>
        
        <form onSubmit={this.peticionForm}>
            <label>Numero: </label>
            <input type="text" ref={this.cajaNumero}/><br/>
            <button>
                Comprobar
            </button>
        </form>
        <ul>
        {
          this.state.numeroCollatz.map((numero, index) => {
            return(
              <li key={index}>{numero}</li>     
            );
          })
        }

        </ul>
        
      </div>
    )
  }
}
