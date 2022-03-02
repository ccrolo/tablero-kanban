import './styleLanding.css'
import React from "react"
import Column from "../../components/columnToDo/indexColumn"
import ColumnDone from '../../components/columnDone/indexDone';
import ColumnProgress from '../../components/columnInProges/indexProgres';
import Header from '../../components/header/indexHeader';
import Filter from '../../components/filter/indexFilter';
import Card from '../../components/card/indexCard';


// 1. La primera columna deberá añadr las tareas:
// - se creará una card y se añadirá la tarea a un array OK
// - Cada tarea será un objeto: tituto, hora de creación e ID OK
// - Las tres deben tener un contador de tareas OK
// - Las Tareas se pueden eliminar de forma individual OK!!!!!!

// 2. La segunda columna deberá añadir una tarea de la primera:

// - Las tres deben tener un contador de tareas OK!!!
// - Las Tareas se pueden eliminar de forma individual  OK!!!

// 3. La tercera columna deberá añadir una tarea realizada:

// - Tendrá un clear all 
// - Las Tareas se pueden eliminar de forma individual OK!!!


// Que falta:
// - El filtro no borra  OK!!!
// - el filtro debe funcionar al borrar la palabra
// - La basura borra mal --> del mismo array  OK!!!
// - Cuando le das a cancelar suma una Card OK!!!
// - Boton + --> Mal posicionado (cambiar)
// - Falta colocar fecha en 'texto 2'
// - Falta guardarlo en el local




function Landing() {
    return (
        <React.Fragment>
            <Header />
            <Filter />
            <div className="landing_container">
                <Column />
                {/* <ColumnProgress /> */}
                <ColumnDone />
            </div>
        </React.Fragment>
    )

}

export default Landing;