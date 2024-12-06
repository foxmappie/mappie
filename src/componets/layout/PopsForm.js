import styles from './estacoes.module.css'


function PopsForm () {
    return(
        <div className={styles.popsForm}>
            <form>
                <div>
                    <input 
                    type="text" 
                    placeholder="Nome do Pop"
                    id="nomePop"
                    name="nomePop" />
                </div>
            </form>
        </div>
    )
}

export default PopsForm