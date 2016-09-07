<?php
	require '../../connect.php';
	require '../../header.php';

	$sql = "SELECT * FROM tbl_users WHERE `role` = 'sales'";
	$result = mysqli_query($conn, $sql);
	$user_data = mysqli_fetch_array($result);
	echo json_encode(array(
			'sales' => $user_data
		));