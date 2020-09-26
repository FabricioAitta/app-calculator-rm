import React, {useState, Fragment} from 'react';
import './index.css';
import Calculadora from './components/Calculadora';
import Resultado from './components/Resultado';
import instagram from './instagram.png';

function App() {

  const [informacion, setInformacion] = useState({
    kilogramos: '',
    repeticiones: '',
    eleccion: '',
    redondear: false
  })

  const {kilogramos, repeticiones, eleccion} = informacion

  const mostrar = ( kilogramos === '' || repeticiones === '' || eleccion === '') 
  ? 
  <Calculadora
    setInformacion={setInformacion}
  />
  : 
  <Resultado
    informacion={informacion}
    setInformacion={setInformacion}
  />

  return (
      <Fragment>
        <div className="container-fluid background">
          <nav className="navbar navbar-light">
            <form className="form-inline">
              <a href="https://www.instagram.com/fabricioaitta1/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className="imagen" alt="logo de instagram"/>
              </a>
            </form>
          </nav>


          <header className="container-fluid">

          <h1 className="titulo">Calculadora RM</h1>

          </header>

            {mostrar}
            
        </div>
        
        <footer className="footer">
          Copyright &copy; cuarentena 2020 - Fabri
        </footer>

      </Fragment>
      
  );
}

export default App;

