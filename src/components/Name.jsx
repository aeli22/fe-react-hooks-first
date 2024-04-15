import React from 'react'
import{useState} from 'react'

const Name = () => {
  const [name,setName]=useState('');
  const [nickName,setNickname]=useState('')

  const ChangeName=e=>{
    setName(e.target.value);
  }


  const ChangeNickname=e=>{
    setNickname(e.target.value);
  }


  return (
    <div className="name">
      <h>Name</h>
      
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" value={name} onChange={ChangeName} />
      <input name="nickName" placeholder="닉네임을 입력해주세요" value={nickName} onChange={ChangeNickname} />
      <p>이름:{name}</p>
      <p>닉네임:{nickName}</p>
    </div>
  )
}

export default Name
