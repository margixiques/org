import { useState } from "react"
import "./Form.css"
import Field from "../Field"
import OptionsList from "../OptionsList"
import Button from "../Button"

const Form = (props) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")

    const {registerCollaborator, createTeam} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        let dataToSend = {
            name,
            position,
            photo,
            team
        }
        registerCollaborator(dataToSend)
    }
 
    const handleNewTeam = (e) => {
        e.preventDefault()
        createTeam({title, primaryColor: color })
    }

    return <section className="form">
        <form onSubmit={handleSubmit}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Field 
                label = "Nombre" 
                placeholder ="Ingresa nombre" 
                required
                value={name}
                setValue={setName}
            />
            <Field 
                label = "Puesto" 
                placeholder ="Ingresa puesto" 
                required 
                value={position}
                setValue={setPosition}
            />
            <Field 
                label = "Foto" 
                placeholder ="Ingresa enlace de foto" 
                required
                value={photo}
                setValue={setPhoto}
            />
            <OptionsList 
                value={team}
                setTeam={setTeam}
                teams={props.teams}
            />
            <Button>
                Crear
            </Button>
        </form> 
        <form onSubmit={handleNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Field 
                label = " Titulo" 
                placeholder ="Ingresa titulo" 
                required
                value={title}
                setValue={setTitle}
            />
            <Field 
                label = "Color" 
                placeholder ="Ingresa el color Hex" 
                required 
                value={color}
                setValue={setColor}
                type="color"
            />
            <Button>
                Registrar equipo
            </Button>
        </form> 
    </section>
}

export default Form