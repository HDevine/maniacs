<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $id = $_POST["id"];
  $maniacs->DeleteEvent($id);
?>
