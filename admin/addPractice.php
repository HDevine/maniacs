<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $map = "http://maps.google.com/?q=" . $_POST["address"] . "," . $_POST["city"] . "," . $_POST["state"] . " " . $_POST["zip"] . "&t=h&z=20";
  $info = array($_POST["date"], $_POST["start"], $_POST["end"], $_POST["address"], $_POST["city"], $_POST["state"], $_POST["zip"], $_POST["desc"], $map);
  $practice = $maniacs->AddPractice($info);

  if ($practice == 0) {
    echo "Error adding practice; id was 0!";
  }
  else {
    echo "Practice added successfully; id=" . $practice . "!";
  }
?>
