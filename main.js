function contieneDigito(cadena){
    return /\d/.test(cadena);
}
let usuario;
while(true){
    usuario= prompt("Ingrese un nombre de usuario que contenga '@'");
    if(usuario.includes("@")){
        break;
    }else{
        alert("El nombre de usuario debe tener el símbolo '@', vuelve a intentarlo nuevamente");
    }
}

let contraseña;
while(true){
    contraseña= prompt("Ingresa una contraseña que contenga al menos 8 caracteres y al menos un dígito");
    if(contraseña.length>=8 && contieneDigito(contraseña)){
        break;
    }else{
        alert("La contraseña debe tener 8 carácteres y al menos un dígito, vuelve a intentarlo nuevamente")
    }
}
alert("¡Registro exitoso!")


