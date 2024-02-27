//creo una función que se ejecutará cuando hago clic en el boton
function muestra_oculta(id) {
    //declaro la función y paso por parametro el selector de referencua que quiero ocultar/mostrar
    let div = document.getElementById(id)
    //uso el condicional IF para saber si el DIV está oculto (display: none) o si está visible
    if (div.style.display === "none" ) {
      div.style.display = "flex";
    }
    else {
      div.style.display = "none";
    }