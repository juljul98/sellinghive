<?php
	require '../../connect.php';
	$userid = $_POST['userid'];
	$sql = "SELECT * FROM tbl_review WHERE `fromid` = '$userid'";
	$result = mysqli_query($conn, $sql);
	$user_data = mysqli_fetch_array($result);
	echo json_encode($user_data);