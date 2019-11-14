import React,{ useState } from'react';
import styled from'styled-components';

const Form = props => {
    // console.log('PROPS',props)
const [newbie, setNewbie] =useState({name: '', email: '', role: ''})

const handleChanges = e => {
    setNewbie({...newbie, [e.target.name]: e.target.value});
    // console.log(e.target.name);
};

const submitForm = e => {
    e.preventDefault();
    props.addMember(newbie)
    setNewbie({ name: '',email: '', role: ''})
};

return (
<form onSubmit={submitForm}>
    <FormContainer>
    <div>
    <label htmlFor='name'>Name</label>
    <input
    id='name'
    type='text'
    name='name'
    placeholder='Enter Full Name'
    onChange={handleChanges}
    value={newbie.name}
    />
    </div>
    <div>
    <label htmlFor='email'>Email</label>
    <input
    id='email'
    type='text'
    name='email'
    placeholder='Enter Email'
    onChange={handleChanges}
    value={newbie.email}
    />
    </div>
    <div>
    <label htmlFor='role'>Role</label>
    <input
    id='role'
    type='text'
    name='role'
    placeholder='Enter Role'
    onChange={handleChanges}
    value={newbie.role}
    />
    </div>
   <div><Button type='submit'>Add Member</Button></div>
    </FormContainer>
</form>   
    );
};

const FormContainer=styled.div`
width:35%;
margin:5px auto;
padding:5px;
border: 1px solid black;
background-color:rgb(213,237,218);
display:flex;
flex-direction:column;
justify-content:right;
font-family: 'Shadows Into Light', cursive;
`;

const Button=styled.button`
border-radius:8px;
border:1px solid black;
color:white;
background-color:lightskyblue;
`;
export default Form