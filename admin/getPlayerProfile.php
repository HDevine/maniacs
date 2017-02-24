<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $player = $maniacs->GetRosterProfile($_POST["id"]);

  $dob = new DateTime($player[0]->dob);
  $string = $dob->format('Y-m-d');
  $player[0]->dob = $string;

  $jsonStr = json_encode($player);
  echo $jsonStr;
?>
