<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $practices = $maniacs->GetPractices();
  $numPractices = count($practices);

  date_default_timezone_set('America/New_York');
  $content = "";
  $content = $content . "<div class=\"maniacsCenter\">\n";
  $content = $content . "<hr><div class=\"maniacsWelcome\" id=\"maniacsPracticeTitle\">Maniacs 18U - Practice Schedule</div><br>\n";
  $content = $content . "<table border=0>\n";
  $content = $content . "  <tr><th><u>Date</u></th><th><u>Start Time</u></th><th><u>End Time</u></th><th><u>Description</u></th><th><u>Location</u></th>\n";
//  $content = $content . "<ul>\n";

  for ($i=0; $i < $numPractices; $i++) {
    $current = new DateTime($practices[$i]->practice_date);
    $start = new DateTime($practices[$i]->practice_start);
    $end = new DateTime($practices[$i]->practice_end);
    $sDate = $current->format('m/d/Y');
    $sStart = $start->format('h:i:s A');
    $sEnd = $end->format('h:i:s A');
    $content = $content . "  <tr><td>" . $sDate . "</td><td>" . $sStart . "</td><td>" . $sEnd . "</td><td>" . $practices[$i]->practice_desc . "</td><td><a href=\"" . $practices[$i]->practice_map . "\" target=\"_blank\">Map</a></td><td>\n";
//    $content = $content . "<li>Date: <b>" . $sDate . "</b>   Start Time: <b>" . $sStart . "</b>   End Time: <b>" . $sEnd . 
//                          "</b>   Practice Desc: <b>" . $practices[$i]->practice_desc . "</b>   Practice Location: <a href=\"" . $practices[$i]->practice_map . "\" target=\"_blank\">Map</a><br>\n";
  }
  $content = $content . "</table>\n";
//  $content = $content . "<ul>\n";
  echo $content;
?>
