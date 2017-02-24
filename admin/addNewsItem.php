<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $date = $_POST["date"];
  $desc = $_POST["desc"];
  $data = $_POST["data"];
  $path = $_POST["image"];

  $news = $maniacs->AddNewsItem($date, $desc, $data, $path);

  if ($news == 0) {
    echo "Error adding news item; id was 0!";
  }
  else {
    echo "News item added successfully; id=" . $news . "!";
  }
?>
