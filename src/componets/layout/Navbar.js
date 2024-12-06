import { Link } from "react-router-dom";

import styles from '../Navbar.module.css'



function Navbar() {
    return (
    <nav>
        <ul className={styles.nav_list}>
            <li className={styles.nav_item}> 
                <Link to="/">Mapa</Link>
            </li>
            <li className={styles.nav_item}>
                <Link to="/configuracoes">configurações</Link>
            </li>
            <li className={styles.nav_item}>
                <Link to="/Tipos">Tipos</Link>
            </li>
        </ul>
        <div className="construcao">
          <button>Cabo</button>
        </div>
    </nav>
    )
}

export default Navbar