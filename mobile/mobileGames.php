<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $games = $maniacs->GetGames();
  $numGames = count($games);

  date_default_timezone_set('America/New_York');
  $content = "";
  $content = $content . "<div class=\"maniacsCenter\">\n";
  $content = $content . "<hr><div class=\"maniacsWelcome\" id=\"maniacsGamesTitle\">Maniacs 18U - Tournament Schedule</div><br>\n";
  $content = $content . "    <div class=\"maniacsCopyright\">Note: Tournaments listed here will not show individual details, such as final score.  For that informationn, use the GameChanger control located at the bottom of the main page.<hr>\n";
  $content = $content . "    <table border=0>\n";
  $content = $content . "      <tr><th><u>Date</u></th><th><u>Start Time</u></th><th><u>Oppenent</u></th><th><u>Description</></th><th><u>Maniacs Score</u></th><th><u>Opponent Score</u></th><th><u>Game Type</u></th><th><u>Location</u></th>\n";

  for ($i=0; $i < $numGames; $i++) {
    $current = new DateTime($games[$i]->game_date);
    $start = new DateTime($games[$i]->game_time);
    $sDate = $current->format('m/d/Y');
    $sStart = $start->format('h:i:s A');
    $content = $content . "  <tr><td>" . $sDate . "</td><td>" . $sStart . "</td><td>" . $games[$i]->game_opponent . "</td><td>" . $games[$i]->game_desc . "</td><td>" . $games[$i]->maniacs_score . "</td><td>" . $games[$i]->opponent_score ."</td><td>" . $games[$i]->game_type . "</td><td><a href=\"" . $games[$i]->game_map . "\" target=\"_blank\">Map</a></td><td>\n";
  }
  $content = $content . "</table>\n";
  echo $content;
?>
