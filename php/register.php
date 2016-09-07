<?php
      require 'connect.php';
require 'header.php';
      $name = $_POST['name'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $role = 'corporate';

      $messages = array();

      $sql = "SELECT * FROM tbl_users WHERE email = '$email' ";
      $result = mysqli_query($conn,$sql);
      $user_data = mysqli_fetch_array($result);
      $count_row = $result->num_rows;
      if ($count_row == 1) { 
            $messages['email'] = 'Email Already Taken';
      }
      if($name == null) {
            $messages['username'] = 'Username Field is Required';
      }
      if ($email == null) {
            $messages['email'] = 'Email field is Required';
      } 
      if ($password == null) {
            $messages['password'] = 'Password field is Required';
      }
      if (strlen($password) < 8) {
            $messages['password'] = 'Must be greater than 8';
      }
      if (empty($messages) == true) {
            $date = date('Y-m-d h:i:s');
            $sql = $conn->prepare("INSERT INTO tbl_users(`name`, `email`, `password`, `role`, `date`)VALUES(?,?,?,?,?)");
            $sql->bind_param('sssss', $name, $email, md5($password), $role, $date);
            $sql->execute();
            $messages['success'] = 1;
            $conn->close();
            $sql->close();  
      }
// echo $_GET['callback'] . '('.json_encode($messages).')';
echo json_encode($messages);

?>