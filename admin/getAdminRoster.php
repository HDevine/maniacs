<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $roster = $maniacs->GetRosterData("admin");
  $numPlayers = count($roster);

  for ($i = 0; $i < $numPlayers; $i++) {
    $roster[$i]->number = intval($roster[$i]->number);
  }
  $jsonStr = json_encode($roster);
  echo $jsonStr;
?>
