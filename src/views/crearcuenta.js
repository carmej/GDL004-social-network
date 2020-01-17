export default ()=> {
    const viewcrearcuenta= `<h2 class="text-center"> ¡BIENVENIDO A NUESTRA PAGINA!</h2>
    <figure class="text-center">
        <img class="image" src="images/banneringresar.jpg" alt="homeschooling">
    </figure>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewcrearcuenta;

    return divElem;
}