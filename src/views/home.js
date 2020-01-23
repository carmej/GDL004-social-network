export default ()=> {
    const viewhome= `
    -<header>
   <div class="contenedor">
      <img class="logo" src="images/hommlogo.png">
      <h1>LIBRES PARA APRENDER</h1>  
            <nav class="menu">
          <ul>
             <li>
             <a href="#/">INICIO</a>
             </li>
             <li>
                <a href="#/entrar">ENTRAR</a>
             </li>
             <li>
                <a href="#/crearcuenta">CREAR CUENTA</a>
             </li>
           </ul>
          </nav>
             
        </div>
  </header>
    <div class=contenedor-inicio>
    <div class="items"> <img src="images/boy-unschooling.jpeg" class="logo-inicio"></div>
    <div class="items"><h2>EDUlarity</h2></div> 
    <div class="items"><p>Bienvenidos A Nuestro Espacio Social De Aprendizaje Sobre Alternativas A La Educacion Tradicional,
     Educación Alternativa Y Educación Sin Escuela: Homeschooling, Unschooling, Worldschooling.</p></div></div>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewhome;

    return divElem;
}