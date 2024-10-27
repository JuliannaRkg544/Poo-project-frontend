

import Container from "../styledcomponents/Container"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/imgs/logo.png"

export default function Signin() {

  
  const navigate = useNavigate()

  const [first_name, setName] = useState("")
  const [last_name, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")



  const URL_POST = "http://localhost:8080/api/v1/users/register"
 

 
  const body = {
      last_name: last_name,
      first_name: first_name,
      email: email,
      password: password
  }

   function signin(event) {
      event.preventDefault();

      axios.post(URL_POST, body)
      .then(response => {
         console.log("cadastrado")
          //navigate("/")
      }).catch(error => { console.error("deu erro", error.message);})
   }

 
  return (
      <Container>
          <img src={logo}/>
          <input type="name" placeholder="Nome" value={first_name} onChange={e => setName(e.target.value)} ></input>
          <input type="name" placeholder="Sobrenome" value={last_name} onChange={e => setLastName(e.target.value)} ></input>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}></input>
          <button onClick={signin} >  Cadastrar </button>
          <Link to={"/"} ><span>Já tem conta? Entre</span></Link>
      </Container>
  )
}