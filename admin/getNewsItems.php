<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $news = $maniacs->GetNewsItems();
  $numItems = count($news);

  $jsonStr = json_encode($news);
  echo $jsonStr;
?>
