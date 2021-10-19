// imr
import React from 'react'; 
import moment from 'moment'
import 'moment/min/locales'
import './headerstyle.css';

// sfc
moment.locale('es');
const Header = ({desde, hasta, pais, setPrecio, tamaño}) => {
    const desdeTexto = moment(desde).format('dddd LL');
    const hastaTexto = moment(hasta).format('dddd LL');

    return (  
        <header className="header">
            <h2>Bienvenidx a la mejor página de búsqueda de hoteles de la región.</h2>
            <div className="results">
                <h5>Fecha seleccionada entre {desde === "-" ? "-" : desdeTexto} y {hasta === "-" ? "-" : hastaTexto}.</h5>
                <h5><i className="fas fa-map-marker-alt"></i> País seleccionado: {pais}</h5>
                <h5><i className="fas fa-dollar-sign"></i> Precio seleccionado {setPrecio()}</h5>
                <h5><i className="fas fa-hotel"></i> Tamaño de hotel seleccionado: {tamaño}</h5>
            </div>
        </header>
    );
}
 
export default Header;