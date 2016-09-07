<?php
	require '../../connect.php';
require '../../header.php';
	$userid = $_POST['userid']; 
	$toid = $_POST['toid']; 
	$reviewrating = $_POST['reviewrating']; 
	$reviewtext = $_POST['reviewtext']; 
	$date = date('Y-m-d h:i:s');
	$sql = $conn->prepare("INSERT INTO tbl_review(`fromid`,`toid`,`reviewrating`,`reviewtext`,`created_at`)VALUES(?,?,?,?,?)");
	$sql->bind_param('sssss', $userid, $toid, $reviewrating, $reviewtext, $date);
	$sql->execute();
	echo json_encode(
		array('success' => 1)
		);
	$sql->close();
	$conn->close();
