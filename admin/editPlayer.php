<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
   
  $data = $_POST['data'];
  $id = $_POST['id'];
  $member_json = json_decode($data);
  $info = array();
  
  array_push($info,$member_json[0]->editFirstName);
  array_push($info,addslashes($member_json[1]->editLastName));
  array_push($info,$member_json[2]->editJersey);
  array_push($info,$member_json[3]->editPos1);
  array_push($info,$member_json[4]->editPos2);
  array_push($info,$member_json[5]->editPos3);
  array_push($info,$member_json[6]->editThrows);
  array_push($info,$member_json[7]->editBats);
  array_push($info,addslashes($member_json[8]->editHeight));
  array_push($info,$member_json[9]->editWeight);
  array_push($info,$member_json[10]->editAge);
  array_push($info,$member_json[11]->editDOB);
  array_push($info,$member_json[12]->editAddress);
  array_push($info,$member_json[13]->editCity);
  array_push($info,$member_json[14]->editState);
  array_push($info,$member_json[15]->editZip);
  array_push($info,$member_json[16]->editPhone);
  array_push($info,$member_json[17]->editEmail);
  array_push($info,$member_json[18]->editProfilePic);
  array_push($info,$member_json[19]->editVideoURL);
  array_push($info,$member_json[20]->editHSName);
  array_push($info,$member_json[21]->editHSAddress);
  array_push($info,$member_json[22]->editHSCity);
  array_push($info,$member_json[23]->editHSState);
  array_push($info,$member_json[24]->editHSZip);
  array_push($info,$member_json[25]->editHSPhone);
  array_push($info,$member_json[26]->editGradYear);
  array_push($info,$member_json[27]->editAthDirect);
  array_push($info,$member_json[28]->editHSCoach);
  array_push($info,$member_json[29]->editSportsPlayed);
  array_push($info,$member_json[30]->editGPA);
  array_push($info,$member_json[31]->editClassRank);
  array_push($info,$member_json[32]->editPSAT);
  array_push($info,$member_json[33]->editSAT);
  array_push($info,$member_json[34]->editHSSoftballHighlights);
  array_push($info,$member_json[35]->editTravelYear);
  array_push($info,$member_json[36]->editTravelCoach);
  array_push($info,$member_json[37]->editTravelCoachPhone);
  array_push($info,$member_json[38]->editTravelCoachEmail);
  array_push($info,$member_json[39]->editTravelHSStats);
  array_push($info,addslashes($member_json[40]->editDadName));
  array_push($info,$member_json[41]->editDadPhone);
  array_push($info,addslashes($member_json[42]->editMomName));
  array_push($info,$member_json[43]->editMomPhone);
  array_push($info,$member_json[44]->editParentEmail);
  array_push($info,addslashes($member_json[45]->editPersonalStatement));
  array_push($info,addslashes($member_json[46]->editPersonalClubs));
  array_push($info,addslashes($member_json[47]->editPersonalCommunity));
  array_push($info,$member_json[48]->editAlumni);

  $maniacs->UpdateRosterMember($info, $id);
?>

