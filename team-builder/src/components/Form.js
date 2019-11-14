import React,{ useState } from'react';

const Form = props => {
    console.log('PROPS',props)
const [newbie, setNewbie] =useState({name: '', email: '', role: ''})

const handleChanges = e => {
    setNewbie({...newbie, [e.target.name]: e.target.value});
    console.log(e.target.name);
};

const submitForm = e => {
    e.preventDefault();
    props.addMember(newbie)
    setNewbie({ name: '',email: '', role: ''})
};

return (
<form onSubmit={submitForm}>
    <label htmlFor='name'>Name</label>
    <input
    id='name'
    type='text'
    name='name'
    placeholder='Enter Name'
    onChange={handleChanges}
    value={newbie.name}
    />
    <label htmlFor='email'>Email</label>
    <input
    id='email'
    type='text'
    name='email'
    placeholder='Enter Email'
    onChange={handleChanges}
    value={newbie.email}
    />
    <label htmlFor='role'>Role</label>
    <input
    id='role'
    type='text'
    name='role'
    placeholder='Enter Role'
    onChange={handleChanges}
    value={newbie.role}
    />
    <button type='submit'>Add Member</button>
</form>   
    );
};

export default Form