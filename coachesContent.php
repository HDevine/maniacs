<?php
include "class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$coach = $maniacs->GetCoaches();
$numCoaches = count($coach);

$content = "";
$content = $content . " <center>\n";
$content = $content . "  <div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Coaching Staff</div><hr>\n";
$content = $content . "  <table border=0>\n";
for ($i = 0; $i < $numCoaches; $i++) {
  $content = $content . "<td><a href=\"coachProfile.php?id=" . $coach[$i]->id . "\" target=\"_blank\"><img src=\"" . $coach[$i]->coach_pic_path . "\" title=\"" . $coach[$i]->coach_name . "\" class=\"maniacsImage\"></a></td>\n";
}
$content = $content . "  </table>\n";
$content = $content . " </center>\n";

echo $content;

/*
  // Version 4
  $content = "";
  $content = $content . "<div class=\"maniacsCenter\">\n";
  $content = $content . "  <div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Coaching Staff</div><hr>\n";
  $content = $content . "  <div data-dojo-type=\"dijit/layout/BorderContainer\" data-dojo-id=\"cpacjBC\" data-dojo-props=\"style:'height:90%;width:100%;'\">\n";
  $content = $content . "    <div data-dojo-type=\"dijit/layout/ContentPane\" data-dojo-props=\"region:'top',splitter:false\"\" style=\"background-color:#008080;\">\n";
  $content = $content . "      <center><div id=\"coachGallery\" data-dojo-type=\"dojox/image/ThumbnailPicker\" data-dojo-props=\"isHorizontal: true, useHyperlink: false\"></div></center>\n";
  $content = $content . "    </div>\n";
  $content = $content . "    <div data-dojo-type=\"dijit/layout/ContentPane\" data-dojo-props=\"region:'center',splitter:false\" style=\"background-color:#008080;\"\">\n";
  $content = $content . "      <div class=\"maniacsTable\">\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div id=\"coachProfileImage\"</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfile\" id=\"coachProfileName\"</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfile\" id=\"coachProfileType\"</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfile\" id=\"coachProfilePhone\"</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfile\" id=\"coachProfileEmail\"</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "      </div>\n";
  $content = $content . "    </div>\n";
  $content = $content . "  </div>\n";
  $content = $content . "</div>\n";
*/
// Version 3
//  $content = $content . "<div class=\"maniacsCenter\">\n";
//  $content = $content . "  <div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Coaching Staff</div><br><hr>\n";
//  $content = $content . "  <center><div id=\"coachGallery\" data-dojo-type=\"dojox/image/SlideShow\" data-dojo-props=\"autoStart: true\"></center>\n";
//  $content = $content . "</div>\n";

// Version 2
//  $content = $content . "<div class=\"maniacsCenter\">\n";
//  $content = $content . "<div class=\"maniacsWelcome\">2016/2017 South Jersey Maniacs 18U Coaching Staff</div><br><hr>\n";
//  $content = $content . "<div id=\"gallery1\" data-dojo-type=\"dojox/image/Gallery\">\n";
//  $content = $content . "<br><div id=\"coachInfo\"></div>\n";
//  $content = $content . "</div>\n";

// Version 1
//$content = $content . "<center><h1><b><u>2016/2017 South Jersey Maniacs 18U Coaching Staff</u></b></h1><br><hr>\n";
//$content = $content . "<table border=0>\n";
//$content = $content . "<tr>\n";
//$content = $content . "<td>Chris Giannascoli</td><td>Head Coach</td><td>Email: chrisgian12@gmail.com</td><td><img src=\"images/coachchris.jpg\" height=\"100\" width=\"100\">\n";
//$content = $content . "<tr>\n";
//$content = $content . "<td>Dave Williams</td><td>Assistant Coach</td><td>Email: dwilliams111373@verizon.net</td><td><img src=\"images/coachwilliams.jpg\" height=\"100\" width=\"100\">\n";
//$content = $content . "</table></center>\n";
//echo $content;
?>

