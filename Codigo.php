<?php
 require_once('config.php');
 if($saml->isAuthenticated()) //Si el usuario ya esta autenticado en saml
	{ 
		$atributos= $saml->getAttributes(); //Obtener sus atributos
    } 
	else 
	 header("Location: ./privada/login.php");
?>
