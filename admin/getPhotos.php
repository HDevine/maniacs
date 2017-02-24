<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $photos = $maniacs->GetPhotos();
  $numPhotos = count($photos);

  $jsonStr = json_encode($photos);
  echo $jsonStr;
?>
