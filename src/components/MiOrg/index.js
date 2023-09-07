import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // const [nombreVariable,funcionActualiza] = useState(valorInicial)

    // const [show, updateShow] = useState(true)
    // const handleClick = () => {
    //     console.log("jnj", !show)
    //     updateShow(!show)
        
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/button+.png" alt="add" onClick={props.changeShow} />
    </section>
}

export default MiOrg