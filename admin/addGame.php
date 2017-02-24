<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $map = "http://maps.google.com/?q=" . $_POST["address"] . "," . $_POST["city"] . "," . $_POST["state"] . " " . $_POST["zip"] . "&t=h&z=20";
  $info = array($_POST["date"], $_POST["time"], $_POST["type"], $_POST["opponent"], $_POST["address"], $_POST["city"], $_POST["state"], $_POST["zip"], $map);
  $game = $maniacs->AddGame($info);

  if ($game == 0) {
    echo "Error adding game; id was 0!";
  }
  else {
    echo "Game added successfully; id=" . $game . "!";
  }
?>
