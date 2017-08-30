<?php
include "../class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$photos = $maniacs->GetPhotos();
$numPhotos = count($photos);

$content = "";
$content = $content . "<div class=\"maniacsCenter\">\n";
$content = $content . "  <div class=\"maniacsWelcome\">South Jersey Maniacs 18U - Team Photos</div><br><hr>\n";
$content = $content . "  <div class=\"maniacsCopyright\">Photos are hosted on Smugmug.com; use <i>maniacs</i> if asked for a password.</div>\n";
$content = $content . "<table border=0>\n";
$content = $content . "<tr>\n";
for ($i = 0; $i < $numPhotos; $i++) {
  if ($i % 2 == 0) {
    $content = $content . "<tr>\n";
  }
  $content = $content . "  <td>\n";
  $content = $content . "      <table border=0>\n";
  $content = $content . "        <tr><td><a href=\"" . $photos[$i]->photo_url . "\" target=\"_blank\"><img src=\"" . $photos[$i]->photo_path . "\" class=\"maniacsMobileImage\"></a></td>\n";
  $content = $content . "        <tr><td class=\"maniacsTeamPhotos\">" . $photos[$i]->photo_desc . "</td>\n";
  $content = $content . "      </table>\n";
  $content = $content . "  </td>\n";
}
$content = $content . "</table>\n";
$content = $content . "</div>\n";

echo $content;
?>

