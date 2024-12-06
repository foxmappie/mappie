import React from 'react';
import Estacoes from '../layout/Estacoes';
import MenuLateral from '../layout/MenuLateral';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

import menuStyles from '../MenuLateral.module.css';
import styles from '../layout/estacoes.module.css';
import stylesMain from '../Main.module.css';
import PopsForm from '../layout/PopsForm';

function Mapa() {
  const containerStyle = {
    width: '100%',
    height: '100%', // O mapa ocupará o tamanho total da div pai
  };

  const center = {
    lat: -23.55052, // Latitude do centro do mapa
    lng: -46.633308, // Longitude do centro do mapa
  };

  return (
    <div className={stylesMain.divMapa}>
      <div className={styles.mainEstacoes}>
        <Estacoes/>
        <PopsForm/> 
      </div>

    <div>

      {/* Componente Estacoes */}
      

      {/* Mapa Google */}
      <div className={stylesMain.map}>
        <LoadScript googleMapsApiKey="AIzaSyAJyeKlSNtkjV_Pahyy7Xkr6T_bGO1idSU">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            mapId="3db63e2a53e27031" // Adicionado o ID do mapa personalizado
          >
            {/* Adicione marcadores ou outros elementos no mapa aqui */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
    </div>
  );
}

export default Mapa;
