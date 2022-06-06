window.onload = function() {
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        longitudn = x.length;
        if (longitudn > 2) {
            var a = document.forms["myForm"]["fapellido"].value;
            longape = a.length;
                if (longape > 2) {
                        var c = document.forms["myForm"]["fpasswd"].value;
                        longcon = c.length;
                        if (longcon > 7){
                            var emailID = document.forms["myForm"]["fmail"].value;
                            atpos = emailID.indexOf("@");
                            dotpos = emailID.lastIndexOf(".");
                            if (atpos < 1 || ( dotpos - atpos < 2 )) {
                                alert("El email no es correcto");
                                alert(emailID);
                                document.forms["myForm"]["fmail"].focus() ;
                                return false;
                            } else {
                                var t = document.forms["myForm"]["fte"].value;
                                longtel = t.length;
                                    if (longtel > 09) {
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
                        }
                         else {
                        alert("La contraseña debe ser mayor a 7 letras");
                        alert(longcon);
                        document.forms["myForm"]["fpasswd"].focus() ;
                        return false;
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