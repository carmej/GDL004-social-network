 export default ()=> {
        const divElement=document.createElement("div");
        divElement.setAttribute("id", "_container");
          //crear boton para regresar a inicio     no direccionan aun!//
        const div_btn=document.createElement("div");
        div_btn.setAttribute("class","div_btn");
        const btn=document.createElement("input");
        btn.setAttribute("type","submit");
        btn.setAttribute("value","inicio");
        btn.setAttribute("class","inicio_btn");
        const anchor=document.createElement("a");
        anchor.setAttribute("href","#/");
        btn.appendChild(anchor);
         //boton de entrar
         const btn2=document.createElement("input");
         btn2.setAttribute("type","submit");
         btn2.setAttribute("value","entrar");
         btn2.setAttribute("class","entrar_btn");
         const anchor2=document.createElement("a");
         anchor.setAttribute("href","#/entrar");
         btn2.appendChild(anchor2);



        //Input nombre
        const inputTextNom=document.createElement("input");
        inputTextNom.setAttribute("type", "text");
        inputTextNom.setAttribute("placeholder", " Nombre");
        inputTextNom.setAttribute("class", "item-cuenta");

        //Input Email
        const inputEmail=document.createElement("input")
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("placeholder", " Email");
        inputEmail.setAttribute("class", "item-cuenta");
        //Input Password
        const inputPass=document.createElement("input")
        inputPass.setAttribute("type", "text");
        inputPass.setAttribute("placeholder", "Password");
        inputPass.setAttribute("class", "item-cuenta");
         //Input confirmar Password
         const inputPass_confirm=document.createElement("input")
         inputPass_confirm.setAttribute("type", "text");
         inputPass_confirm.setAttribute("placeholder", " Confirmar Password");
         inputPass_confirm.setAttribute("class", "item-cuenta");
        //Input Boton Aceptar....este debe hacer un evento a la funcion de SignUp
        const inputCrear_cuenta=document.createElement("input")
        inputCrear_cuenta.setAttribute("type", "submit");
        inputCrear_cuenta.setAttribute("value", "crear cuenta");
        inputCrear_cuenta.setAttribute("class", "cuenta_btn");

        divElement.appendChild(div_btn);
        div_btn.appendChild(btn);
        div_btn.appendChild(btn2);
        divElement.appendChild(inputTextNom);
        divElement.appendChild(inputEmail);
        divElement.appendChild(inputPass);
        divElement.appendChild(inputPass_confirm);
        divElement.appendChild(inputCrear_cuenta);

        return divElement;

    
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