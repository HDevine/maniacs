<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $return = $maniacs->csvToArrayV1("/var/www/html/maniacs/gc-maniacs.csv", ",", array("player_id","games_played","plate_appearances", "at_bats", "hits", "single", "dbl", "triple", "homerun", "rbi", "runs"), -1);P;
echo "Count: " . count($return) . "\n";

//  for ($i=0; $i < count($return); $i++) {
//    echo "Return count: " . count($return) . " Return[" $i . "]: " . $return[$i] ."\n";
//  }
//  var_dump($return);
?>

