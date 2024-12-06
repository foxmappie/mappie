import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mapa from '../pages/Mapa';
import Navbar from '../layout/Navbar';
import MenuLateral from '../layout/MenuLateral';
import Componentes from '../pages/Componentes';
import Configuracoes from '../pages/Configuracoes';

import styles from '../Main.module.css';
import menuStyles from '../MenuLateral.module.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className={styles.Main}>
        <div  className={menuStyles.menu_lateral}>
          <MenuLateral />
        </div>
        <Routes>
          <Route exat path='/' element={<Mapa />} />
          <Route path='/Componentes' element={<Componentes />} />
          <Route path='/configuracoes' element={<Configuracoes />} />
        </Routes>
        </div>
      

    </Router>
  );
}

export default App;
