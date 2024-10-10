

import Container from "../styledcomponents/Container"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/imgs/logo.png"
export default function Login() {

  
  const navigate = useNavigate()

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [disabled, setDisabled] = useState(false) //disabilita oq?



  const URL_POST = "https://localhost:4000/login"

  const body = {
      email: email,
      password: password
  }

   function login(event) {
  //     event.preventDefault();
  //     setDisabled(true)

  //     axios.post(URL_POST, body).then(response => {
  //         const { data } = response;
  //         setUser(data);
  //         localStorage.setItem("foto", data.image)
  //         localStorage.setItem("token", data.token)
  //         navigate("/today")
  //     }).catch(err => { console.log("deu erro", err.response); alert(err.response.data.message); setDisabled(false) })
   }

 
  return (
      <Container>
          <img src={logo}/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} ></input>
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabled}></input>
          <button  >  Entrar </button>
          <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
      </Container>
  )
}