<?php
	require '../../connect.php';
	$userid = $_POST['userid'];
	$bankname = $_POST['bankname'];
	$routingnumber = $_POST['routingnumber'];
	$accountnumber = $_POST['accountnumber'];
	$paypalusername = $_POST['paypalusername'];
	$paypalpassword = $_POST['paypalpassword'];
	$date = date('Y:h:s');

	$sql = "SELECT * FROM tbl_bank WHERE userid = '$userid' ";
    $result = mysqli_query($conn,$sql);
    $count_row = $result->num_rows;

    if($count_row == 0) {
		$sql = $conn->prepare("INSERT INTO tbl_bank(`userid`, `bankname`, `routingnumber`, `accountnumber`, `paypalusername`, `paypalpassword`, `date`)VALUES(?,?,?,?,?,?,?)");
		$sql->bind_param('sssssss', $userid, $bankname, $routingnumber, $accountnumber, $paypalusername, $paypalpassword, $date);
		$sql->execute();
		echo json_encode(array('success' => 'Successfully Saved'));
		$sql->close();
		$conn->close();
    } else if($count_row == 1) {
    	$sql = "UPDATE tbl_bank SET
    	`bankname` = '$bankname',
		`routingnumber` = '$routingnumber',
		`accountnumber` = '$accountnumber',
		`paypalusername` = '$paypalusername',
		`paypalpassword` = '$paypalpassword'
    	WHERE `userid` = '$userid'";
    	mysqli_query($conn, $sql);
    	mysqli_close($conn);
    	echo json_encode(array('success' => 'Successfully Saved'));
    }