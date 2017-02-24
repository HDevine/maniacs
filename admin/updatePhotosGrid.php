<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  // Retrieve POST values from main grid
  $id = $_POST['id'];
  $field = $_POST['field'];
  $value = $_POST['value'];

  if ($field == "path")
    $update = "photo_path";
  if ($field == "url")
    $update = "photo_url";

  $maniacs->UpdatePhoto($id, $update, $value);
?>
