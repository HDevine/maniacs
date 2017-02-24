<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $info = array($_POST["name"], $_POST["type"], $_POST["email"], $_POST["phone"], $_POST["image"]);
  $coach = $maniacs->AddCoach($info);

  if ($coach == 0) {
    echo "Error adding new coach; id was 0!";
  }
  else {
    echo "Coach added successfully; id=" . $coach . "!";
  }
?>
