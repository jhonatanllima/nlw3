import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container } from './styles';

import mapMarkerImg from '../../themes/images/map-marker.svg';

function OrphanagesMap() {
  return (
    <Container>
      <div className="page-map">
        <aside>
          <header>
     
            <img src={mapMarkerImg} alt="Map happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita {':)'}</p>
          </header>

          <footer>
            <strong>Sumaré</strong>
            <span>São Paulo</span>
          </footer>
        </aside>

        <Map
          center={[-22.824676,-47.2715928]}
          zoom={15.62}
          style={{width: '100%', height: '100%'}}
        > 
          <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        </Map>

        <Link to='/' className="plus" >
          <FiPlus size={32}/>
        </Link>
      </div>
    </Container>
  );
}

export default OrphanagesMap;
