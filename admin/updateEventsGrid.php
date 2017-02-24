<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  // Retrieve POST values from main grid
  $id = $_POST['id'];
  $field = $_POST['field'];
  $value = $_POST['value'];

  if ($field == "date")
    $update = "event_date";
  if ($field == "desc")
    $update = "event_desc";
  if ($field == "data")
    $update = "event_data";
  if ($field == "start")
    $update = "event_start";
  if ($field == "end")
    $update = "event_end";
  if ($field == "address")
    $update = "event_address";
  if ($field == "city")
    $update = "event_city";
  if ($field == "state")
    $update = "event_state";
  if ($field == "zip")
    $update = "event_zip";

  $maniacs->UpdateEvent($id, $update, $value);
?>
