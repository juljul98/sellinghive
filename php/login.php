<?php 
	require 'connect.php';
require 'header.php';
		 $email = $_POST['email'];
		 $password = md5($_POST['password']);
		 $sql = "SELECT * FROM tbl_users WHERE email = '$email' and password = '$password' ";
	     $result = mysqli_query($conn,$sql);
	     $user_data = mysqli_fetch_array($result);
	     $count_row = $result->num_rows;
	     if ($count_row == 1 && $user_data['role'] == 'corporate') {
	       session_start();
	       $_SESSION['login'] = true;
	       $_SESSION['id'] = $user_data['id'];
	       $data = array(
	       			'status' => 'Success',
	       			'role' => 'Corporate',
					'key' => $user_data['id']
	       	);

              //  echo $_GET['callback'] . '('.json_encode($data).')';
            echo json_encode($data);
    
	     }
	     else if ($count_row == 1 && $user_data['role'] == 'sales') {
	       session_start();
	       $_SESSION['login'] = true;
	       $_SESSION['id'] = $user_data['id'];
	       $data = array(
	       			'status' => 'Success',
	       			'role' => 'Sales',
					'key' => $user_data['id']
	       	);

                //echo $_GET['callback'] . '('.json_encode($data).')';
 			echo json_encode($data);
	   
	     }

	     else {

	       $data = array(
	       		'status' => 'Error'
	       	);
              // echo $_GET['callback'] . '('.json_encode($data).')';
 			echo json_encode($data);
	     }

?>