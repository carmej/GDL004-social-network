export default ()=> {
  //Crear div dentro de mi Container
  const crearCuenta = document.getElementById("container");
  const divElement=document.createElement("div");
  container.appendChild(divElement);
  divElement.setAttribute("id", "divElement");

  //Crear form principal
  const formCrearCuenta = document.createElement("form")
  divElement.appendChild(formCrearCuenta);

  //Input nombre
  const inputTextNom=document.createElement("input")
  inputTextNom.setAttribute("type", "text");
  inputTextNom.setAttribute("placeholder", "Escribe tu nombre");

  //Input Apellido
  const inputTextApe=document.createElement("input")
  inputTextApe.setAttribute("type", "text");
  inputTextApe.setAttribute("placeholder", "Escribe tu Apellido");

  //Input Correo
  const inputTextCorreo=document.createElement("input")
  inputTextCorreo.setAttribute("type", "text");
  inputTextCorreo.setAttribute("placeholder", "Escribe tu Correo");

  //Input Boton Aceptar....este debe hacer un evento a la funcion de SignU
  const inputAceptar=document.createElement("input")
  inputAceptar.setAttribute("type", "submit");
  inputAceptar.setAttribute("value", "submit");


  formCrearCuenta.appendChild(inputTextNom);
  formCrearCuenta.appendChild(inputTextApe);
  formCrearCuenta.appendChild(inputTextCorreo);
  formCrearCuenta.appendChild(inputAceptar);

  return crearCuenta;
};
