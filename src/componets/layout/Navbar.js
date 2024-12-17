import { Link } from "react-router-dom";
import styles from '../Navbar.module.css';

import logoImg from './logo.png';

function Navbar() {
    return (
        <nav>
            <div className={styles.divOperacao}>
                <div className={styles.divLogo}>
                    <img className={styles.logoImg} src={logoImg} alt="Logo" />
                </div>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link to="/">Mapa</Link>
                    </li>
                    <li>
                        <div className={styles.divRede}>
                            <ul className={styles.nav_list}>
                                <li className={styles.nav_item}>Rede</li>
                                <li className={styles.rede_item}>
                                    <p className={styles.redeText}>Cto</p>
                                    <img className={styles.construcaoImg} src="./img/ctowhite.svg" alt="CTO" />
                                </li>
                                <li className={styles.rede_item}>
                                    <p className={styles.redeText}>Ceo</p>
                                    <img className={styles.construcaoImg} src="./img/ceowhite.svg" alt="CEO" />
                                </li>
                                <li className={styles.rede_item}>
                                    <p className={styles.redeText}>Cabo</p>
                                    <img className={styles.construcaoImg} src="./img/caboloop.svg" alt="Cabo Loop" />
                                </li>
                                <li className={styles.rede_item}>
                                    <p className={styles.redeText}>Poste</p>
                                    <img className={styles.construcaoImg} src="./img/postewhite.svg" alt="Poste" />
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.divbtnOperacoes}>
                <button className={styles.btnOperacoes}>Cancelar</button>
                <button className={styles.btnOperacoes}>Salvar</button>
            </div>
            <div className={styles.navUtilites}>
                <ul className={styles.divUtilites}>
                    <li className={styles.nav_item}>
                        <Link to="/Tipos">Tipos</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/configuracoes">Configurações</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
