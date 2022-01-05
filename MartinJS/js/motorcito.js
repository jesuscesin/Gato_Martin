var estadolicuadora = "apagada";
var sonidolicuadora = document.getElementById("licuar-boton-sonido");
var licuadora = document.getElementById("licuar");

function controlarlicuadora() {
    if (estadolicuadora == "apagada") {
        estadolicuadora = "encendida";
        sonido();
        licuadora.classList.add("active");
        console.log("me encendiste");
    } else {
        estadolicuadora = "apagada"
        licuadora.classList.remove("active");
        sonido();
        console.log("maulle");
    }
}

function sonido(){
    if(sonidolicuadora){
        sonidolicuadora.play();
    }
}