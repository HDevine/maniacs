<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  // Retrieve POST values from main grid
  $id = $_POST['id'];
  $field = $_POST['field'];
  $value = $_POST['value'];

  if ($field == "name")
    $update = "coach_name";
  if ($field == "position")
    $update = "coach_position";
  if ($field == "email")
    $update = "coach_email";
  if ($field == "phone")
    $update = "coach_phone";
  if ($field == "path")
    $update = "coach_pic_path";

  $maniacs->UpdateCoach($id, $update, $value);
?>
