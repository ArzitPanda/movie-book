import { Button, Divider, Input, Space, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../Store/Auth/Slice'

const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
const navigation =useNavigate()
const dispatch = useDispatch()

    const handleOnLogin =()=>{


  
          dispatch(loginUser({email,password}))  


    }


    const data = useSelector(state=>state.auth.isAuth)

useEffect(()=>{

data && navigation("/")


    
},[data])



    console.log(data)

  return (
    <div>
        <Tag color='blue'>email</Tag>
      <Input type='text' placeholder='enter your email' title='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Space size={'large'} split={<Divider type='vertical'/>}/>
      <Input type='password' placeholder='enter your password' title='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button type='primary' color='green' onClick={handleOnLogin}>Login</Button>
    </div>
  )
}

export default Login
