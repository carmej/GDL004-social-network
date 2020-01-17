export default () => {
    const viewDifferent = `
    <h2>404</h2>
    <h1>Pagina no encontrada</h1>
    <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la url`;

    const divElemt = document.createElement('div');
    divElemt.setAttribute('id', 'message');
    divElemt.innerHTML = viewDifferent;
    return divElemt;
}