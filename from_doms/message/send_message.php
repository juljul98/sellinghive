<?php
$conn = mysqli_connect("localhost","root","","jaynardv_01api");

	function generate_json($data){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST');
		header('content-type: application/json; charset=utf-8');
		// echo $_GET['callback'] . '('.json_encode($data).')';
		echo json_encode($data);
	}

	$opt = 0;
	if(isset($_POST['save-draft'])) {
		$opt = 1;
	}
	$errors= array();

	if($_FILES['file']['name'] != "") {
		$file_name 	= date("Y-m-d_H_i_s.").$_FILES['file']['name'];
		$file_size 	= $_FILES['file']['size'];
		$file_tmp 	= $_FILES['file']['tmp_name'];
		$file_type	= $_FILES['file']['type'];
			$file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));

			$expensions= array("jpeg","jpg","png","docx","xlsx","pdf","txt");

			if(in_array($file_ext,$expensions)=== false){
				$errors[]="extension not allowed, please choose a JPEG or PNG file.";
				$data = array('success' => 3); // file is too big
			}

			if($file_size > 97152){
				$errors[]='File size must be excately 2 MB';
				$data = array('success' => 4);// file is too big
			}
		
	}

	

	if(empty($errors)==true) {
		move_uploaded_file($file_tmp,"../uploads/".$file_name);

		$hiddenToId 	= mysqli_real_escape_string($conn, $_POST['hiddenToId']);
		$messageSubject = mysqli_real_escape_string($conn, $_POST['msg-subject']);
		$messageBody	= mysqli_real_escape_string($conn, $_POST['message-body']);
		$fromId = $_POST['fromId'];


		mysqli_query($conn, "INSERT INTO tbl_message(`subject`,`message`,`file`, `isDraft`,`fromID`, `toID`, `messageDate`)VALUES('$messageSubject', '$messageBody', '$file_name', $opt, '$fromId', '$hiddenToId', now())");
		
		if($opt == 0) {
			$data = array('success' => 1); // Send 
		}else if($opt == 1) {
			$data = array('success' => 2); // Save Draft
		}

		
	}

	generate_json($data);
?>