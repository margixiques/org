import { useState } from "react"
import "./Field.css"

const Field = (props) => {
    const placeholderModificated = `${props.placeholder}...`

    //Destructuracion
    const { type = "text" } = props

    const handleChange = (e) => {
        props.setValue(e.target.value)
    }


    return <div className={`field field-${type}`}>
        <label>{props.label}</label>
        <input 
            placeholder={placeholderModificated}  
            required={props.required}
            value={props.value}
            onChange={handleChange}
            type={type}
            />
    </div>
}

export default Field