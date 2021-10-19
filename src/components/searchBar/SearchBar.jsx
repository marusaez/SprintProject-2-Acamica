import React from 'react';
import './searchbarstyle.css';


const SearchBar = ({desde, hasta, pais, precio, tamaño, setDesde, setHasta, actualizarPais, actualizarPrecio, actualizarTamaño}) => {

    const manejarCambioDesde = (evento) => {
        setDesde(evento.target.value)
    }

    const manejarCambioHasta = (evento) => {
        setHasta(evento.target.value)
    }
    const manejarCambioPais = (evento) => {
        actualizarPais(evento.target.value)
    }

    const manejarCambioPrecio = (evento) => {
        actualizarPrecio(evento.target.value)
    }

    const manejarCambioTamaño = (evento) => {
        actualizarTamaño(evento.target.value)
    }

    const manejarClick = () => {
        setDesde("-");
        setHasta("-");
        actualizarPais("Ninguno");
        actualizarPrecio("Ninguno");
        actualizarTamaño("Ninguno");
    }

     return ( 
        <form className="searchbar">
            <span><i className="fas fa-calendar-day"></i> </span>
            <span> Desde: </span>
            <input value={desde} onChange={manejarCambioDesde} type="date" className="date"/>
            <span> Hasta: </span>
            <input value={hasta} onChange={manejarCambioHasta} type="date" className="date"/>
            <i className="fas fa-map-marker-alt"></i> 
            <select value={pais} onChange={manejarCambioPais} >
                <option value="Ninguno">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>
            <i className="fas fa-dollar-sign"></i> 
            <select value={precio} onChange={manejarCambioPrecio}>
                <option value="Ninguno">Todos los precios</option>
                <option value="$">Económico</option>
                <option value="$$">Confort</option>
                <option value="$$$">Lujos</option>
                <option value="$$$$">Magnífico</option>
            </select>
            <i className="fas fa-hotel"></i> 
            <select value={tamaño} onChange={manejarCambioTamaño}>
                <option value="Ninguno">Todos los tamaños</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
            </select>
            <button onClick={manejarClick} className="clear-button"> <i className="far fa-trash-alt"></i> Limpiar filtros</button>
        </form> 
    );
} 
 
export default SearchBar;