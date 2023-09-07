import "./OptionList.css";

const OptionsList = (props) => {


    const handleChange = (e) => {
        props.setTeam(e.target.value)
    }

    return <div className="options-list">
        <label>Equipo</label>
        <select value={props.value} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
        </select>
    </div>
}

export default OptionsList