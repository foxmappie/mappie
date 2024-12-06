import Componentes from "../Componentes"
import LayoutTopoTipos from "../../layout/LayoutTopoTipos"
import TipoForm from "../../layout/TipoForm"

import styles from './Tipos.module.css'



function Tipos_cabos() {
    return (
        <div className={styles.tipos}>  
          <div className={styles.menuTipos}>
            <Componentes />
          </div>
          <div>
            <div className={styles.topoTipos}>
              <LayoutTopoTipos elemento={'Cabos'} descricao={'Tipos de cabos.'} btnName={'Novo cabo'}/>
            </div>
          </div>
          <div className="tiposTables"></div>
          <TipoForm />
        </div>
    )

}


export default Tipos_cabos