function validateForm2() {
    var x = document.forms["myForm"]["fname"].value;
    longitudn = x.length;
    if (longitudn > 2) {
        var apellido = document.forms["myForm"]["fapellido"].value;
        longitudApe = apellido.length;
        if (longitudApe > 2) {
            var emailID = document.forms["myForm"]["fmail"].value;
            atpos = emailID.indexOf("@");
            dotpos = emailID.lastIndexOf(".");
            if (atpos < 1 || ( dotpos - atpos < 2 )) {
                alert("El email no es correcto");
                alert(emailID);
                document.forms["myForm"]["fmail"].focus();
                return false; }
                else {
                    var edad = document.forms["myForm"]["fedad"].value;
                    longEdad = edad.length;
                    if (longEdad > 0)  {
                        if (edad < 17) {
                            alert ("Debe ser mayor a 18 para registrarse.")
                            alert(longEdad);
                            document.forms["myForm"]["fedad"].focus() ;
                            return false;
                        } else {
                                var getSelectedValue = document.querySelector( 'input[name="fsexo"]:checked');   
                                if(getSelectedValue != null) {   
                                var getSelectedValue = document.querySelector( 'input[name="finteres"]:checked');   
                                if(getSelectedValue != null) {   
                                    select = document.getElementById('select');
                                    if (select.value != null) {
                                        return true;
                                    }
                                    else {alert ("Debe seleccionar un país")}
                                }   else {  
                                alert ("Debe aclarar su/sus temas de interés");  
                                }
                            }   else {  
                                 alert ("Debe aclarar el sexo");  
                                } 
                        }
                    } else {
                        alert("Debe completar la edad");
                        alert(edad);
                        document.forms["myForm"]["fedad"].focus() ;
                        return false;
                    }
                }
        } else {
            alert("El apellido debe contener mas de 2 letras");
            alert(longitudApe);
            document.forms["myForm"]["fapellido"].focus() ;
            return false;
        }
    }
    else {
        alert("El nombre debe contener mas de 2 letras");
        alert(longitudn);
        document.forms["myForm"]["fname"].focus() ;
        return false;
    }
    }

window.onload = function() {
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

};
