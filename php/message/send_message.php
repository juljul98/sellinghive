<?php
$conn = mysqli_connect("localhost","root","","jaynardv_01api");

	if(isset($_FILES['file'])){
		$errors= array();
		$file_name 	= date("Y-m-d_H_i_s.").$_FILES['file']['name'];
		$file_size 	= $_FILES['file']['size'];
		$file_tmp 	= $_FILES['file']['tmp_name'];
		$file_type	= $_FILES['file']['type'];
		$file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));

		$expensions= array("jpeg","jpg","png","docx","xlsx","pdf","txt");

		if(in_array($file_ext,$expensions)=== false){
			$errors[]="extension not allowed, please choose a JPEG or PNG file.";
		}

		if($file_size > 2097152){
			$errors[]='File size must be excately 2 MB';
		}

		if(empty($errors)==true){
			move_uploaded_file($file_tmp,"../uploads/".$file_name);

			$hiddenToId 	= mysqli_real_escape_string($conn, $_POST['hiddenToId']);
			$messageSubject = mysqli_real_escape_string($conn, $_POST['msg-subject']);
			$messageBody	= mysqli_real_escape_string($conn, $_POST['message-body']);
			$formID = $_POST['formId'];


			mysqli_query($conn, "INSERT INTO tbl_message(`subject`,`message`,`file`,`fromID`, `toID`, `messageDate`)VALUES('$messageSubject', '$messageBody', '$file_name', '$formID', '$hiddenToId', now())");
		}else{
			print_r($errors);
		}
	}
?>