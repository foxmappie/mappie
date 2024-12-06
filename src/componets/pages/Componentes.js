import { Link } from "react-router-dom";

import styles from '../Main.module.css'

function Componentes() {
    return (
        <div> 
            <ul className={styles.menuDefault}>
              <li>
                <Link to="/Tipos_cabos">Cabos</Link> 
              </li>  
              <li>
                <Link to="/Tipos_caixas">CTO</Link>
              </li> 
            </ul>
        </div>
    );
}

export default Componentes;
