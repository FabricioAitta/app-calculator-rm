import React, {useState, Fragment} from 'react';
import '../index.css';
import Error from './Error';

const Calculadora = ({setInformacion}) => {

    //state de los kilogramos ingresados 
    const [kilos, setKilogramos] = useState({
        kilogramos: '',
        repeticiones: '',
        eleccion: '',
        redondear: false
    })

    const [error, guardarError] = useState(false)

    //obteniendo valores ingresados de ambos
    const { kilogramos, repeticiones, eleccion, redondear } = kilos 

    //cuando ingresa kilos
    const lecturakilos = e => {
        e.preventDefault()
        setKilogramos({
            ...kilos,
            [e.target.name] : parseFloat(e.target.value)
        })
    }
    
    const lecturarepes = e => {
        e.preventDefault()
        setKilogramos({
            ...kilos,
            [e.target.name] : parseInt(e.target.value)
        })
    }

    //cuando ingresa kilos
    const lecturaeleccion = e => {
        e.preventDefault()
        setKilogramos({
            ...kilos,
            [e.target.name] : e.target.value
        })
    }
    
    //cuando ingresa si quiere redondear kg
    const lecturaredondear = e => {
        e.preventDefault()
        setKilogramos({
            ...kilos,
            redondear: true
        })
    }

    //calcular 
    const calcular = e => {
        e.preventDefault()
        if(kilogramos !== '' && repeticiones !== '' && eleccion !== ''){
            if(kilogramos < 1 || repeticiones < 1){
                guardarError(true)
                return
            }
            setInformacion({kilos})
        }else{
            guardarError(true)
            return
        }
        setKilogramos({
            kilogramos: '',
            repeticiones: '',
            eleccion: '',
            redondear: false
        })
        guardarError(false)
    }

    return (  
        <Fragment>
            <div className="container-fluid background">  
                <form className="form-bg">
                    {error ? <Error /> : null}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label label">kilogramos movidos:</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" name="kilogramos" placeholder="Kilogramos movidos" value={kilogramos} onChange={lecturakilos}  min="1"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label label">Repeticiones totales:</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" name="repeticiones" placeholder="Repeticiones realizadas" value={repeticiones} onChange={lecturarepes} min="1"/>
                        </div>
                    </div>
                    <select className="custom-select opciones" name="eleccion" value={eleccion} onChange={lecturaeleccion}>
                        <option value="">---Eleji una formula---</option>
                        <option value="bryzcki">Bryzcki</option>
                        <option value="epley">Epley</option>
                        <option value="oconner">O'conner et. al</option>
                        <option value="lander">Lander</option>
                        <option value="lombardi">Lombardi</option>
                    </select>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" name="redondear" value={redondear} onChange={lecturaredondear}/>
                        <label className="custom-control-label redondear" htmlFor="customCheck1">Redondear kilogramos</label>
                    </div>

                    <button type="button" className="btn btn-primary btn-lg btn-block color-boton" onClick={calcular}>Calcular RM</button>
 
                </form>
            </div>  
        </Fragment>
    );
}
 
export default Calculadora;