<?php
	require '../../connect.php';
require '../../header.php';
	$userid = $_POST['userid'];
	$sql = "SELECT * FROM tbl_tax WHERE `userid` = '$userid'";
	$result = mysqli_query($conn, $sql);
	$user_data = mysqli_fetch_array($result);
	echo json_encode($user_data);