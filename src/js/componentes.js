import '../css/componentes.css';
//import webpackLogo from '../assets/imgs/wpack.png'


export const saludar = ( nombre = 'sin nombre') => {
    console.log('Creando etquieta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} !`;

    document.body.append(h1);

    //IMG
    //console.log(webpackLogo)
    //const img = document.createElement('img');
    //img.src = webpackLogo;
    //document.body.append(img);
}