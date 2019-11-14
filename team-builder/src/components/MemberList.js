import React from'react';


const MemberList = props => {
  // console.log(MemberList)
return (
<div className='memberList'>
  {props.member.map(list => (
    <div className='list' key={list.name}>
      <h3>{list.name}</h3>
      <p>{list.email}</p>
      <p>{list.role}</p>
      </div>
  ))}
</div>
  )
};

export default MemberList