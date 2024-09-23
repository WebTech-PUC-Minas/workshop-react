import style from "./Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <figure>
        <img src="/img/movie_01.jpeg" />
      </figure>
      <article>
        <h1>Loren ipsum dolor</h1>
        <div>
          <time>05 de set de 2024</time>
          <img className={style.icon} src="icons/heart-regular.svg" />
        </div>
      </article>
    </div>
  );
}

export default Card;
