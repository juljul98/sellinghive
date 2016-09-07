<?php

    require '../../connect.php';
require '../../header.php';
    $email = $_POST['email'];
    $oldpass = md5($_POST['oldpass']);
    $confirm_oldpass = md5($_POST['confirm_oldpass']);
    $newpass = $_POST['newpass'];
        $newpass_secure = md5($_POST['newpass']);

    $error = array();
    $sql = "SELECT * FROM tbl_users WHERE email = '$email' ";
    $result = mysqli_query($conn,$sql);
    $user_data = mysqli_fetch_array($result);
    $count_row = $result->num_rows;

    if($oldpass != $confirm_oldpass) {
        $error['missmatch'] = 'Password not Match';
    } 
    if ($confirm_oldpass != $user_data['password']) {
        $error['notfound'] = 'Email and Password not Match';
    }
    if ($newpass == null) {
        $error['required'] = 'New password field is Required';
    }
    if(empty($error) == true){
        $sql = "UPDATE tbl_users SET password = '$newpass_secure' WHERE email='$email'";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
        $error['success'] = 'Sucessfully change';
    }
    echo json_encode($error);
  
?>