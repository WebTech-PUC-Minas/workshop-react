# Do Zero ao Deploy com React.js e Next.js

## Introdução

Bem-vindos ao workshop de React! Este repositório serve como apoio para acompanhar o conteúdo e realizar as práticas ao longo do curso. Qualquer dúvida, não hesite em recorrer aos instrutores que estarão disponíveis para ajudar.

## Setup

Para começar, siga os passos abaixo para configurar o ambiente do projeto:

```bash
git clone https://github.com/WebTech-PUC-Minas/workshop-react.git
cd workshop-react
npm install
npm start
```
Agora você está pronto para começar a explorar React!

## Criando o primeiro componente - Navbar

Componentes são a base da construção de interfaces no React. Vamos começar criando um componente Navbar simples que exibirá o nome do site e alguns links de navegação.

```jsx
import style from './Navbar.module.css';

function Navbar() {
  return (
    <header className={style.navbar}>
      <h1><a>WebTech PUC Minas</a></h1>
      <nav>
        <ul>
          <li><a>React.js</a></li>
          <li><a>Next.js</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
```

## O que são componentes - Criando o nosso Card

Componentes são blocos reutilizáveis de UI que podem ser combinados para construir interfaces maiores. Vamos criar um componente ``Card`` que exibirá informações de um filme.

```jsx
import style from "./Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <figure>
        <img src="/img/movie_01.jpeg" alt="Eduardo e Mônica" />
      </figure>
      <article>
        <h1>Eduardo e Mônica</h1>
        <div>
          <time>24 de set. 2024</time>
          <img className={style.icon} src="icons/heart-regular.svg" alt="favorite icon"/>
        </div>
      </article>
    </div>
  );
}

export default Card;
```

Neste exemplo, o ``Card`` exibe uma imagem, título e data, além de um ícone de favorito.

## O que são as rotas

No React, as rotas são usadas para navegar entre diferentes páginas. Vamos usar ``react-router-dom`` para criar um sistema de rotas básico.

### Criando as páginas

Para realizar a utilização das rotas crie duas páginas em ``/pages``, sendo elas,``React.js`` e ``Next.js``. Para a página de ``React``, copie o código abaixo. Ela será criada e utilizada no segundo dia de Workshop!

```jsx
import style from './Next.module.css'

function Next() {
  return (
    <div className={style.home_page}>
      <h1>
        Bem vindo, a <span>WebTech!</span>
      </h1>
    </div>
  );
}

export default Next;
```

### Criando as rotas

Agora sim podemos dar início nas nossas rotas, o exemplo abaixo exemplifica como ficará nosso ``App.js``.

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ReactPage from "./pages/React";
import NextPage from "./pages/Next";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={ReactPage} />
        <Route exact path="/next" Component={NextPage} />
      </Routes>
    </Router>
  );
}

export default App;
```

Aqui, criamos um sistema de rotas simples com duas páginas: uma para React e outra para Next.js.

## O que são props

Props são argumentos que você pode passar para os componentes, permitindo que eles sejam dinâmicos e reutilizáveis. Veja como utilizar props no componente ``Card``.

```jsx
import style from "./Card.module.css";

function Card({ banner, title, date }) {
  return (
    <div className={style.card}>
      <figure>
        <img src={banner} alt={title} />
      </figure>
      <article>
        <h1>{title}</h1>
        <div>
          <time>{date}</time>
          <img className={style.icon} src="icons/heart-solid.svg" alt="favorite icon" />
        </div>
      </article>
    </div>
  );
}

export default Card;
```

Agora, o ``Card`` pode receber diferentes valores para ``banner``, ``title`` e ``date``, tornando-o mais flexível.


## O que são os estados

Estados permitem que os componentes guardem e atualizem informações ao longo do tempo. Vamos adicionar um estado ao componente ``Card`` para controlar a exibição do ícone de favorito.

```jsx
import { useState } from 'react';
import style from "./Card.module.css";

function Card({ banner, title, date }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={style.card}>
      <figure>
        <img src={banner} alt={title} />
      </figure>
      <article>
        <h1>{title}</h1>
        <div>
          <time>{date}</time>
          {show ? (
            <img className={style.icon} src="icons/heart-solid.svg" alt="favorited" onClick={handleClick} />
          ) : (
            <img className={style.icon} src="icons/heart-regular.svg" alt="not favorited" onClick={handleClick} />
          )}
        </div>
      </article>
    </div>
  );
}

export default Card;
```

Agora, o ícone de favorito muda dinamicamente com base no estado ``show``.

Esperamos que este workshop tenha te ajudado a entender melhor o React. Não esqueça de praticar e, caso precise, pergunte aos instrutores para esclarecer dúvidas.









