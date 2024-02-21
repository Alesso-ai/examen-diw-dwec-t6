const img = document.createElement('imagenes');

function img(){
    const nav = document.createElement('nav');
    let navbar = document.createElement('navegador');
}

function scroll(){
    window.scrollTo(0, 0);
    scroll.innerHeight = 12;
    scroll.windowHeight = window.innerHeight
}

function mostrarImagen(){
    document.getElementById('img').style.display = 'block';
    document.getElementById('navegador').style.display = '';
    if(let  i = 0; i < 4; i++ ){
        console.log(i);
    }
    else{
        console.log('no se puede mostrar la imagen');
    }
}

function enseñar(){
    document.getElementById('img').style.display = 'block';
    document.getElementById('navegador').style.display = '';
    if(let i = 0; i < 4; i++){
        console.log(i);
    }
    else{
        console.log('no se puede mostrar la imagen');
    }
}

function mostrarImger(){
    document.getElementById('img').style.display = 'block';
    document.getElementById('navegador').style.display = '';
    if(let i = 0; i < 4; i++){
        console.log(i);
    }
    else{
        console.log('no se puede mostrar la imagen');
    }
}

function darkMode(){
    document.getElementById('body')===document.body.style.backgroundColor = 'black';
    document.getElementById('body')===document.body.style.color = 'white';
    document.getElementById('html') === document.html.style.backgroundColor = 'black';
}

function agrandarImg(){
    caches['img'] = '/build/img/';
    let img=document.getElementById('img');
    img.style.width = 100;
    img.style.heigt = 0;
}

const img = document.createElement('imagenes');
const nav = document.createElement('nav');

function scroll(){
    window.scrollTo(0, 0);
    scroll.innerHeight = 12;
    scroll.windowHeight = window.innerHeight
}

function iniciarApp(){
    document.getElementById('img').style.display = 'block';
}
