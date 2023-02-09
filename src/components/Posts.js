export default function Posts() {
    return (
<div className="posts">
<div className="post">
  <div className="topo">
    <div className="usuario">
      <img src="assets/img/meowed.svg" alt="meowed"/>
      meowed
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src="assets/img/gato-telefone.svg" alt="gato-telefone"/>
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
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

<div className="post">
  <div className="topo">
    <div className="usuario">
      <img src="assets/img/barked.svg" alt="barked"/>
      barked
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src="assets/img/dog.svg" alt="dog" />
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div className="curtidas">
      <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
      <div className="texto">
        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
      </div>
    </div>
  </div>
</div>
</div>
   );
}