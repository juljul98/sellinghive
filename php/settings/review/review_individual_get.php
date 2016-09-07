<?php
	require '../../connect.php';
	require '../../header.php';
	$toid = $_POST['toid'];
	$userid = $_POST['userid'];
	$sql = "SELECT * FROM tbl_review LEFT JOIN tbl_users ON tbl_review.toid = tbl_users.id WHERE `toid` = '$toid' AND tbl_review.fromid = '$userid' ORDER BY tbl_review.created_at DESC";
	$result = mysqli_query($conn, $sql);
	$user_data = mysqli_fetch_array($result);
	echo json_encode(array(
			'single' => $user_data
	));