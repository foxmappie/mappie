import { Link } from 'react-router-dom'

import styles from '../MenuLateral.module.css'


function MenuLateral ( ) {

    return (
        <div>
            <div className={styles.diretorio}>
                <p>Diretório</p>
            </div>
            <div className={styles.menu_config}>
                <ul>
                    <il>
                        <Link to='/Configuracoes'>Configurações</Link>
                    </il>
                </ul>
            </div>
        
        </div>
    )

}

export default MenuLateral