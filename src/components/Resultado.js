import React, {Fragment} from 'react';

const Resultado = ({informacion, setInformacion}) => {


    const br = (100 * informacion.kilos.kilogramos) / (102.78 - 2.78 * informacion.kilos.repeticiones)

    const ep = (1 + 0.0333 * informacion.kilos.repeticiones) * informacion.kilos.kilogramos

    const lender = (100 * informacion.kilos.kilogramos) / (101.3 - 2.67123 * informacion.kilos.repeticiones)

    const ocon = informacion.kilos.kilogramos * (1 + 0.025 * informacion.kilos.repeticiones)

    const lomb = (informacion.kilos.repeticiones * 0.1) * informacion.kilos.kilogramos

    const elejido = informacion.kilos.eleccion

    var max
    var sub1
    var sub2
    var sub3
    var sub4
    var sub5
    var sub6
    var sub7
    var sub8

    switch (elejido) {

        case 'bryzcki':
            max = br 
            sub1 = br * 95 / 100
            sub2 = br * 90 /100
            sub3 = br * 85 / 100
            sub4 = br * 80 /100
            sub5 = br * 75 / 100
            sub6 = br * 70 /100
            sub7 = br * 65 / 100
            sub8 = br * 60 /100
            break;
        case 'epley':
            max = ep 
            sub1 = ep * 95 / 100
            sub2 = ep * 90 /100
            sub3 = ep * 85 / 100
            sub4 = ep * 80 /100
            sub5 = ep * 75 / 100
            sub6 = ep * 70 /100
            sub7 = ep * 65 / 100
            sub8 = ep * 60 /100
            break;
        case 'lander':
            max = lender 
            sub1 = lender * 95 / 100
            sub2 = lender * 90 /100
            sub3 = lender * 85 / 100
            sub4 = lender * 80 /100
            sub5 = lender * 75 / 100
            sub6 = lender * 70 /100
            sub7 = lender * 65 / 100
            sub8 = lender * 60 /100
            break;
        case 'oconner':
            max = ocon 
            sub1 = ocon * 95 / 100
            sub2 = ocon * 90 /100
            sub3 = ocon * 85 / 100
            sub4 = ocon * 80 /100
            sub5 = ocon * 75 / 100
            sub6 = ocon * 70 /100
            sub7 = ocon * 65 / 100
            sub8 = ocon * 60 /100
            break;
        case 'lombardi':
            max = lomb * 100 / 10
            sub1 = lomb * 95 / 10
            sub2 = lomb * 90 /10
            sub3 = lomb * 85 / 10
            sub4 = lomb * 80 /10
            sub5 = lomb * 75 / 10
            sub6 = lomb * 70 /10
            sub7 = lomb * 65 / 10
            sub8 = lomb * 60 /10
            break;
        default:
            break;
    }

        
    const volverainicio = e => {
        e.preventDefault()
        setInformacion({
            kilogramos : '',
            repeticiones : '',
            eleccion : '',
            redondear : false
        })
    }


    return (  
        <Fragment>
            <div className="container-fluid background">

                <button type="button" className="btn btn-primary botoninicio color-boton" onClick={volverainicio}>
                    Volver al inicio
                </button>
  

                <h2 className="titulo">Kilogramos ingresados: {informacion.kilos.kilogramos} Kg</h2>
                <h2 className="titulo">Repeticiones ingresadas: {informacion.kilos.repeticiones}</h2>
                <h2 className="titulo">Formula aplicada: {informacion.kilos.eleccion}</h2>

                <table className="table background-table">
                <thead className="thead-dark">
                <tr>
                    <th>PORCENTAJE</th>
                    <th>KG</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>100%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? max.toFixed(2) : max.toFixed()}</td>
                </tr>
                <tr>
                    <td>95%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub1.toFixed(2) : sub1.toFixed()}</td>
                </tr>
                <tr>
                    <td>90%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub2.toFixed(2) : sub2.toFixed()}</td>
                </tr>
                <tr>
                    <td>85%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub3.toFixed(2) : sub3.toFixed()}</td>
                </tr>
                <tr>
                    <td>80%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub4.toFixed(2) : sub4.toFixed()}</td>
                </tr>
                <tr>
                    <td>75%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub5.toFixed(2) : sub5.toFixed()}</td>
                </tr>
                <tr>
                    <td>70%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub6.toFixed(2) : sub6.toFixed()}</td>
                </tr>
                <tr>
                    <td>65%</td> 
                    <td>kG: {(informacion.kilos.redondear === false) ? sub7.toFixed(2) : sub7.toFixed()}</td>
                </tr>
                <tr>
                    <td>60%</td>
                    <td>kG: {(informacion.kilos.redondear === false) ? sub8.toFixed(2) : sub8.toFixed()}</td>
                </tr>
                </tbody>
                </table>
            </div>
      </Fragment>
    );
}
 
export default Resultado;