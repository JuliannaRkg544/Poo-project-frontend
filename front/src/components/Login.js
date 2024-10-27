

import Container from "../styledcomponents/Container"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/imgs/logo.png"
export default function Login() {

  
  const navigate = useNavigate()

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")



  const URL_POST = "http://localhost:8080/api/v1/users/login"
 
 
  const body = {
      email: email,
      password: password
  }

   function login(event) {
      event.preventDefault();

      axios.post(URL_POST, body)
      .then(response => {
          console.log("logado")
          //navigate("/")
      }).catch(err => { console.log("deu erro", err.response)})
   }

 
  return (
      <Container>
          <img src={logo}/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}></input>
          <button onClick={login} >  Entrar </button>
          <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
      </Container>
  )
}