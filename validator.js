window.onload = function() {
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        longitudn = x.length;
        if (longitudn > 2) {
            var a = document.forms["myForm"]["fapellido"].value;
            longape = a.length;
                if (longape > 2) {
                            var emailID = document.forms["myForm"]["fmail"].value;
                            atpos = emailID.indexOf("@");
                            dotpos = emailID.lastIndexOf(".");
                            if (atpos < 1 || ( dotpos - atpos < 2 )) {
                                alert("El email no es correcto");
                                alert(emailID);
                                document.forms["myForm"]["fmail"].focus();
                                return false;
                            } else {
                                var edad = document.forms["myForm"]["fedad"].value;
                                longedad = edad.length;
                                    if (longedad > 0) {
                                        var loc = document.forms["myForm"]["fdire"].value;
                                        longdire = loc.length;
                                        if (longdire > 10) {
                                            alert("Gracias por suscribirse!")
                                        } else {alert("La direccion debe ser mayor a 8 letras");
                                        alert(longdire);
                                        document.forms["myForm"]["fdire"].focus() ;
                                        return false;}
                                    } else {alert("El telefono debe ser mayor a 9 numeros");
                                    alert(longtel);
                                    document.forms["myForm"]["fte"].focus() ;
                                    return false;}
                            }
                        
                               
                } else {
                    alert("El apellido debe ser mayor a 2 letras");
                    alert(longape);
                    document.forms["myForm"]["fapellido"].focus() ;
                    return false;
                }
        } 
             else {
          alert("El nombre debe ser mayor a 2 letras");
          alert(longitudn);
          document.forms["myForm"]["fname"].focus() ;
          return false;
        }
    
    }
    
};

function nombre() {
var x = document.forms["myForm"]["fname"].value;
longitudn = x.length;
if (longitudn > 2) {
} else {
    alert("El nombre debe ser mayor a 2 letras");
    alert(longitudn);
    document.forms["myForm"]["fname"].focus() ;
    return false;
}
}

function apellido() {
    var apellido = document.forms["myForm"]["fapellido"].value;
    longitudApe = apellido.length;
    if (longitudn > 2) {
    } else {
        alert("El apellido debe ser mayor a 2 letras");
        alert(longitudApe);
        document.forms["myForm"]["fapellido"].focus() ;
        return false;
    }
    }

    function correo() {
        var emailID = document.forms["myForm"]["fmail"].value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("El email no es correcto");
            alert(emailID);
            document.forms["myForm"]["fmail"].focus();
            return false; }
            else {}
    }

    function edad () {
        var edad = document.forms["myForm"]["fedad"].value;
        longEdad = edad.length;
        if (longEdad > 0)  {
            if (edad < 17) {
                alert ("Debe ser mayor a 18 para registrarse.")
                alert(longEdad);
                document.forms["myForm"]["fapellido"].focus() ;
                return false;
            } else {}
        } else {
            alert("Debe completar la edad");
            alert(longitudApe);
            document.forms["myForm"]["fapellido"].focus() ;
            return false;
        }
    }