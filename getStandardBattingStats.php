<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  $data = $maniacs->GetStandardBattingStats($_GET["id"]);
  $jsonStr = json_encode($data);
  echo $jsonStr;

?>

