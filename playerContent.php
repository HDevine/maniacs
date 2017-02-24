<?php
include "class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$roster = $maniacs->GetRosterData("basic");
$numPlayers = count($roster);

$content = "";
$content = $content . " <center>\n";
$content = $content . "  <div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Roster</div><hr>\n";
$content = $content . "  <table border=0>\n";
for ($i = 0; $i < $numPlayers; $i++) {
  if ($i % 4 == 0) {
    $content = $content . "  <tr>\n";
  }
  $content = $content . "<td><a href=\"playerProfile.php?id=" . $roster[$i]->id . "\" target=\"_blank\"><img src=\"" . $roster[$i]->profile_pic_path . "\" title=\"" . $roster[$i]->number . " - " . $roster[$i]->firstname . " " . $roster[$i]->lastname . "\" class=\"maniacsImage\"></a></td>\n";
}
$content = $content . "  </table>\n";
$content = $content . " </center>\n";

echo $content;
?>

