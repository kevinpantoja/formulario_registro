<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MI FORMULARIO - POST</title>
<link rel="stylesheet" href="./style.css">
</head>
<body>
    <section class="contenedor">
        <div class="contenedor__elementos">
            <div class="contenedor__banner">
                <img src="./img/logo.png" alt=""> 
            </div>
        
            <form class="formulario" name="miFormulario" id="miFormulario" method="post" action="procesa.php">
                <div class="mensaje__error">
                    
                </div>
                <!--comentario-->
                <h1 class="formulario_titulo input_texto"><strong>Registro de persona</strong></h1>
                <div class="formulario_input _100">
                    <label class="formulario_label" for="nombre">nombres</label>
                    <input placeholder="Nombres" autocomplete="off"  class="input_text" name="nombre" type="text" id="nombre">
                </div>
                <div class="formulario_input _50">
                    <label class="formulario_label" for="apaterno">apellido paterno</label>
                    <input placeholder="Apellido Paterno" autocomplete="off"  class="input_text" name="apaterno" type="text" id="apaterno">
                </div>
                <div class="formulario_input _50">
                    <label class="formulario_label" for="amaterno">apellido materno</label>
                    <input placeholder="Apellido Materno" autocomplete="off"  class="input_text" name="amaterno" type="text" id="amaterno">
                </div>
                <div class="formulario_input formulario_fecha _100">
                    <label class="formulario_label">fecha de nacimiento</label>
                    <div>
                        <label for="diaNac" class="label_fecha">dia:</label>
                        <input autocomplete="off" name="diaNac" class='input_fecha' list="diaNac">
                        <datalist id="diaNac">
                        <?php
                            for($i = 1; $i<32; $i++)
                            {
                                if($i < 10)
                                    $cero = "0";
                                else
                                    $cero = "";
                                echo "<option value='".$cero.$i."'>";					
                            }
                        ?>          
                        </datalist>
                    </div>
                    <div>
                        <label for="mesNac" class="label_fecha" >mes:</label>
                        <input autocomplete="off" name="mesNac"  class='input_fecha' list="mesNac">
                        <datalist id="mesNac">
                        <?php
                            for($i = 1; $i<=12; $i++)
                            {
                                if($i < 10)
                                    $cero = "0";
                                else
                                    $cero = "";
                                echo "<option value='".$cero.$i."'>";					
                            }
                        ?>  
                        </datalist>    
                    </div>
                    <div>
                        <label for="anioNac" class="label_fecha">año:</label>
                        <input autocomplete="off" name="anioNac" class='input_fecha' list="anioNac">
                        <datalist id="anioNac">
                        <?php
                        $anio = date("Y");
                        for($i = $anio; $i >= 1900; $i--)
                        echo "<option class='input_fecha' value='".$cero.$i."'>";	
                        ?>  
                        </datalist>    
                    </div>
                    
                </div>
                <div class="formulario_input _100">
                    <label class="formulario_label" >genero</label>
                    <div class="input_radio">
                        <input autocomplete="off" class="input_genero" name="genero" type="radio" id="genero_0" value="masculino" checked>
                        <label class="label_genero" for="genero_0">masculino</label>
                    </div>
                    <div class="input_radio">
                        <input autocomplete="off" class="input_genero" name="genero" type="radio" id="genero_1" value="femenino">
                        <label class="label_genero" for="genero_1">femenino</label>  
                    </div>
                    
                </div>
                <div class="formulario_input _100">
                    <label class="formulario_label" for="direccion">dirección</label>
                    <input placeholder="Dirección" autocomplete="off"  class="input_text" name="direccion" type="text" id="direccion">
                </div>
                <div class="formulario_input _50">
                    <label class="formulario_label" for="telefono">telefono</label>
                    <input placeholder="Número de Celular" autocomplete="off"  class="input_text" name="telefono" type="text" id="telefono">
                </div>
                <div class="formulario_input _50">
                    <label class="formulario_label" for="email">email</label>
                    <input placeholder="Correo Electrónico" autocomplete="off"  class="input_text" name="email" type="text" id="email">
                </div>
                <div class="formulario_input _100">
                    <label class="formulario_label" for="preferencias">preferencias</label>

                    <div class="input_checkbox">
                        <input autocomplete="off" class="input_preferencia" name="deporte" type="checkbox" id="deporte" value="deporte">
                        <label class="label_preferencia" for="deporte">deporte</label>
                    </div>
                    <div class="input_checkbox">
                        <input autocomplete="off" class="input_preferencia" name="cine" type="checkbox" id="cine" value="cine">
                        <label class="label_preferencia" for="cine">cine</label>
                    </div>
                    <div class="input_checkbox">
                        <input autocomplete="off" class="input_preferencia" name="lectura" type="checkbox" id="lectura" value="lectura">
                        <label class="label_preferencia" for="lectura">lectura</label>
                    </div>
                </div>
                <div class="formulario_input _50">
                    <input class="boton_cancelar" autocomplete="off"  type="reset" name="cancel" id="cancel" value="Cancelar">
                </div>
                <div class="formulario_input _50">
                    <input class="boton_enviar"autocomplete="off"  type="submit" name="aceptar" id="aceptar" value="Enviar" >
                </div>
            </form>
        </div>
    </section>      
    
    <script src="./script.js"></script>
</body>
</html>