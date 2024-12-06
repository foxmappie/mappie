import Componentes from "../Componentes"

import styles from './Tipos.module.css'


function Tipos_cabos() {
    return (
        <div className={styles.tipos}> 
          <div className={styles.menuTipos}>
            <Componentes />
          </div>
          <div>
            <h2>Caixas</h2>
            <p>Tipos de caixas.</p>
          </div>
        </div>
    )

}


export default Tipos_cabos