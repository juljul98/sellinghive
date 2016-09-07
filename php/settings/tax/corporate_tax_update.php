<?php
	require '../../connect.php';
    require '../../header.php';
    $userid = $_POST['userid'];
    $ein = $_POST['ein'];
    $address = $_POST['address'];
    $entity = $_POST['entity'];
    $date = date('Y-m-d h:i:s');

    $sql = "SELECT * FROM tbl_tax WHERE userid = '$userid' ";
    $result = mysqli_query($conn,$sql);
    $user_data = mysqli_fetch_array($result);
    $count_row = $result->num_rows;

    if($count_row == 0) {
		$sql = $conn->prepare("INSERT INTO tbl_tax(`userid`,`ein`,`address`,`entity`,`date`)VALUES(?,?,?,?,?)");
		$sql->bind_param('sssss', $userid, $ein, $address, $entity, $date);
		$sql->execute();
		echo json_encode(array(
			'success' => 'Successfully Saved'
			));
		$sql->close();
		$conn->close();
    } else if($count_row == 1) {
    	$sql = "UPDATE tbl_tax SET 
            `ein` = '$ein',
            `address` = '$address',
            `entity` = '$entity'
            WHERE `userid` = '$userid'";
            mysqli_query($conn, $sql);
            mysqli_close($conn);
        echo json_encode(array(
            'success' => 'Successfully Saved'
        ));
    }