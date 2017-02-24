<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $events = $maniacs->GetEvents();
  $numEvents = count($events);

  $jsonStr = json_encode($events);
  echo $jsonStr;
?>
