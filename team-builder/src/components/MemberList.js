import React from'react';
import styled from'styled-components'
// import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const MemberList = props => {
  // console.log(MemberList)
return (

  <Container className='memberList'>
  {props.member.map(list => (
    <List key={list.name}>
      <h4>Name: {list.name}</h4>
      <p>Email: {list.email}</p>
      <p>Role: {list.role}</p>
      </List>
  ))}
  </Container>

  )
};

const Container = styled.div`
border: 1px solid black;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`;

const List = styled.div`
border: 10px solid silver;
background-color:lemonchiffon;
width: 30%;
padding:2%;
text-align:left;
margin:20px auto;
border-radius:5px;
`;

export default MemberList