<?php
include "../class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$coach = $maniacs->GetCoaches();
$numCoaches = count($coach);

$content = "";
$content = $content . " <center>\n";
$content = $content . "  <div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Coaching Staff</div><hr>\n";
$content = $content . "  <table border=0>\n";
for ($i = 0; $i < $numCoaches; $i++) {
  $content = $content . "<td><a href=\"mobileCoachProfile.php?id=" . $coach[$i]->id . "\" target=\"_blank\"><img src=\"" . $coach[$i]->coach_pic_path . "\" title=\"" . $coach[$i]->coach_name . "\" class=\"maniacsMobileImage\"></a></td>\n";
}
$content = $content . "  </table>\n";
$content = $content . " </center>\n";

echo $content;
?>
