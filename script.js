/*elementos html*/
const $input_nombre = document.querySelector("#nombre"),
$input_apaterno = document.getElementById("apaterno"),
$input_telefono = document.getElementById("telefono"),
$input_email = document.getElementById("email"),
$input_direccion = document.getElementById("direccion"),
$input_amaterno = document.getElementById("amaterno"),
$enviar = document.querySelector(".boton_enviar");





/*funciones de validación*/
const validar_nombre = (texto)=>{
    let exp_reg = /^[a-záéíóúáäëïöü\s]*$/i;
    if(exp_reg.test(texto) && texto.length >= 2){
        return true;
    }
    return false;
}
const validar_celular = (texto)=>{
    let exp_reg = /^(\+[1-9][0-9]{0,2}(\s)*)?[1-9][0-9]{8}$/i;
    if(exp_reg.test(texto)){
        return true;
    }
    return false;
}
const validar_correo = (texto)=>{
    let exp_reg = new RegExp("^^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$","i");
    if(exp_reg.test(texto)){
        return true;
    }
    return false;
}
const validar_direccion = (texto)=>{
    let exp_reg = /^([a-z0-9\.\-\+]+(\s)*)+$/i;
    if(exp_reg.test(texto) && texto.length > 8){
        return true;
    }
    return false;
}


/*asignacion de eventos*/
const analizar_input = ($elemento,funcion)=>{
    if(funcion($elemento.value)){
        if($elemento.classList.contains("error_input")){
            $elemento.classList.remove("error_input")
        }
    }else{
        if(!$elemento.classList.contains("error_input")){
            $elemento.classList.add("error_input")
        }
        
    }
}
$input_nombre.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre);
});
$input_apaterno.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre);
});
$input_amaterno.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre);
});
$input_telefono.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_celular);
})
$input_email.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_correo);
})
$input_direccion.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_direccion);
})


/*validar antes de enviar*/
const verificando_casillas = (elementos,funciones)=>{
    let verificador = true;
    for(let i = 0; i < elementos.length; i++){
        if(!analizar_input(elementos[i],funciones[i])){
            if(verificador)
                verificador = false;
        }
    }
    return verificador;
}
$enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    if(verificando_casillas(
        [$input_nombre,$input_apaterno,$input_amaterno,$input_direccion,$input_email,$input_telefono],
        [validar_nombre,validar_nombre,validar_nombre,validar_direccion,validar_correo,validar_celular]
    )){
        console.log("listo para enviar");
    }else{
        console.log("aún hay elementos con errores");
    }
})
