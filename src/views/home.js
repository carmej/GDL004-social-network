export default ()=> {
    const viewhome= `<div class=contenedor-inicio>
    <div class="items"> <img src="images/boy-unschooling.jpeg" class="logo-inicio"></div>
    <div class="items"><h2>EDUlarity</h2></div> 
    <div class="items"><p>Bienvenidos A Nuestro Espacio Social De Aprendizaje Sobre Alternativas A La Educacion Tradicional,
     Educación Alternativa Y Educación Sin Escuela: Homeschooling, Unschooling, Worldschooling.</p></div></div>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewhome;

    return divElem;
}