import { useState } from "react"

export default function Usuario() {
  const [nome, setNome] = useState('robertacapalbo')
  const [foto, setFoto] = useState("https://media.licdn.com/dms/image/C4E03AQFroDlXV_Bnag/profile-displayphoto-shrink_800_800/0/1656098104793?e=2147483647&v=beta&t=u962vCEch3zaNUc_HCG-6BtpwGCkclrLdPTEsvpEymk")

  function escolherNome(){
    const novoNome = prompt("Insira o seu nome")
    if(!novoNome){
       return
    }
    setNome(novoNome)
  }

  function escolherFoto(){
    const novaFoto = prompt("Insira o link da foto de perfil que deseja utilizar")
    if(!novaFoto){
       return
    }
    setFoto(novaFoto)
  }

    return (
<div className="usuario">
<img data-test="profile-image" onClick={escolherFoto} src={foto} alt="imagem de perfil"/>
<div className="texto">
  <span>
    <strong data-test="name" className="nomeUsuario">{nome}</strong>
    <ion-icon data-test="edit-name" onClick={escolherNome} name="pencil"></ion-icon>
  </span>
</div>
</div>
    );
}