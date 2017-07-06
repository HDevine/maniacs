<?php
include "class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$roster = $maniacs->GetRosterData("basic");
$numPlayers = count($roster);
//var_dump($roster[0]);

$content = "";
$content = $content . " <center>\n";
$content = $content . "  <div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Roster</div><hr>\n";
$content = $content . "  <table border=0>\n";
for ($i = 0; $i < $numPlayers; $i++) {
  $fromArray = array("images", "jpg");
  $toArray = array("pdf", "pdf");
  $profile_path = str_replace($fromArray, $toArray, $roster[$i]->profile_pic_path);
  if ($i % 4 == 0) {
    $content = $content . "  <tr>\n";
  }
//  $content = $content . "<td><a href=\"playerProfile.php?id=" . $roster[$i]->id . "\" target=\"_blank\"><img src=\"" . $roster[$i]->profile_pic_path . "\" title=\"" . $roster[$i]->number . " - " . $roster[$i]->firstname . " " . $roster[$i]->lastname . "\" class=\"maniacsImage\"></a></td>\n";
  $content = $content . "<td>\n";
  $content = $content . "    <table border=0>\n";
  $content = $content . "      <tr><td><img src=\"" . $roster[$i]->profile_pic_path . "\" title=\"" . $roster[$i]->number . " - " . $roster[$i]->firstname . " " . $roster[$i]->lastname . "\" class=\"maniacsImage\"></td>\n";
  $content = $content . "      <tr><td align=center><a href=\"" . $profile_path . "\" target=\"_blank\"><img src=\"images/profile.jpg\" title=\"View " . $roster[$i]->firstname . "'s Player Profile\"></a>\n";
  $content = $content . "              <img src=\"images/YouTube_Play.png\" title=\"View " . $roster[$i]->firstname . "'s Skills Video\"></td>\n";
  $content = $content . "    </table>\n";
  $content = $content . "</td>\n";
}
$content = $content . "  </table>\n";
$content = $content . " </center>\n";

echo $content;
?>

