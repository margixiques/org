import "./Team.css";
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {

    const {title, primaryColor, secondaryColor, id } = props.data
    const {collaborators, deleteCollaborator, setColor, like} = props

    const titleStyle = {borderColor: primaryColor}

    const backgroundStyle = {backgroundColor: hexToRgba(primaryColor, 0.6)}

    return <> 
        { 
            collaborators.length > 0 &&
            <section className="team" style={backgroundStyle}>
                <input 
                    className="input-color"
                    type="color"
                    value={hexToRgba(primaryColor, 0.6)}
                    onChange={(evento) => {
                        setColor(evento.target.value, id)
                    }}

                />
                <h3 style={titleStyle}>{props.data.title}</h3>
                <div className="collaborators">
                    {
                        collaborators.map((collaborator, index) => <Collaborator 
                            data={collaborator} 
                            key={index}
                            primaryColor={primaryColor}
                            deleteCollaborator={deleteCollaborator}
                            like={like}
                        />)
                    }
                </div>
            </section>
        } 
    </>
}

export default Team