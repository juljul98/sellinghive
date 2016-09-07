<?php
	require '../../connect.php';
require '../../header.php';
	$userid = $_POST['id'];
	$sql = "SELECT * FROM tbl_profile WHERE userid = '$userid' ";
	$result = mysqli_query($conn,$sql);
    $user_data = mysqli_fetch_array($result);

echo json_encode($user_data);
