export default ()=> {
    
    //crear el div padre para paguina de login//
   const divElementos=document.createElement("div");
   divElementos.setAttribute("id","_container");

   // creo div con elemento p..... y lo agredo a div padre//
   const div1=document.createElement("div");
   div1.setAttribute("class","item-login");
   const p =document.createElement("p");
      // PENDIENTE aun no creo una linea horizontal con hr//
   const hr=document.createElement("hr");
   const t =document.createTextNode("inicia sesion en tu cuenta de EDUlarity");
   const p_texto=p.appendChild(t);
   divElementos.appendChild(div1);
   div1.appendChild(p_texto);
  

 //crear el div con elemento input email y adregarlo a div padre//
 const div2_input=document.createElement("div");
 div2_input.setAttribute("class","item-login");
 const input=document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("placeholder","Email");
 input.setAttribute("id","email");
 divElementos.appendChild(div2_input);
 div2_input.appendChild(input);

//crear div con elemnto input password y agregarlo a....//
const div3_input=document.createElement("div");
 div3_input.setAttribute("class","item-login");
 const input_p =document.createElement("input");
 input_p.setAttribute("type","text");
 input_p.setAttribute("placeholder","PassWord");
 input_p.setAttribute("id","password");
 divElementos.appendChild(div3_input);
 div3_input.appendChild(input_p);
 // crear un div para btn para inf e iniciar sesion y agrerlo a div padre//
const div4_btn=document.createElement("div");
div4_btn.setAttribute("class","item-login");
const btn_iniciar=document.createElement("input");
btn_iniciar.setAttribute("class","form-login--submit");
btn_iniciar.setAttribute("type","submit");
btn_iniciar.setAttribute("value","iniciar sesion");
btn_iniciar.setAttribute("id","btn_iniciarSesion");
divElementos.appendChild(div4_btn);
div4_btn.appendChild(btn_iniciar);

//crear div con elemento parrafo y agredarlo a div padre//
const div5_p=document.createElement("div");
 div5_p.setAttribute("class","item-login");
   const p_2 =document.createElement("p");
   const t_2 =document.createTextNode("o bien ingresa con...");
   const elemt_p=p_2.appendChild(t_2);
   divElementos.appendChild(div5_p);
   div5_p.appendChild(elemt_p);
//crear div con elementos img f y g y agregarlos a div padre//
const div6_logo=document.createElement("div");
div6_logo.setAttribute("class","item-login");

const logo_f=document.createElement("img");
logo_f.setAttribute("class","pequeña");
logo_f.setAttribute("src","images/iconFacebook.png");
logo_f.setAttribute("id","btn_face");
    //logo de gopgle//
const logo_g=document.createElement("img");
logo_g.setAttribute("class","pequeña");
logo_g.setAttribute("src","images/googleCircle.png");

divElementos.appendChild(div6_logo);
div6_logo.appendChild(logo_f);
div6_logo.appendChild(logo_g);
//crear div con elemento p y debtro del p un <a> y agregarlos al div padre//
const div7_parrafo=document.createElement("div");
div7_parrafo.setAttribute("class","item-login");

const p_3 =document.createElement("p");
p_3.innerHTML="no tienes cuenta aun?";
const anchor=document.createElement("a");
anchor.setAttribute("href","#/crearcuenta");
anchor.innerHTML="crear cuenta";
const parrafo=p_3.appendChild(anchor);


divElementos.appendChild(parrafo);











 return divElementos;
}
//const t_3 =document.createTextNode("No tienes cuenta aún?");*/
//const p_pregunta=p_3.appendChild(t_3);
        // <a> dentro del parrafo//
//const anchor=document.createElement("a");
//anchor.setAttribute("href","#/crearcuenta");
   // no logre que el anchor se visualizara en la vista//
//anchor.innerHTML= "crear cuenta";
//p_3.appendChild(anchor);
//divElementos.appendChild(div7_parrafo);
//div7_parrafo.appendChild(p_pregunta);

/*`<div class="login-container"> 
    <div class="item-login">
    <form id="form">
    <p>¡Inicia sesion en tu cuenta de EDUlarity</p>
    </div>     
    <div class="item-login">
    <input type="text" class="form-login--user" placeholder="Email">
    </div>        
    <div class="item-login">
    <input type="password" class="form-login--user" placeholder="Contraseña">
    </div>        
    <div class="item-login">
    <input type="submit" value="Iniciar sesion" class="form-login--submit">
    </div>
    <p class="item-login">ingresa con...</p>
  <div id="item-login">     
  <a id="google"><img src="images/googleCircle.png" class="pequeña"></a>      
  <a id="facebook"><img src="images/iconFacebook.png" class="pequeña"></a>
  </div>    
  <p class="item-login">No tienes cuenta aún? <a href="#/crearcuenta">CREAR CUENTA</a></p>
  </div>
  </form>`
  
    const divElem = document.createElement('div')
    divElem.innerHTML = viewentrar;

    return divElem;*/



 