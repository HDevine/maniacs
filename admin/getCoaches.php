<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $coach = $maniacs->GetCoaches();
  $numCoaches = count($coach);

  $jsonStr = json_encode($coach);
  echo $jsonStr;
?>
