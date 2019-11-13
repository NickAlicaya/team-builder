import React, {useState} from 'react';
import './App.css';
import ReactDOM from'react-dom';
import Form from'./components/Form';


function App() {
  const [teamMember,setTeamMember] = useState([
    {
      name: 'Nick',
      email: 'myemail@gmail.com',
      role: 'Front-End Developer'
    }
  ])

  
  const addTeamMember = teamMember => {
    const newTeamMember = {
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMember([...teamMember, newTeamMember]);
  }
  return (
    <div className="App">
      <h1>Members</h1>
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
