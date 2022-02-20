<?php

// Takes raw data from the request

//die(phpinfo());
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);


$jsonObj = new stdClass();
$jsonObj->curso = 'UDC9190';
$jsonObj->recurso = 'A1';
$jsonObj->calificacion = $data->score;
$jsonObj->retro = $data->feedback;
$jsonObj->url = "https://www.w3schools.com/html/html_attributes.asp";
$jsonObj->usuario = $data->user;

$newJSON = json_encode($jsonObj);

$url = "http://educ.ucol.mx/api/cursos/alumnos/calificaciones";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Accept: application/json",
   "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Mzk3Njc4MzgsImV4cCI6MTY1NTUzNTgzOCwidXNlckRhdGEiOnsiaWQiOiIxIn19.DoTfc7GEqBsvGWJdx36FZVdwdjDiy_GCF18rvgl-mJo",
   "Content-Type: application/json",
   "Cookie: PHPSESSID=5768enb10orcmtimk223enmna4",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

curl_setopt($curl, CURLOPT_POSTFIELDS, $newJSON);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
//var_dump($resp);


header('Content-type: application/json');
echo json_encode( $resp );


// crear variable calif y mapa de repuestas


// crear funcion de evaluacion y retornar la misma al cliente
?>