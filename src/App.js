import React, {useState} from 'react';
import moment from 'moment'
import 'moment/min/locales'
import Header from './components/header/Header.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
import './appstyle.css';
import {hotelsData} from './data/data'
import Hoteles from './components/hoteles/Hoteles.jsx';

moment.locale('es');

function App() {
  const [desde, setDesde] = useState("-")
  const [hasta, setHasta] = useState("-")
  const [pais, actualizarPais] = useState("Ninguno")
  const [precio, actualizarPrecio] = useState("Ninguno")
  const [tamaño, actualizarTamaño] = useState("Ninguno")
  let checkIn = new Date (desde + "T00:00:00");
  let checkOut = new Date (hasta + "T00:00:00");


const hotelesFiltrados = hotelsData.filter((hotel) => {
  if (pais === "Ninguno") {
    return true;
  } else {
    return hotel.country.toLowerCase() === pais.toLowerCase();
  }
}).filter((hotel) => {
  if (precio === "Ninguno") {
    return true;
  } else {
    return hotel.price === precio.length;
  }
}).filter((hotel) => {
  if (tamaño === "Ninguno") {
    return true;
  } else {
    if (tamaño === "Pequeño") {
      return hotel.rooms <= 10;
    } else if (tamaño === "Mediano") {
      return hotel.rooms > 10 && hotel.rooms <= 20
    } else if (tamaño === "Grande") {
      return hotel.rooms > 20
    }
  }
}).filter((hotel) => {
if ((desde !== "-") && (hasta !== "-")) {
  return (checkIn >= hotel.availabilityFrom) && (checkOut <= hotel.availabilityTo)
} return hotel
})


let setPrecio = () => {
  if (precio === "$") {
      return "$ - Hotel Oferta"
  } else if (precio === "$$") {
      return "$$ - Hotel Económico"
  } else if (precio === "$$$") {
      return "$$$ - Hotel Moderado"
  } else if (precio === "$$$$") {
      return "$$$$ - Hotel Lujoso"
  } else {
      return precio
  }
}

  return (
    <div className="app">
      <Header desde={desde} hasta={hasta} pais={pais} setPrecio={setPrecio} tamaño={tamaño}/>
      <SearchBar desde={desde} hasta={hasta} pais={pais} precio={precio} tamaño={tamaño} setDesde={setDesde} setHasta={setHasta} actualizarPais={actualizarPais} actualizarPrecio={actualizarPrecio} actualizarTamaño={actualizarTamaño} />
      <Hoteles listaHoteles={hotelsData} hotelesFiltrados={hotelesFiltrados} />
    </div>
 );
}

export default App;
