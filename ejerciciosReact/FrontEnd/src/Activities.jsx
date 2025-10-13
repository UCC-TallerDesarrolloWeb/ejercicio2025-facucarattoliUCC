import{useState} from "react"
import "./styles/Activities.scss"
import {useNavigate} from "react-router-dom";

const Activities = () => {

    const activities = [
        {
            nombre: "taekwondo",
            descripcion: "Arte marcial coreana",
            horarios: [
                { dia: 2, "hora-inicio": "18:30", "hora-fin": "20:00" },
                { dia: 4, "hora-inicio": "18:30", "hora-fin": "20:00" }
            ]
        },
        {
            nombre: "zumba",
            descripcion: "ritmos latinos",
            horarios: [
                { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
                { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
            ]
        },

        {
            nombre: "yoga",
            descripcion: "hatha and binyasa",
            horarios: [
                { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
                { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
            ]
        },

        {
            nombre: "boxeo",
            descripcion: "ring tong",
            horarios: [
                { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
                { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
            ]
        },
    ];

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripcion en ${nombreActividad}`);
    }

    return (
        <>
            <div className="activities-container">
                {activities.map((actividad, index) => (
                    <div className="activities-cards" key={index}>
                        <h3>{actividad.nombre}</h3>
                        <p>{actividad.descripcion}</p>
                        <ul>
                            {actividad.horarios.map((horario,i) => (
                                <li key={i}>
                                    {diasSemana[horario.dia]} : {horario["hora-inicio"]} - {horario["hora-fin"]}
                                </li>
                            ))}
                        </ul>

                        <button onClick= {() => handleInscribir(actividad.nombre)} >
                            Inscribirse
                        </button>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Activities;