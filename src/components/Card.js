import style from './Card.module.css'

function Card() {
  return (
    <article className={style.card}>
      <figure>
        <img src="/img/movie_01.jpeg" />
      </figure>
      <h1>Título do Filme</h1>
      <p>
        Descrição descrição descrição descrição descrição descrição descrição descrição descrição
        descrição descrição descrição
      </p>
    </article>
  );
}

export default Card;
