import React from 'react';
import moment from 'moment'
import 'moment/min/locales'
import './hotelstyle.css';

moment.locale('es');
const Hotel = (props) => {
    const calcularFechaSeg = (timeInSec) => {
        // return new Date(Math.floor(timeInSec)).toLocaleDateString()
        return moment(timeInSec).format("DD/MM/YYYY")
        
    }

    let setTamaño = (tamaño) => {
        if (tamaño <= 10 ) {
          return "Pequeño"
        } else if (tamaño > 10 && tamaño <= 20) {
          return "Mediano"
        } else if (tamaño > 20) {
          return "Grande "
        } 
      }

      let setPrecio = (precio) => {
        if (precio === 1) {
            return "$ - Económico"
        } else if (precio === 2) {
            return "$$ - Confort"
        } else if (precio === 3) {
            return "$$$ - Lujos"
        } else if (precio === 4) {
            return "$$$$ - Magnífico"
        } else {
            return precio
        }
      }

    return ( 
        <div className="hotel">
            <h2 className="titulo">{props.nombre}</h2>
            <img src={props.foto} alt={props.nombre} width="97%" />
            <h3 className="titulo">{props.ciudad}, {props.pais}</h3>
            <p className="descripcion">{props.descripcion}</p>
            <p className="disponible">Fechas disponibles:</p>
            <div className="burbuja">
                <div>
                    <p className="badge badge-color">Desde </p>
                    <p className="badge badge-color-prop">{calcularFechaSeg(props.disponibleDesde)}</p> 
                </div>
                <div>
                    <p className="badge badge-color">Hasta </p>
                    <p className="badge badge-color-prop">{calcularFechaSeg(props.disponibleHasta)}</p>
                </div>
            </div>
            <div className="burbuja">
                <div className="burbuja-border">
                    <p className="badge badge-color">Tamaño hotel</p>
                    <p className="badge badge-color-prop">{setTamaño(props.cuartos)}</p> 
                </div>
                <div>
                    <p className="badge badge-color">Precio </p>
                    <p className="badge badge-color-prop">{setPrecio(props.precio)}</p>
                </div>
            </div>
            <button type="button" className="hotel-button">Reservar</button>
        </div>
     );
}
 
export default Hotel;