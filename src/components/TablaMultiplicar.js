import { tab } from '@testing-library/user-event/dist/tab';
import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    numSelect = React.createRef();

    state = {

        tabla: []

    }

    generarOptions = () => {
        
        var option = []
        for (let i = 1; i <= 5; i++) {
            var random = parseInt(Math.random() * 50)+1
            option.push(<option key={i} value={random} >{random}</option>)
        }
        
        return option;
    }
    
    mostrarTabla = (e) => {
        e.preventDefault();
        var tablaAux = []
        
        // console.log(this.state.tabla)

        let numSelect = parseInt(this.numSelect.current.value);
        console.log(numSelect);

        for (let i = 1; i <= 10; i++) {
            let dato = {
                operacion: numSelect + " * "+ i,
                resultado: (numSelect * i)
            }
    
            tablaAux.push(dato)
        }
        this.setState({
            tabla: tablaAux
        })
    }
  render() {
    return (
      <div>
        <h1>Tabla Multiplicar</h1>
        <form>
            <select ref={this.numSelect}>
            
            {
                this.generarOptions()
            }
            </select>
            <button onClick={this.mostrarTabla}>Comprobrar</button>
            
        </form>
        <tbody>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
            {
                this.state.tabla.map((fila, index) => {
                    return(
                        <tr key={index}>
                            <td>{fila.operacion}</td>
                            <td>{fila.resultado}</td>
                        </tr>
                    );
                })
            }
        </tbody>

      </div>
    )
  }
}
