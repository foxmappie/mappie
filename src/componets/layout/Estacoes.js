import styles from './estacoes.module.css'

function Estacoes( ){

    return (
        <div className={styles.divEstacoes}>
          <div className={styles.divPops}>
            <div className={styles.divSites}>

             <div className={styles.site}>
              <div className={styles.siteImg}><p>Pop 01</p></div>
                <div className={styles.siteNome}>
                    <p>POP SANTA INÊS</p>
                </div>
             </div>

             <div className={styles.site}>
                <div className={styles.siteImg}>Pop 02</div>
                <div className={styles.siteNome}>
                    <p>POP PINDARÉ</p>
                </div>
             </div>

             <div className={styles.site}>
              <div className={styles.siteImg}>Pop 03</div>
                <div className={styles.siteNome}>
                    <p>POP BELA VISTA</p>
                </div>
             </div>

            </div>
            <button className={styles.addPop}>Add</button>
        </div>
        </div>
    )

}

export default Estacoes