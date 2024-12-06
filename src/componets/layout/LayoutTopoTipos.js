import PropTypes from 'prop-types'

import styles from './Layouts.module.css'

function LayoutTopoTipos({elemento,descricao,btnName}) {
    
    function abrirForm(){
        alert('form aberto')
    }
    return(
        <div className={styles.LayoutTopoTipos}>
          <div>
            <h2>{elemento}</h2>
            <p>{descricao}</p>
          </div>
            <button className={styles.BotaoPadrao} onClick={abrirForm}>{btnName}</button>
        </div>
    )

}

LayoutTopoTipos.propTypes = {
    elemento: PropTypes.string, descricao: PropTypes.string, btnName: PropTypes.string
}

export default LayoutTopoTipos