/*elementos html*/

const $input_nombre = document.querySelector("#nombre"),
$input_apaterno = document.getElementById("apaterno"),
$input_telefono = document.getElementById("telefono"),
$input_email = document.getElementById("email"),
$input_direccion = document.getElementById("direccion"),
$input_amaterno = document.getElementById("amaterno"),
$mensaje__error = document.querySelector(".mensaje__error"),
$enviar = document.querySelector(".boton_enviar"),
$form = document.querySelector(".formulario");





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
const analizar_input = ($elemento,funcion,mensaje = "")=>{
    if(funcion($elemento.value)){
        if($elemento.classList.contains("error_input")){
            $elemento.classList.remove("error_input")
        }
        $mensaje__error.innerText = mensaje;
        if($mensaje__error.classList.contains("error__visible")){
            $mensaje__error.classList.remove("error__visible");
        }
        return true;
    }else{
        if(!$elemento.classList.contains("error_input")){
            $elemento.classList.add("error_input")
        }
        $mensaje__error.innerText = mensaje;
        if(!$mensaje__error.classList.contains("error__visible")){
            $mensaje__error.classList.add("error__visible");
        }
        return false;
    }
}
$input_nombre.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre,"nombre inválido (mínimo 2 caracteres)");
});
$input_nombre.addEventListener("click",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre,"nombre inválido (mínimo 2 caracteres)");
});
$input_apaterno.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre,"solo apellido paterno");
});
$input_apaterno.addEventListener("click",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre,"solo apellido paterno");
});
$input_amaterno.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre,"solo apellido materno");
});
$input_amaterno.addEventListener("click",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_nombre,"solo apellido materno");
});
$input_telefono.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_celular,"celular solo permite números y +");
})
$input_telefono.addEventListener("click",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_celular,"celular solo permite números y +");
})
$input_email.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_correo,"ingrese un email válido");
})
$input_email.addEventListener("click",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_correo,"ingrese un email válido");
})
$input_direccion.addEventListener("input",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_direccion,"direccion (mínimo 8 caractéres)");
})
$input_direccion.addEventListener("click",(e)=>{
    const $elemento = e.target;
    analizar_input($elemento,validar_direccion,"direccion (mínimo 8 caractéres)");
})


/*validar antes de enviar*/
const verificando_casillas = (elementos,funciones)=>{
    let verificador = true;
    for(let i = 0; i < elementos.length; i++){
        if(!analizar_input(elementos[i],funciones[i])){
            console.log(elementos[i].value+"  "+i);
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
        $form.submit();
        console.log("listo para enviar");
    }else{
        $mensaje__error.innerText = "no se puede enviar por datos inválidos";
        console.log("aún hay elementos con errores");
    }
})
