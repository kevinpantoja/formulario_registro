<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nombre = trim(strtolower($_POST['nombre'])); //trim limpia de espacios en blanco izq y der
    $apaterno = trim(strtolower($_POST['apaterno']));
    $amaterno = trim(strtolower($_POST['amaterno']));
    $diaNac = $_POST['diaNac'];
    $mesNac = $_POST['mesNac'];
    $anioNac = $_POST['anioNac'];
    $genero = $_POST['genero'];
    $direccion = trim(strtolower($_POST['direccion']));
    $telefono = trim($_POST['telefono']);
    $email = trim(strtolower($_POST['email']));

    $deporte = isset($_POST['deporte'])?$_POST['deporte']:"";
    $cine = isset($_POST['cine'])?$_POST['cine']:"";
    $lectura = isset($_POST['lectura'])?$_POST['lectura']:"";

    ?>
    USTED INGRESO:
    <br>
    1. Nombres y Apellidos: <?php echo ucwords($nombre)." ".ucwords($apaterno)." ".ucwords($amaterno);?>
    <br>
    <?php
        switch($mesNac)
        {
            case 1: $mesLetra = "enero"; break;	
            case 2: $mesLetra = "febrero"; break;	
            case 3: $mesLetra = "marzo"; break;	
            case 4: $mesLetra = "abril"; break;	
            case 5: $mesLetra = "mayo"; break;	
            case 6: $mesLetra = "junio"; break;	
            case 7: $mesLetra = "julio"; break;	
            case 8: $mesLetra = "agosto"; break;	
            case 9: $mesLetra = "septiembre"; break;	
            case 10: $mesLetra = "octubre"; break;	
            case 11: $mesLetra = "noviembre"; break;	
            default: $mesLetra = "diciembre";	
        }
        if($diaNac < 10)
            $cero = "0";
        else
            $cero = "";
    ?>
    2. Fecha de Nacimiento: <?php print $cero.$diaNac." de ".$mesLetra." de ".$anioNac; ?>
    <br>
    <?php
        //calculando la edad
        $anioActual = date("Y");
        $mesActual = date("n");
        $diaActual = date("j");

        if($mesActual > $mesNac)
            $edad = $anioActual - $anioNac;
        else
            if($mesActual == $mesNac)
            
                if($diaActual >= $diaNac)
                    $edad = $anioActual - $anioNac;
                else
                    $edad = $anioActual - $anioNac - 1;		
            else	
                $edad = $anioActual - $anioNac - 1;	
        //utf8_decode("años") para el uso de tildes y Ñ
        print "(edad: ".$edad." años)<br>";
        print "(genero: ".$genero.")";
    ?>
    <br>
    3. Direccion: <?php print strtoupper($direccion); ?>
    <br>
    4. Telefono: <?php print $telefono; ?>
    <br>
    5. Email: <?php print $email; ?>
    <br>
    6. Preferencias: 
    <br>
    <ul>
        <?php 
            if($deporte != "")
                echo "<li>".$deporte."</li>";
            if($cine != "")
                echo "<li>".$cine."</li>";
            if($lectura != "")
                echo "<li>".$lectura."</li>";
        ?>       
    </ul> 
     
</body>
</html>
