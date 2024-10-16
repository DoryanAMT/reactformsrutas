import { BrowserRouter, Routes, Route } from "react-router-dom";

//Aqui ponemos los componentes que vayamos a usar
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";

import React, { Component } from 'react'
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import SeleccionMultiple from "./SeleccionMultiple";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cine" element={<Cine/>}/>
            <Route path="/musica" element={<Musica/>}/>
            <Route path="/formulario" element={<FormSimple/>}/>
            <Route path="/collatz" element={<Collatz/>}/>
            <Route path="/tablamultiplicar" element={<TablaMultiplicar/>}/>
            <Route path="/seleccionmultiple" element={<SeleccionMultiple/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
