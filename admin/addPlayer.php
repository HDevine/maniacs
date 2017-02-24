<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $data = $_POST['data'];
  $member_json = json_decode($data);
//  var_dump($member_json);
  $info = array();
  
  array_push($info,$member_json[0]->rosterFirstName);
  array_push($info,addslashes($member_json[1]->rosterLastName));
  array_push($info,$member_json[2]->rosterJersey);
  array_push($info,$member_json[3]->rosterPos1);
  array_push($info,$member_json[4]->rosterPos2);
  array_push($info,$member_json[5]->rosterPos3);
  array_push($info,$member_json[6]->rosterThrows);
  array_push($info,$member_json[7]->rosterBats);
  array_push($info,addslashes($member_json[8]->rosterHeight));
  array_push($info,$member_json[9]->rosterWeight);
  array_push($info,$member_json[10]->rosterAge);
  array_push($info,$member_json[11]->rosterDOB);
  array_push($info,$member_json[12]->rosterAddress);
  array_push($info,$member_json[13]->rosterCity);
  array_push($info,$member_json[14]->rosterState);
  array_push($info,$member_json[15]->rosterZip);
  array_push($info,$member_json[16]->rosterPhone);
  array_push($info,$member_json[17]->rosterEmail);
  array_push($info,$member_json[18]->rosterProfilePic);
  array_push($info,$member_json[19]->rosterVideoURL);
  array_push($info,$member_json[20]->rosterHSName);
  array_push($info,$member_json[21]->rosterHSAddress);
  array_push($info,$member_json[22]->rosterHSCity);
  array_push($info,$member_json[23]->rosterHSState);
  array_push($info,$member_json[24]->rosterHSZip);
  array_push($info,$member_json[25]->rosterHSPhone);
  array_push($info,$member_json[26]->rosterGradYear);
  array_push($info,$member_json[27]->rosterAthDirect);
  array_push($info,$member_json[28]->rosterHSCoach);
  array_push($info,$member_json[29]->rosterSportsPlayed);
  array_push($info,$member_json[30]->rosterGPA);
  array_push($info,$member_json[31]->rosterClassRank);
  array_push($info,$member_json[32]->rosterPSAT);
  array_push($info,$member_json[33]->rosterSAT);
  array_push($info,$member_json[34]->rosterHSSoftballHighlights);
  array_push($info,$member_json[35]->rosterTravelYear);
  array_push($info,$member_json[36]->rosterTravelCoach);
  array_push($info,$member_json[37]->rosterTravelCoachPhone);
  array_push($info,$member_json[38]->rosterTravelCoachEmail);
  array_push($info,$member_json[39]->rosterTravelHSStats);
  array_push($info,addslashes($member_json[40]->rosterDadName));
  array_push($info,$member_json[41]->rosterDadPhone);
  array_push($info,addslashes($member_json[42]->rosterMomName));
  array_push($info,$member_json[43]->rosterMomPhone);
  array_push($info,$member_json[44]->rosterParentEmail);
  array_push($info,addslashes($member_json[45]->rosterPersonalStatement));
  array_push($info,addslashes($member_json[46]->rosterPersonalClubs));
  array_push($info,addslashes($member_json[47]->rosterPersonalCommunity));

//  print_r($info);

  $id = $maniacs->AddRosterMember($info);

  if ($id == 0) {
    echo "Error adding new roster member; id was 0!";
  }
  else {
    echo "Roster member added successfully; id=" . $id . "!";
  }
?>

