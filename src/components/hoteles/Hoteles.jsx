import React from 'react';
import Hotel from './Hotel.jsx';
import './hotelesstyle.css'


const Hoteles = (props) => {
    
    return ( 
        <main className="hoteles">
            {   
                props.hotelesFiltrados.length > 0 ? 
                (props.hotelesFiltrados.map((hotel, index) => {
                    return (
                        <Hotel
                            key={index}
                            nombre={hotel.name}
                            foto={hotel.photo}
                            descripcion={hotel.description}
                            disponibleDesde={hotel.availabilityFrom}
                            disponibleHasta={hotel.availabilityTo}
                            cuartos={hotel.rooms}
                            ciudad={hotel.city}
                            pais={hotel.country}
                            precio={hotel.price}
                    />);
                })) : (
                    <p>Lo siento, no se encontraron hoteles disponibles para tu búsqueda.</p>
                )
            }
        </main>
     );
}
 
export default Hoteles;