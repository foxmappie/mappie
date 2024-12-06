import { useState } from 'react'

import styles from './Layouts.module.css'

function TipoForm () {

    const [nomeElemento, setNomeElemento] = useState('Nome não definido')

    return(
        <div className={styles.tipoForm}>
          <div>
            <h3>Novo Cabo</h3>
            <p>{nomeElemento}</p>
            <div>
              <label htmlFor='nome'>Nome</label>
              <input 
                 type="text" 
                 id="nome" 
                 name='nome' 
                 placeholder='Nome do cabo' 
                 onChange={(e) => setNomeElemento(e.target.value)}/>
            </div>
            <div>
              <label htmlFor='nome'>Nome</label>
              <input 
                 type="text" 
                 id="nome" 
                 name='nome' 
                 placeholder='Nome do cabo' 
                 onChange={(e) => setNomeElemento(e.target.value)}/>
            </div>
          </div>
          <div>
            <input type='button' value='Salvar' />
          </div>
        </div>
    )
}

export default TipoForm