<?php
	require '../../connect.php';
	require '../../header.php';
	$userid = $_POST['userid'];
	$sql = "SELECT * FROM tbl_users WHERE `role` = 'sales'";
	$result = $conn->query($sql);
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
	echo json_encode(array(
			'sales' => $set
		));