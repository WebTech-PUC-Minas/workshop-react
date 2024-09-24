import Card from "../components/Card";

function React() {
  return (
    <container className="container">
      <Card banner="img/movie_01.jpeg" title="Eduardo e Mônica" date="23 de set de 2024" />
      <Card banner="img/movie_02.jpg" title="Guardiões da Galáxia" date="24 de set de 2024" />
      <Card banner="img/movie_03.jpeg" title="Deadpool e Wolverine" date="25 de set de 2024" />
      <Card banner="img/movie_04.jpg" title="Batman" date="26 de set de 2024" />
      <Card banner="img/movie_05.jpg" title="Coringa" date="27 de set de 2024" />
      <Card banner="img/movie_06.jpg" title="BorderLands" date="28 de set de 2024" />
      <Card banner="img/movie_07.jpeg" title="Elementos" date="29 de set de 2024" />
      <Card banner="img/movie_08.jpeg" title="Wish" date="30 de set de 2024" />
    </container>
  );
}

export default React;
