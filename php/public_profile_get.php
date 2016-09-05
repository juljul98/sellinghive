<?php
	require 'connect.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('content-type: application/json; charset=utf-8');
	$userid = $_POST['id'];
	$sql = "SELECT * FROM tbl_publicprofile WHERE userid = '$userid' ";
	$result = mysqli_query($conn,$sql);
    $user_data = mysqli_fetch_array($result);

echo json_encode($user_data);
