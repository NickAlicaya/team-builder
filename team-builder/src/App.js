import React, {useState} from 'react';
import './App.css';
import MemberList from'./components/MemberList';
import Form from'./components/Form';
import styled from'styled-components';


function App() {
  const [member,setMember] = useState([
    {
      name: 'Nick Alicaya',
      email: 'myemail@gmail.com',
      role: 'Front End Web Developer'
    }
   ])
 
  const addMember =  newbie => {
    const newMember = {
      name: newbie.name,
      email: newbie.email,
      role: newbie.role
    }
    setMember([...member, newMember])
  }


  return (
    <div className="App">
      <H1>About our Team</H1>
      <MemberList member={member} />
      <Form addMember={addMember} />
    </div>
  );
}

const H1 = styled.h1`
background-color:lavender;
border: 1px solid black;
`;

export default App;
