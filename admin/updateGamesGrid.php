<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  // Retrieve POST values from main grid
  $id = $_POST['id'];
  $field = $_POST['field'];
  $value = $_POST['value'];

  if ($field == "date")
    $update = "game_date";
  if ($field == "time")
    $update = "game_start";
  if ($field == "type")
    $update = "game_type";
  if ($field == "opponent")
    $update = "game_opponent";
  if ($field == "address")
    $update = "game_address";
  if ($field == "city")
    $update = "game_city";
  if ($field == "state")
    $update = "game_state";
  if ($field == "zip")
    $update = "game_zip";
  if ($field == "oppscore")
    $update = "opponent_score";
  if ($field == "score")
    $update = "maniacs_score";

  $maniacs->UpdateGame($id, $update, $value);
?>
