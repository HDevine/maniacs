<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  $data = $maniacs->GetCatchingStats($_GET["id"]);
  $jsonStr = json_encode($data);
  echo $jsonStr;

?>

