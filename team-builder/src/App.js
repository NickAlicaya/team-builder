import React, {useState} from 'react';
import './App.css';
import MemberList from'./components/MemberList';
import Form from'./components/Form';


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
      <h1>About our Team</h1>
      <MemberList member={member} />
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
