import Componentes from "../Componentes"

import styles from './Tipos.module.css'


function Tipos_cabos() {
    return (
      <div className={styles.tipos}> 
      <div className={styles.menuTipos}>
        <Componentes />
      </div>
      <div>
        <h2>Alterar tipos</h2>
        <p>Selecione o elemento que deseja alterar.</p>
      </div>
    </div>
    )

}


export default Tipos_cabos