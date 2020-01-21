export default ()=> {
    const viewentrar= `<div class="login-container">    
    <div class="item-login">
    <p>¡Inicia sesion en tu cuenta de EDUlarity</p></div>     
    <div class="item-login">
    <input type="text" class="form-login--user" placeholder="Email"> </div>        
    <div class="item-login"> <input type="password" class="form-login--user" placeholder="Contraseña"></div>        
    <div class="item-login"><input type="submit" value="Iniciar sesion" class="form-login--submit"></div>
    <p class="item-login">ingresa con...</p>
    <div id="item-login">     
    <a id="google"><img src="images/googleCircle.png" class="pequeña"></a>      
    <a id="facebook"><img src="images/iconFacebook.png" class="pequeña"></a></div>    
    <p class="item-login">No tienes cuenta aún?<input class="button" type="button" value="CREAR CUENTA" name="Entrar" id="botonregistrarse"></p>
    </div>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewentrar;

    return divElem;
}