import React from'react';
import styled from'styled-components'
// import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const MemberList = props => {
  // console.log(MemberList)
return (
<Container>
  <List className='memberList'>
  {props.member.map(list => (
    <div key={list.name}>
      <h4>Name: {list.name}</h4>
      <p>Email: {list.email}</p>
      <p>Role: {list.role}</p>
      </div>
  ))}
  </List>
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
border: 1px solid black;
background-color:pink;
width: 30%;
padding:2%;
text-align:left;
`;

export default MemberList