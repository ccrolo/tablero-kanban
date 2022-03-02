import './styleLanding.css'
import React from "react"
import Column from "../../components/columnToDo/indexColumn"
import ColumnDone from '../../components/columnDone/indexDone';
import ColumnProgress from '../../components/columnInProges/indexProgres';
import Header from '../../components/header/indexHeader';
import Filter from '../../components/filter/indexFilter';
import Card from '../../components/card/indexCard';


// 1. La primera columna deberá añadr las tareas:
// - se creará una card y se añadirá la tarea a un array
// - Cada tarea será un objeto: tituto, hora de creación e ID
// - Las tres deben tener un contador de tareas
// - Las Tareas se pueden eliminar de forma individual

// 2. La segunda columna deberá añadir una tarea de la primera:
// - Eliminará la tarea de la primera columna y añadirá a la segunda en su array.
// - Las tres deben tener un contador de tareas
// - Las Tareas se pueden eliminar de forma individual

// 3. La tercera columna deberá añadir una tarea realizada:
// - Eliminará de la segunda y cambiará el icono.
// - Tendrá un clear all
// - Las Tareas se pueden eliminar de forma individual


// Que falta:
// - El filtro no borra
// - La basura borra mal --> del mismo array
// - Cuando le das a cancelar suma una Card
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
                <ColumnProgress />
                <ColumnDone />
            </div>
        </React.Fragment>
    )

}

export default Landing;