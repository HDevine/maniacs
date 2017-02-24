<?php
  include "class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $events = $maniacs->GetEvents();
  $numEvents = count($events);
  $games = $maniacs->GetGames();
  $numGames = count($games);
  $practices = $maniacs->GetPractices();
  $numPractices = count($practices);
  $birthday = $maniacs->GetBirthdays();
  $numBirthdays = count($birthday);

  $calendar = array();
  $j = 1;

  /* Get Events */
  for ($i = 0; $i < $numEvents; $i++) {
    $date = new DateTime($events[$i]->event_date);
    $start = new DateTime($events[$i]->event_start);
    $end = new DateTime($events[$i]->event_end);
    $strDate = $date->format('Y-m-d');
    $strStartTime = $start->format('H:i:s');
    $strEndTime = $end->format('H:i:s');
    $strEventStart = $strDate . "T" . $strStartTime;
    $strEventEnd = $strDate . "T" . $strEndTime;

    $calendar[] = array('id' => $j,
                        'summary' => $events[$i]->event_desc, 
                        'begin' => $strEventStart, 
                        'end' => $strEventEnd, 
                        'calendar' => "Events"); 
    $j++;
  }

  /* Get Games */
  for ($i = 0; $i < $numGames; $i++) {
    $date = new DateTime($games[$i]->game_date);
    $start = new DateTime($games[$i]->game_time);
    $end = new DateTime($games[$i]->game_time);
    $end = $end->add(new DateInterval('PT90M'));
    $strDate = $date->format('Y-m-d');
    $strStartTime = $start->format('H:i:s');
    $strEndTime = $end->format('H:i:s');
    $strGameStart = $strDate . "T" . $strStartTime;
    $strGameEnd = $strDate . "T" . $strEndTime;

    $calendar[] = array('id' => $j,
                        'summary' => $games[$i]->game_opponent, 
                        'begin' => $strGameStart, 
                        'end' => $strGameEnd, 
                        'calendar' => "Games"); 
    $j++;
  }

  /* Get Practices */
  for ($i = 0; $i < $numPractices; $i++) {
    $date = new DateTime($practices[$i]->practice_date);
    $start = new DateTime($practices[$i]->practice_start);
    $end = new DateTime($practices[$i]->practice_end);
    $strDate = $date->format('Y-m-d');
    $strStartTime = $start->format('H:i:s');
    $strEndTime = $end->format('H:i:s');
    $strPracticeStart = $strDate . "T" . $strStartTime;
    $strPracticeEnd = $strDate . "T" . $strEndTime;

    $calendar[] = array('id' => $j,
                        'summary' => $practices[$i]->practice_desc, 
                        'begin' => $strPracticeStart, 
                        'end' => $strPracticeEnd, 
                        'calendar' => "Practices"); 
    $j++;
  }

  /* Get Birthdays */
  for ($i = 0; $i < $numBirthdays; $i++) {
    $date = new DateTime($birthday[$i]->dob);
    $year = date("Y");
    $month = $date->format('m');
    $day = $date->format('d');
    $start = "00:00:00";
    $end = "23:59:59";
    $birthdateStart = $year . "-" . $month . "-" . $day . "T" . $start;
    $birthdateEnd = $year . "-" . $month . "-" . $day . "T" . $end;

    $calendar[] = array('id' => $j,
                        'summary' => $birthday[$i]->firstname . " " . $birthday[$i]->lastname . "'s Birthday", 
                        'begin' => $birthdateStart, 
                        'end' => $birthdateEnd, 
                        'allDay' => true,
                        'calendar' => "Birthdays"); 
    $j++;
  }

  $jsonStr = json_encode($calendar);
  echo $jsonStr;
?>
