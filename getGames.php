<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $games = $maniacs->GetGames();
  $numGames = count($games);

  $jsonStr = json_encode($games);
  echo $jsonStr;
?>
