<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  // Retrieve POST values from main grid
  $id = $_POST['id'];
  $field = $_POST['field'];
  $value = $_POST['value'];

  if ($field == "date")
    $update = "news_date";
  if ($field == "desc")
    $update = "news_desc";
  if ($field == "data")
    $update = "news_data";
  if ($field == "path")
    $update = "news_image";

  $maniacs->UpdateNews($id, $update, $value);
?>
