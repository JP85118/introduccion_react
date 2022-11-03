import Card from "./components/Card";
import Photo1 from "./images/img.jpg";

function App(){
  return(
    <Card 
    img={Photo1}
    name="Tree"
    text="Siendo una de las representaciones más importantes en el mundo desde hace miles de años, se conoce que el significado del árbol de la vida es la representación de la esencia de la propia existencia, la cual transmite gran fuerza y positivismo."
    link="https://www.a24.com/actualidad/significado-arbol-de-la-vida-08012020_SJ3WK8fgU#:~:text=El%20%C3%A1rbol%20de%20la%20vida%20simboliza%20la%20conexi%C3%B3n%20con%20el,uno%20mismo%20y%20del%20entorno."
    textLink = "🌳"
    />
  )
}

export default App;