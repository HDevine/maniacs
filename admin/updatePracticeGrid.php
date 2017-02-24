<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  // Retrieve POST values from main grid
  $id = $_POST['id'];
  $field = $_POST['field'];
  $value = $_POST['value'];

  if ($field == "date")
    $update = "practice_date";
  if ($field == "desc")
    $update = "practice_desc";
  if ($field == "start")
    $update = "practice_start";
  if ($field == "end")
    $update = "practice_end";
  if ($field == "address")
    $update = "practice_address";
  if ($field == "city")
    $update = "practice_city";
  if ($field == "state")
    $update = "practice_state";
  if ($field == "zip")
    $update = "practice_zip";
//echo "ID: " . $id . "; Field: " . $update . "; Value: ". $value . "\n";
  $maniacs->UpdatePractice($id, $update, $value);
?>
