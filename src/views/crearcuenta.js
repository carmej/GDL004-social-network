export default ()=> {
    const viewcrearcuenta=
    //`<div class="login-container">
      // <main class="register">
         //<form class="formulario">
           //<div>
            // <p class="titulo/registro">Crea tu cuenta aqui</>
           //</div>
           //<div class="input">
            //<input  id="name" required placeholder="Nombre de Perfil">
            //<input  id="reg-correo" placeholder="Correo electronico" required>
            //<input  id="reg-pss" placeholder="Contrasena" required>
           //</div>
      //</div> `
      const formulario=document.getElementById("container")
      let newInput=document.createElement("input");
      formulario.appendChild(newInput);

    //const divElem = document.createElement('div')
    //divElem.innerHTML = viewcrearcuenta;

    return formulario;
}
