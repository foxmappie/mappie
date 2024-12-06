import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Mapa from './componets/pages/Mapa';
import Navbar from './componets/layout/Navbar'
import Tipos from './componets/pages/tipos/Tipos';
import Configuracoes from './componets/pages/Configuracoes';
import Tipos_cabos from './componets/pages/tipos/Tipos_cabos'
import Tipos_caixas from './componets/pages/tipos/Tipos_caixas'



import styles from './componets/Main.module.css'

 
function App() {
  return (
    <Router>
      <Navbar />
      <div className={styles.Main}>
        
        <Routes>
          <Route exat path='/' element={<Mapa />} />
          <Route path='/Tipos' element={<Tipos />} />
          <Route path='/configuracoes' element={<Configuracoes />} />
          <Route path='/Tipos_cabos' element={<Tipos_cabos /> } />
          <Route path='/Tipos_caixas' element={<Tipos_caixas /> } />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
