<?php
  include "class/ManiacsClass.php";
  $id = $_POST["id"];
  $maniacs = new ManiacsClass();
  $coach = $maniacs->GetCoachData($id);

  $jsonStr = json_encode($coach);
  echo $jsonStr;
?>

