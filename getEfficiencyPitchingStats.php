<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();

  $data = $maniacs->GetEfficiencyPitchingStats($_GET["id"]);
  $jsonStr = json_encode($data);
  echo $jsonStr;

?>

