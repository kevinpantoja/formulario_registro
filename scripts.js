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
    let exp_reg = /^[1-9][0-9]{8}$/i;
    if(exp_reg.test(texto)){
        return true;
    }
    return false;
}
const validar_correo = (texto)=>{
    let exp_reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
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
    if(funcion($elemento.value.trim())){
        if($elemento.classList.contains("error_input")){
            $elemento.classList.remove("error_input")
        }
        return true;
    }else{
        if(!$elemento.classList.contains("error_input")){
            $elemento.classList.add("error_input")
        }
        return false;
    }
}
const mostrar_error = (mensaje)=>{
    $mensaje__error.innerText = mensaje;
    if(!$mensaje__error.classList.contains("error__visible")){
        $mensaje__error.classList.add("error__visible");
    }
}
const ocultar_error = ()=>{
    if($mensaje__error.classList.contains("error__visible")){
        $mensaje__error.classList.remove("error__visible");
    }
}


/*funciones dentro de los eventos*/
const evento_nombre = ($elemento)=>{
    let solo_letras = /^[a-záéíóúáäëïöü\s]*$/
    if(analizar_input($elemento,validar_nombre)){
        ocultar_error();
    }else{
        if(!solo_letras.test($elemento.value)){
            mostrar_error("El nombre solo debe tener letras");
            return;
        }
        if($elemento.value.length < 2){
            mostrar_error("El nombre debe tener como mínimo 2 caracteres");
            return;
        }
    };
}
const evento_apellido = ($elemento)=>{
    let solo_letras = /^[a-záéíóúáäëïöü\s]*$/
    if(analizar_input($elemento,validar_nombre)){
        ocultar_error();
    }else{
        if(!solo_letras.test($elemento.value)){
            mostrar_error("El apellido solo debe tener letras");
            return;
        }
        if($elemento.value.length < 2){
            mostrar_error("El apellido debe tener como mínimo 2 caracteres");
            return;
        }
    };
}
const evento_direccion = ($elemento)=>{
    let solo_letras = /^[a-z0-9\.\-\s]*$/
    if(analizar_input($elemento,validar_direccion)){
        ocultar_error();
    }else{
        if(!solo_letras.test($elemento.value)){
            mostrar_error("La dirección debe contener solo letras,números . y -");
            return;
        }
        if($elemento.value.length < 8){
            mostrar_error("La dirección debe tener 8 caracters como mínimo");
            return;
        }
    };
}
const evento_correo = ($elemento)=>{
    if(analizar_input($elemento,validar_correo)){
        ocultar_error();
    }else{
        mostrar_error("Ingrese un e-mail válido");
    };
}
const evento_celular = ($elemento)=>{
    let solo_numeros = /^[0-9]*$/
    if(analizar_input($elemento,validar_celular)){
        ocultar_error();
    }else{
        if(!solo_numeros.test($elemento.value)){
            mostrar_error("El celular solo debe contener números");
            return;
        }
        if($elemento.value.length == 9){
            mostrar_error("El celular debe tener 9 dígitos");
            return;
        }
        if(solo_numeros.test($elemento.value) && $elemento.value[0] == "0"){
            mostrar_error("El celular no debe comenzar en 0");
            return;
        }
    };
}


inputs = [$input_nombre,$input_apaterno,$input_amaterno,$input_direccion,$input_telefono,$input_email];
input_verificacion = [evento_nombre,evento_apellido,evento_apellido,evento_direccion,evento_celular,evento_correo];

window.addEventListener("load", (m)=>{
    for(let i = 0; i < inputs.length;i++){
        inputs[i].addEventListener("input",(e)=>{
            const $elemento = e.target;
            input_verificacion[i]($elemento);
        });
        inputs[i].addEventListener("click",(e)=>{
            const $elemento = e.target;
            input_verificacion[i]($elemento);
        });
    }
});


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
    }else{
        mostrar_error("no se puede enviar por datos inválidos");
    }
})
