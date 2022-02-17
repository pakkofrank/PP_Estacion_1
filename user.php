<?php

 require_once('config.php');
 if($saml->isAuthenticated()) //Si el usuario ya esta autenticado en saml
	{ 
		header("Content-Type: text/javascript");
		echo "var uCorreo = '" . $atributos["uCorreo"][0] . "';";
    } 
	else 
	 header("Location: ./privada/login.php");
?>