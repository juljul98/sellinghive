<?php 
	$conn = mysqli_connect("localhost","jaynardv_01api","1z2x3c4v5b6n7m","jaynardv_01api");

	function generate_json($data){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST');
		header('content-type: application/json; charset=utf-8');
		echo $_GET['callback'] . '('.json_encode($data).')';
		// echo json_encode($data);
	}

	$query = mysqli_query($conn, "SELECT * FROM tbl_users");

	$result = array();
	while($row = mysqli_fetch_array($query)) {
		$result[] = $row['email']."#";
	}

	$data = array(
		'result' => $result,	
		'success' => 1
	);

	generate_json($data);
	
	// echo $_GET['callback'] . '('.json_encode($data).')';

 ?>