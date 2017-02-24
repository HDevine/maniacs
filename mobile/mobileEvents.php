<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $events = $maniacs->GetEvents();
  $numEvents = count($events);

  date_default_timezone_set('America/New_York');
  $content = "";
  $content = $content . "<div class=\"maniacsCenter\">\n";
  $content = $content . "<hr><div class=\"maniacsWelcome\" id=\"maniacsEventsTitle\">Maniacs 18U - Event Schedule</div><br>\n";
  $content = $content . "<table border=0>\n";
  $content = $content . "  <tr><th><u>Date</u></th><th><u>Start Time</u></th><th><u>End Time</u></th><th><u>Description</u></th><th><u>Location</u></th>\n";
//  $content = $content . "<ul>\n";

  for ($i=0; $i < $numEvents; $i++) {
    $current = new DateTime($events[$i]->event_date);
    $start = new DateTime($events[$i]->event_start);
    $end = new DateTime($events[$i]->event_end);
    $sDate = $current->format('m/d/Y');
    $sStart = $start->format('h:i:s A');
    $sEnd = $end->format('h:i:s A');
    $content = $content . "  <tr><td>" . $sDate . "</td><td>" . $sStart . "</td><td>" . $sEnd . "</td><td>" . $events[$i]->event_desc . "</td><td><a href=\"" . $events[$i]->event_map . "\" target=\"_blank\">Map</a></td><td>\n";
//    $content = $content . "<li>Date: <b>" . $sDate . "</b>   Start Time: <b>" . $sStart . "</b>   End Time: <b>" . $sEnd . 
//                          "</b>   Event Desc: <b>" . $events[$i]->event_desc . "</b>   Event Location: <a href=\"" . $events[$i]->event_map . "\" target=\"_blank\">Map</a><br>\n";
  }
  $content = $content . "</table>\n";
//  $content = $content . "<ul>\n";
  echo $content;
?>
