<?php
	require '../../connect.php';
	require '../../header.php';
	$userid = $_POST['userid'];
	$sql1 = "SELECT *, tbl_users.id as eid FROM tbl_users LEFT OUTER JOIN tbl_review ON tbl_users.id = tbl_review.toid AND tbl_review.created_at = (SELECT MAX(t2.created_at) FROM tbl_review t2 WHERE t2.toid = tbl_review.toid) WHERE tbl_users.role = 'sales'";
	$result1 = $conn->query($sql1);
    for ($set1 = array (); $row1 = $result1->fetch_assoc(); $set1[] = $row1);

 //    $sql2 = "SELECT t1.*,tu.* FROM tbl_review t1 INNER JOIN tbl_users as tu on tu.id = t1.toid WHERE t1.created_at = (SELECT MAX(t2.created_at) FROM tbl_review t2 WHERE t2.toid = t1.toid) WHERE t1.role = 'sales'";
	// $result2 = $conn->query($sql2);
 //    for ($set2 = array (); $row2 = $result2->fetch_assoc(); $set2[] = $row2);

	echo json_encode(array(
			'sales' => $set1
			// 'saleswithreview' => $set2
	));