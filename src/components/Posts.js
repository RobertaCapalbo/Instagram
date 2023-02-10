import { useState } from 'react';

const posts = [
  { userName: 'meowed', profileImage:"assets/img/meowed.svg", postImage:"assets/img/gato-telefone.svg"},
  { userName: 'barked', profileImage:"assets/img/barked.svg", postImage:"assets/img/dog.svg"},
  { userName: 'barked', profileImage:"assets/img/barked.svg", postImage:"assets/img/disneyParksOrlando.png"},
]

export default function Posts() {
  return (
    <div class='posts'>
      {posts.map((post) => (
      <>
        <Post postData={post}/>
      </>  
      ))}
    </div>
  )
}

function Post ({postData}) {
  const [like, setLike] = useState();
  return (
    <div className="post">
  <div className="topo">
    <div className="usuario">
      <img src={postData.profileImage} alt="profileImage"/>
      {postData.userName}
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src={postData.postImage} alt="postImage"/>
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        {
          like ? <ion-icon onClick={() => setLike(!like)} name="heart"></ion-icon> : <ion-icon onClick={() => setLike(!like)} name="heart-outline"></ion-icon>
        }
        
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div className="curtidas">
      <img src="assets/img/respondeai.svg" alt="respondeai"/>
      <div className="texto">
        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
      </div>
    </div>
  </div>
</div>
  )
}