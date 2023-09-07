import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

  const [showForm, updateShow] = useState(false)
  const [collaborators, updateCollaborators] = useState([
  {
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    position: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    position: "Dev FullStack",
    fav: false
  }])

  const [teams, setTeam] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor:"#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor:"#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor:"#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor:"#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor:"#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor:"#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor:"#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])

  const changeShow = () => {
    updateShow(!showForm)
  }

  //Registar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo", collaborator)
    //Spread operator
    updateCollaborators([...collaborators, collaborator])
  }

  //Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("elimas", id)
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id != id)
    updateCollaborators(newCollaborators)
  }

  //Actualizar color de equipos

  const setColor = (color, id) => {
    const teamsUpdated = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color
      }
      return team
    }) 

    setTeam(teamsUpdated)
  }

  //Crear equipo
  const createTeam =(newTeam) => {
    console.log(newTeam)
    setTeam([...teams, {...newTeam, id: uuid()}])
  }
  
  const like = (id) => {
    const collaboratorsUpdated = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })

    updateCollaborators(collaboratorsUpdated)
  }

  return (
    <div>
      <Header />
      {/* {showForm ? <Form /> : <></>} */}
      {
        showForm && <Form 
        teams={teams.map((team) => team.title)} 
        registerCollaborator={registerCollaborator}
        createTeam={createTeam}
        />
      }
      
      <MiOrg changeShow = {changeShow}/>

      {
        teams.map((team) => <Team 
          data={team} 
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          setColor={setColor}
          like={like}
          />
          )
      }

      <Footer />
       
    </div>
  );
}

export default App;
