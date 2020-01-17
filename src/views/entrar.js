export default ()=> {
    const viewentrar= `<div class="login-container">    
    <div class="brand-login">     
    <img src="images/homeschooling.png" class="logo"></div>     
    <div class="form-login">       
    <input type="text" class="form-login--user" placeholder="Email">        
    <input type="password" class="form-login--user" placeholder="Contraseña">        
    <input type="submit" value="Ingresar" class="form-login--submit"> 
    </div>  
    </div>   
    <div id="iconos">     
    <a id="google"><img src="images/googleCircle.png" class="pequeña"></a>      
    <a id="facebook"><img src="images/iconFacebook.png" class="pequeña"></a></div>    
    <div id="padre">             
    </div>
    <p>No tienes cuenta aún?</p>  <p> <input class="button" type="button" value="REGISTRARSE" name="Entrar" id="botonregistrarse"></p>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewentrar;

    return divElem;
}