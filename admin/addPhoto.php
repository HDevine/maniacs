<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $info = array($_POST["path"], $_POST["url"], $_POST["desc"]);
  $photo = $maniacs->AddPhoto($info);

  if ($photo == 0) {
    echo "Error adding photo; id was 0!";
  }
  else {
    echo "Photo added successfully; id=" . $photo . "!";
  }
?>
