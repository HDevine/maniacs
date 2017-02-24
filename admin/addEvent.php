<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $map = "http://maps.google.com/?q=" . $_POST["address"] . "," . $_POST["city"] . "," . $_POST["state"] . " " . $_POST["zip"] . "&t=h&z=20";
  $info = array($_POST["date"], $_POST["start"], $_POST["end"], $_POST["address"], $_POST["city"], $_POST["state"], $_POST["zip"], $_POST["desc"], $_POST["data"], $map);
  $event = $maniacs->AddEvent($info);

  if ($event == 0) {
    echo "Error adding event item; id was 0!";
  }
  else {
    echo "Event added successfully; id=" . $event . "!";
  }
?>
