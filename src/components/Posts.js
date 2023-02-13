import { useState } from 'react';

const posts = [
  { userName: 'meowed', profileImage:"assets/img/meowed.svg", postImage:"assets/img/gato-telefone.svg", followerPicturer: "assets/img/dior.jpg", followerName: "dior", others: "410.065"},
  { userName: 'barked', profileImage:"assets/img/barked.svg", postImage:"assets/img/dog.svg", followerPicturer: "assets/img/jpmorgan.png", followerName: "jpmorgan", others: "602.268"},
  { userName: 'waltdisneyworld', profileImage:"assets/img/waltdisneyworld.jpg", postImage:"assets/img/disneyParksOrlando.png", followerPicturer: "assets/img/appleLogo.png", followerName: "apple", others: "1.314.568"}
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
  const [like, setLike] = useState(false);
  const [save, setSave] = useState();

  function likeImage (){
    if (like === false){
      setLike(true);
    }
  } 

  return (
    <div className="post" data-test="post">
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
    <img src={postData.postImage} onClick={likeImage} data-test = "post-image" alt="postImage"/>
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        {
          like  ? <ion-icon data-test="like-post" style={{ color: '#FF0000'}} onClick={() => setLike(!like)} name="heart"></ion-icon> : <ion-icon className="like" data-test="like-post" onClick={() => setLike(!like)} name="heart-outline"></ion-icon>
        }
        
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        {
          save ? <ion-icon data-test="save-post" onClick={() => setSave(!save)} name="bookmark"></ion-icon> : <ion-icon data-test="save-post" onClick={() => setSave(!save)} name="bookmark-outline"></ion-icon>
        }
      </div>
    </div>

    <div className="curtidas">
      <img src={postData.followerPicturer} alt="FollowerPicture"/>
      <div className="texto">
        Curtido por <strong>{postData.followerName}</strong> e <strong>outras {postData.others} pessoas</strong>
      </div>
    </div>
  </div>
</div>
  )

}
