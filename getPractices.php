<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $practices = $maniacs->GetPractices();
  $numPractices = count($practices);

  $jsonStr = json_encode($practices);
  echo $jsonStr;
?>
