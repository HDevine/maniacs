<?php
  include "class/ManiacsClass.php";
  $id = $_GET["id"];
  $maniacs = new ManiacsClass();
  $coach = $maniacs->GetCoachData($id);

  $content = "";
  $content = $content . "<html>\n";
  $content = $content . "<head><title>Maniacs 18U - Coach Profile</title>\n";
  $content = $content . "<link rel=\"stylesheet\" href=\"css/maniacs.css\">\n";
  $content = $content . "</head>\n";
  $content = $content . "<body class=\"maniacsProfilePage\">\n";
  $content = $content . "<div class=\"maniacsCenter\">\n";
  $content = $content . "  <div class=\"maniacsWelcome\">Maniacs 18U - Coach Profile</div><hr>\n";
  $content = $content . "  <img src=\"" . $coach[0]->coach_pic_path . "\" height=\"200\" width=\"200\"><br>\n";
  $content = $content . "    <div class=\"maniacsProfile\">\n";
  $content = $content . "      <div class=\"maniacsTable\">\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfileCellHeading\">Name:</div><div class=\"maniacsCell\">" . $coach[0]->coach_name . "</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfileCellHeading\">Phone:</div><div class=\"maniacsCell\">" . $coach[0]->coach_phone . "</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "        <div class=\"maniacsRow\">\n";
  $content = $content . "          <div class=\"maniacsProfileCellHeading\">Email:</div><div class=\"maniacsCell\">" . $coach[0]->coach_email . "</div>\n";
  $content = $content . "        </div>\n";
  $content = $content . "      </div>\n";
  $content = $content . "    </div>\n";
  $content = $content . "</div>\n";
  $content = $content . "</body>\n";
  $content = $content . "</html>\n";

  echo $content;
?>

