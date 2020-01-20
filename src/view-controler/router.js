import { components } from '../views/index.js'

export const changeTmp = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = ' ';

    switch (hash) {
        case ' ':
        case '#':
        case '#/':
            { return sectionMain.appendChild(components.home()); }

        case '#/crearcuenta': 
        case '#/entrar': 
            {return sectionMain.appendChild(components[id]()); }
                
        default:
            return sectionMain.appendChild(components.different())
    }
}
