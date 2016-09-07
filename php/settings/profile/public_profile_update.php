<?php 
  require '../../connect.php';
require '../../header.php';
  $userid = $_POST['id'];
  $corporate_name = $_POST['corporate-name'];
    $url = $_POST['url'];
    $primary_contact = $_POST['primary-contact'];
    $phone_number = $_POST['phone-number'];
    $about = $_POST['about'];
    $date = date('Y-m-d h:i:s');
    global $logo;
    global $photo;
    $reviewcount = 1;
    $taxid = 1;
    $message1 = array();
    $message2 = array();
    $message = array();


    if ($_FILES['pic'] == null) {
        $photo = $_POST['oldpic'];
    }
    if ($_FILES['logo'] == null) {
        $logo = $_POST['oldlogo'];
    }

      $file02_name = $_FILES['pic']['name'];
      $file02_size =$_FILES['pic']['size'];
      $file02_tmp =$_FILES['pic']['tmp_name'];
      $file02_type=$_FILES['pic']['type'];
      $file02_ext=strtolower(end(explode('.',$_FILES['pic']['name'])));
      $expensions= array("jpeg","jpg","png");
      if(in_array($file02_ext,$expensions)=== false){
         $message1['extension2']="extension not allowed, please choose a JPEG or PNG file.";
      }
      if($file02_size > 2097152){
         $message1['size2']='File size must be excately 2 MB';
      }
      if(empty($message1)==true){
        $rootpath = $_SERVER['DOCUMENT_ROOT'];
        $new_root = str_replace("\'", "", $rootpath);
        $file02name = file_name(20);
        $new_path =  $new_root .'/php/uploads/'. $file02name . "." . $file02_ext;
        move_uploaded_file($file02_tmp, $new_path);
        $photo = $new_path;
        $message1['success'] = 'Save Picture';
      }
      $file01_name = $_FILES['logo']['name'];
      $file01_size =$_FILES['logo']['size'];
      $file01_tmp =$_FILES['logo']['tmp_name'];
      $file01_type=$_FILES['logo']['type'];
      $file01_ext=strtolower(end(explode('.',$_FILES['logo']['name'])));
      $expensions= array("jpeg","jpg","png");
      if(in_array($file01_ext,$expensions)=== false){
         $message2['extension1']="extension not allowed, please choose a JPEG or PNG file.";
      }
      if($file01_size > 2097152){
         $message2['size1']='File size must be excately 2 MB';
      }
      if(empty($message2)==true){
        $rootpath = $_SERVER['DOCUMENT_ROOT'];
        $new_root = str_replace("\'", "", $rootpath);
        $file01name = file_name(20);
        $new_path =  $new_root .'/php/uploads/'. $file01name . "." . $file01_ext;
        move_uploaded_file($file01_tmp, $new_path);
        $logo = $new_path;
        $message2['success'] = 'Save Picture';
      }

    $sql = "SELECT * FROM tbl_profile WHERE userid = '$userid' ";
    $result = mysqli_query($conn,$sql);
    $user_data = mysqli_fetch_array($result);
    $count_row = $result->num_rows;
    if($count_row == 0) {
        echo json_encode($userid);
            $sql = $conn->prepare("INSERT INTO tbl_profile(`companyname`, `url`, `userid`, `logo`, `photo`, `about`, `reviewcount`, `taxid`, `date`)VALUES(?,?,?,?,?,?,?,?,?)");
            $sql->bind_param('sssssssss', $corporate_name, $url, $userid, $logo, $photo, $about, $reviewcount, $taxid, $date);
            $sql->execute();
            $sql->close();
            $sql2 = $conn->prepare("INSERT INTO tbl_tax(`companyname`, `userid`, `date`)VALUES(?,?,?)");
            $sql2->bind_param('sss', $corporate_name, $userid, $date);
            $sql2->execute();
            $sql2->close();

             $message['success'] = 1;
             $conn->close(); 
    } else if ($count_row == 1) {
         $sql = "UPDATE tbl_profile SET 
         `companyname` = '$corporate_name',
         `url` = '$url',
         `logo` = '$logo',
         `photo` = '$photo',
         `about` = '$about',
         `reviewcount` = '$reviewcount',
         `taxid` = '$taxid'
          WHERE userid='$userid'";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
        $message['success'] = 1;
    }
echo json_encode($message); 
echo json_encode($message1); 
echo json_encode($message2); 

function file_name($count) {
    $key = '';
    $keys = array_merge(range(0, 9), range('a', 'z'));
    for ($i = 0; $i < $count; $i++) {
        $key .= $keys[array_rand($keys)];
    }
    return $key;
}