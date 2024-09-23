import Card from "../components/Card";

function React() {
  return (
    <container className="container">
      <Card banner="img/movie_01.jpeg" title="Eduardo e Mônica" date="23 de set de 2024" />
      <Card banner="img/movie_02.jpg" title="Guardiões da Galáxia" date="24 de set de 2024" />
      <Card banner="img/movie_03.jpeg" title="Deadpool e Wolverine" date="25 de set de 2024" />
      <Card banner="img/movie_04.jpg" title="Oppenheimer" date="26 de set de 2024" />
    </container>
  );
}

export default React;
