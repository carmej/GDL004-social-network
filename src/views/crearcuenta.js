 export default ()=> {
    export default ()=> {
        const viewcrearcuenta=
        //Crear div dentro de mi Container
       // const crearCuenta = document.getElementById("container");//
        const divElement=document.createElement("div");
        //container.appendChild(divElement);//
        divElement.setAttribute("id", "_container");
        //Crear form principal
        //const formCrearCuenta = document.createElement("div")
        //divElement.appendChild(formCrearCuenta);
        //Input nombre
        const inputTextNom=document.createElement("input");
        inputTextNom.setAttribute("type", "text");
        inputTextNom.setAttribute("placeholder", " Nombre");
        inputTextNom.setAttribute("class", "item-login");

        //Input Email
        const inputEmail=document.createElement("input")
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("placeholder", "tu Email");
        inputEmail.setAttribute("class", "item-login");
        //Input Password
        const inputPass=document.createElement("input")
        inputPass.setAttribute("type", "text");
        inputPass.setAttribute("placeholder", "Password");
         //Input confirmar Password
         const inputPass_confirm=document.createElement("input")
         inputPass_confirm.setAttribute("type", "text");
         inputPass_confirm.setAttribute("placeholder", " Confirmar Password");
        //Input Boton Aceptar....este debe hacer un evento a la funcion de SignUp
        const inputAceptar=document.createElement("input")
        inputAceptar.setAttribute("type", "submit");
        inputAceptar.setAttribute("value", "submit");
        formCrearCuenta.appendChild(inputTextNom);
        formCrearCuenta.appendChild(inputEmail);
        formCrearCuenta.appendChild(inputPass);
        formCrearCuenta.appendChild(inputPass_confirm);
        formCrearCuenta.appendChild(inputAceptar);
        return crearCuenta;

    
}


     /*const viewcrearcuenta= `<div class="login-container">    
    <div class="brand-login">     
    <img src="images/homeschooling.png" class="logo"></div>     
    <div class="form-login">       
    <input type="text" class="form-login--user" placeholder="Email">        
    <input type="password" class="form-login--user" placeholder="Contraseña">        
    <input type="submit" value="Ingresar" class="form-login--submit"> 
    </div>  
    </div>   
   `

   const divElem = document.createElement('div')
    divElem.innerHTML = viewcrearcuenta;
    retur divElement;*/