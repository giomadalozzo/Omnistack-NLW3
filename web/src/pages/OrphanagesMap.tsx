import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../images/map-marker.svg';
import mapIcon from "../utils/mapIcon";
import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, []);

    
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Várias crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Erechim</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>
            <Map
                center={[-27.638, -52.268]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"> </TileLayer>
                
                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={450} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>
            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />   
            </Link>
        </div>
    );
}

export default OrphanagesMap;