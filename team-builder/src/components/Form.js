import React,{ useState } from'react';

const Form = props => {
const [member, setMember] =useState({name: '', email: '', role: ''})

const handleChanges = e => {
    setMember({...member, [e.target.name]: e.target.value});
    console.log(e.target.name);
};

const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member)
    setMember({ name: '',email: '', role: ''})
};

return (
<form onSubmit={submitForm}>
    <label htmlFor='name'>Name</label>
    <input
    id='name'
    type='text'
    name='memberName'
    onChange={handleChanges}
    value={member.name}
    />
    <label htmlFor='email'>Email</label>
    <input
    id='email'
    type='text'
    name='memberEmail'
    onChange={handleChanges}
    value={member.email}
    />
    <label htmlFor='role'>Role</label>
    <input
    id='role'
    type='text'
    name='memberRole'
    onChange={handleChanges}
    value={member.role}
    />
    <button type='submit'>Add Member</button>
</form>   
    );
};

export default Form