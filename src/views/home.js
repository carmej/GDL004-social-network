export default ()=> {
    const viewhome= `<h2 class="text-center"> ¡BIENVENIDO A NUESTRA PAGINA!</h2>
    <figure class="text-center">
        <img class="image" src="images/hommlogo.png" alt="homeschooling">
    </figure>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewhome;

    return divElem;
}