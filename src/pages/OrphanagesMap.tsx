import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
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
                center={[-27.6305, -52.2364]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"> </TileLayer>
            </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />   
            </Link>
        </div>
    );
}

export default OrphanagesMap;