//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let comunicacionverbal = document.getElementById("comunicacionverbal");
crearBarra(comunicacionverbal);
let capacidadorganizativa = document.getElementById("capacidadorganizativa");
crearBarra(capacidadorganizativa);
let pensamientocriticologico = document.getElementById("pensamientocriticologico");
crearBarra(pensamientocriticologico);
let liderazgo = document.getElementById("liderazgo");
crearBarra(liderazgo);
let multitarea = document.getElementById("multitarea");
crearBarra(multitarea);
let proactividad = document.getElementById("proactividad");
crearBarra(proactividad);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalcomunicacionverbal = setInterval(function(){
            pintarBarra(comunicacionverbal, 16, 0, intervalcomunicacionverbal);
        },100);
        const intervalcapacidadorganizativa = setInterval(function(){
            pintarBarra(capacidadorganizativa, 11, 1, intervalcapacidadorganizativa);
        },100);
        const intervalpensamientocriticologico = setInterval(function(){
            pintarBarra(pensamientocriticologico, 11, 2, intervalpensamientocriticologico);
        },100);
        const intervalliderazgo = setInterval(function(){
            pintarBarra(liderazgo, 15, 3, intervalliderazgo);
        },100);
        const intervalmultitarea = setInterval(function(){
            pintarBarra(multitarea, 16, 4, intervalmultitarea);
        },100);
        const intervalproactividad = setInterval(function(){
            pintarBarra(proactividad, 11, 5, intervalproactividad);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}