import { useState } from "react";
import style from "./Card.module.css";

function Card({ banner, title, date }) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={style.card}>
      <figure>
        <img src={banner} />
      </figure>
      <article>
        <h1>{title}</h1>
        <div>
          <time>{date}</time>
          {show ? (
            <img className={style.icon} src="icons/heart-solid.svg" onClick={handleClick}/>
          ) : (
            <img className={style.icon} src="icons/heart-regular.svg" onClick={handleClick}/>
          )}
        </div>
      </article>
    </div>
  );
}

export default Card;
