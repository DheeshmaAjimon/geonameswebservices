<?php

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);  //Enable all PHP errors and warnings

	$executionStartTime = microtime(true);

	
	$url='http://api.geonames.org/oceanJSON?formatted=true&lat=' . $_REQUEST['lat'] . '&lng=' . $_REQUEST['lng'] . '&username=dheeshmaaji&style=full';

	$ch = curl_init();   //create a new cURL resource
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  //false to stop cURL from verifying the peers certificate
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);   //true to return the transfer as a string of the return value of curl_exec() instead of outputting it directly
	curl_setopt($ch, CURLOPT_URL,$url);  // URL to fetch

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);  //decodes json to PHP object

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime);
	$output['data'] = $decode['ocean'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
