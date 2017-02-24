<?php
  include "class/ManiacsClass.php";
  $id = $_POST["id"];
  $maniacs = new ManiacsClass();
//  $coach = $maniacs->GetCoachData($id);

  $player = array();
  switch ($id) {
    case 1:
      $player[] = array('player_image' => "images/devine.jpg",'player_name' => "Amber Devine", 'player_jersey' => 2, 'player_positions' => "C, RF", 'player_age' => 16);
      break;
    case 2:
      $player[] = array('player_image' => "images/lusciano.jpg",'player_name' => "Gianni Lusciano", 'player_jersey' => 3, 'player_positions' => "CF", 'player_age' => 15);
      break;
    case 3:
      $player[] = array('player_image' => "images/dottavio.jpg",'player_name' => "Gabriella D'Ottavio", 'player_jersey' => 6, 'player_positions' => "1B", 'player_age' => 14);
      break;
    case 4:
      $player[] = array('player_image' => "images/giannascoli.jpg",'player_name' => "Alyssa Giannascoli", 'player_jersey' => 7, 'player_positions' => "1B, 3B, RF", 'player_age' => 16);
      break;
    case 5:
      $player[] = array('player_image' => "images/riggs.jpg",'player_name' => "Kaitlyn Riggs", 'player_jersey' => 8, 'player_positions' => "C, SS", 'player_age' => 14);
      break;
    case 6:
      $player[] = array('player_image' => "images/pennino.jpg",'player_name' => "Bailey Pennino", 'player_jersey' => 13, 'player_positions' => "P", 'player_age' => 17);
      break;
    case 7:
      $player[] = array('player_image' => "images/williamns.jpg",'player_name' => "Taylor Williams", 'player_jersey' => 15, 'player_positions' => "SS, 2B", 'player_age' => 15);
      break;
    case 8:
      $player[] = array('player_image' => "images/healy.jpg",'player_name' => "Maeve Healy", 'player_jersey' => 19, 'player_positions' => "LF, 3B, P", 'player_age' => 17);
      break;
    case 9:
      $player[] = array('player_image' => "images/ortiz.jpg",'player_name' => "Samantha Ortiz", 'player_jersey' => 22, 'player_positions' => "RF", 'player_age' => 15);
      break;
    case 10:
      $player[] = array('player_image' => "images/manera.jpg",'player_name' => "Casey Manera", 'player_jersey' => 24, 'player_positions' => "C, 1B", 'player_age' => 18);
      break;
    case 11:
      $player[] = array('player_image' => "images/preziosi.jpg",'player_name' => "Alexa Preziosi", 'player_jersey' => 28, 'player_positions' => "2B, P", 'player_age' => 16);
      break;
    case 12:
      $player[] = array('player_image' => "images/scozzafava.jpg",'player_name' => "Sydnee Scozzafava", 'player_jersey' => 33, 'player_positions' => "3B, P", 'player_age' => 17);
      break;
  }
  $jsonStr = json_encode($player);
  echo $jsonStr;
?>

