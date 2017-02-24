<!-- Events dialog !-->
<div data-dojo-type="dijit/Dialog" id="EventDlg" data-dojo-props="title:'Add Event', closable: false">
  <div class="maniacsCenter">
    <table border=0>
      <tr><td>Date:</td><td><div id="newEventDate"></div></td>
      <tr><td>Start Time:</td><td><div id="newEventStartTime"></div></td>
      <tr><td>End Time:</td><td><div id="newEventEndTime"></div></td>
      <tr><td>Description:</td><td><div id="newEventDesc"></div></td>
      <tr><td>Event Data:</td><td><div id="newEventData"></div></td>
      <tr><td>Address:</td><td><div id="newEventAddress"></div></td>
      <tr><td>City:</td><td><div id="newEventCity"></div></td>
      <tr><td>State:</td><td><div id="newEventState"></div></td>
      <tr><td>Zip Code:</td><td><div id="newEventZip"></div></td>
    </table>
    <button id="eventAddButton" data-dojo-type="dijit/form/Button">Add Event</button>
    <button id="eventCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- News Item dialog !-->
<div data-dojo-type="dijit/Dialog" id="NewsItemDlg" data-dojo-props="title:'Add News Item', closable: false">
  <div class="maniacsCenter">
    <table border=0>
      <tr><td>Date:</td><td><div id="newNewsDate"></div></td>
      <tr><td>Description:</td><td><div id="newNewsDesc"></div></td>
      <tr><td>News Data:</td><td><div id="newNewsData"></div></td>
      <tr><td>Image Path:</td><td><div id="newImagePath"></div></td>
    </table>
    <button id="newsAddButton" data-dojo-type="dijit/form/Button">Add News Item</button>
    <button id="newsCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- Practices dialog !-->
<div data-dojo-type="dijit/Dialog" id="PracticeDlg" data-dojo-props="title:'Add Practice', closable: false">
  <div class="maniacsCenter">
    <table border=0>
      <tr><td>Date:</td><td><div id="practiceDate"></div></td>
      <tr><td>Start Time:</td><td><div id="practiceStartTime"></div></td>
      <tr><td>End Time:</td><td><div id="practiceEndTime"></div></td>
      <tr><td>Description:</td><td><div id="practiceDesc"></div></td>
      <tr><td>Address:</td><td><div id="practiceAddress"></div></td>
      <tr><td>City:</td><td><div id="practiceCity"></div></td>
      <tr><td>State:</td><td><div id="practiceState"></div></td>
      <tr><td>Zip Code:</td><td><div id="practiceZip"></div></td>
    </table>
    <button id="practiceAddButton" data-dojo-type="dijit/form/Button">Add Practice</button>
    <button id="practiceCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- Games dialog !-->
<div data-dojo-type="dijit/Dialog" id="GameDlg" data-dojo-props="title:'Add Game', closable: false">
  <div class="maniacsCenter">
    <table border=0>
      <tr><td>Date:</td><td><div id="gameDate"></div></td>
      <tr><td>Start Time:</td><td><div id="gameTime"></div></td>
      <tr><td>Game Type:</td><td><div id="gameType"></div></td>
      <tr><td>Opponent:</td><td><div id="gameOpponent"></div></td>
      <tr><td>Address:</td><td><div id="gameAddress"></div></td>
      <tr><td>City:</td><td><div id="gameCity"></div></td>
      <tr><td>State:</td><td><div id="gameState"></div></td>
      <tr><td>Zip Code:</td><td><div id="gameZip"></div></td>
    </table>
    <button id="gameAddButton" data-dojo-type="dijit/form/Button">Add Game</button>
    <button id="gameCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- Team Photos dialog !-->
<div data-dojo-type="dijit/Dialog" id="PhotoDlg" data-dojo-props="title:'Add Team Photo', closable: false">
  <div class="maniacsCenter">
    <table border=0>
      <tr><td>Photo Path (path on web server):</td><td><div id="newPhotoPath"></div></td>
      <tr><td>Photo URL (website to open when photo clicked):</td><td><div id="newPhotoURL"></div></td>
      <tr><td>Photo Description:</td><td><div id="newPhotoDesc"></div></td>
    </table>
    <button id="photoAddButton" data-dojo-type="dijit/form/Button">Add Team Photo</button>
    <button id="photoCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- New Coach dialog !-->
<div data-dojo-type="dijit/Dialog" id="CoachDlg" data-dojo-props="title:'Add New Coach', closable: false">
  <div class="maniacsCenter">
    <table border=0>
      <tr><td>Name:</td><td><div id="coachName"></div></td>
      <tr><td>Phone:</td><td><div id="coachPhone"></div></td>
      <tr><td>Email:</td><td><div id="coachEmail"></div></td>
      <tr><td>Coach Type:</td><td><div id="coachType"></div></td>
      <tr><td>Image Path:</td><td><div id="coachImagePath"></div></td>
    </table>
    <button id="coachAddButton" data-dojo-type="dijit/form/Button">Add Coach</button>
    <button id="coachCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- New Player dialog !-->
<div data-dojo-type="dijit/Dialog" id="RosterDlg" data-dojo-props="title:'Add New Roster Member', closable: false">
  <div class="maniacsCenter">
    <div class="maniacsRosterDialog">Player Information</div>

    <table border=0>
      <tr><td>First Name:</td><td><div id="rosterFirstName"></div></td><td>Last Name:</td><td><div id="rosterLastName"></div></td><td>Jersey #:</td><td><div id="rosterJersey"></div></td>
      <tr><td>Position 1:</td><td><div id="rosterPos1"></div></td><td>Position 2:</td><td><div id="rosterPos2"></div><td>Position 3:</td><td><div id="rosterPos3"></div></td>
      <tr><td>Throws:</td><td><div id="rosterThrows"></div></td><td>Bats:</td><td><div id="rosterBats"></div></td>
      <tr><td>Height:</td><td><div id="rosterHeight"></div></td><td>Weight:</td><td><div id="rosterWeight"></div></td>
      <tr><td>Age:</td><td><div id="rosterAge"></div></td><td>Date of Birth:</td><td><div id="rosterDOB"></div></td>
      <tr><td>Address:</td><td><div id="rosterAddress"></div></td>
      <tr><td>City:</td><td><div id="rosterCity"></div></td><td>State:</td><td><div id="rosterState"></div></td><td>Zip:</td><td><div id="rosterZip"></div></td>
      <tr><td>Phone:</td><td><div id="rosterPhone"></div></td><td>Email:</td><td><div id="rosterEmail"></div></td>
      <tr><td>Profile Pic Path:</td><td><div id="rosterProfilePic"></div></td><td>Video URL:</td><td><div id="rosterVideoURL"></div></td>
    </table>

    <div class="maniacsRosterDialog">High School Information</div>

    <table border=0>
      <tr><td>High School Name:</td><td><div id="rosterHSName"></div></td>
      <tr><td>Address:</td><td><div id="rosterHSAddress"></div></td>
      <tr><td>City:</td><td><div id="rosterHSCity"></div></td><td>State:</td><td><div id="rosterHSState"></div></td><td>Zip:</td><td><div id="rosterHSZip"></div></td>
      <tr><td>High School Phone:</td><td><div id="rosterHSPhone"></div></td><td>Graduation Year:</td><td><div id="rosterGradYear"></div></td>
      <tr><td>Athletic Director:</td><td><div id="rosterAthDirect"></div></td><td>Softball Head Coach:</td><td><div id="rosterHSCoach"></div></td>
      <tr><td>Sports Played:</td><td><div id="rosterSportsPlayed"></div></td><td>Grade Point Avg:</td><td><div id="rosterGPA"></div></td>
      <tr><td>Class Rank:</td><td><div id="rosterClassRank"></div></td><td>PSAT:</td><td><div id="rosterPSAT"></div></td><td>SAT:</td><td><div id="rosterSAT"></div></td>
      <tr><td>High School Softball Highlights:</td><td><div id="rosterHSSoftballHighlights"></td>
    </table>

    <div class="maniacsRosterDialog">Travel Softball Statistics</div>

    <table border=0>
      <tr><td>Year:</td><td><div id="rosterTravelYear"></div></td><td>Coach:</td><td><div id="rosterTravelCoach"></div></td>
      <tr><td>Coach Phone:</td><td><div id="rosterTravelCoachPhone"></div></td><td>Coach Email:</td><td><div id="rosterTravelCoachEmail"></div></td>
      <tr><td>High School and/or Travel Statistics:</td><td><div id="rosterTravelHSStats"></div></td>
    </table>

    <div class="maniacsRosterDialog">Parent & Personal Information</div>

    <table border=0>
      <tr><td>Father:</td><td><div id="rosterDadName"></div></td><td>Father Phone:</td><td><div id="rosterDadPhone"></div></td>
      <tr><td>Mother:</td><td><div id="rosterMomName"></div></td><td>Mother Phone:</td><td><div id="rosterMomPhone"></div></td>
      <tr><td>Email:</td><td><div id="rosterParentEmail"></div></td>
      <tr><td>Personal Statement:</td><td><div id="rosterPersonalStatement"></div></td>
      <tr><td>High School Clubs/Activities (non-sports related):</td><td><div id="rosterPersonalClubs"></div></td>
      <tr><td>Community Service Activities:</td><td><div id="rosterPersonalCommunity"></div></td>
    </table>

    <button id="rosterAddButton" data-dojo-type="dijit/form/Button">Add Roster Member</button>
    <button id="rosterCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

<!-- Edit Player dialog !-->
<div data-dojo-type="dijit/Dialog" id="EditRosterDlg" data-dojo-props="title:'Edit Roster Member', closable: false">
  <div class="maniacsCenter">
    <div class="maniacsRosterDialog">Player Information</div>

    <table border=0>
      <tr><td>First Name:</td><td><div id="editFirstName"></div></td><td>Last Name:</td><td><div id="editLastName"></div></td><td>Jersey #:</td><td><div id="editJersey"></div></td>
      <tr><td>Position 1:</td><td><div id="editPos1"></div></td><td>Position 2:</td><td><div id="editPos2"></div><td>Position 3:</td><td><div id="editPos3"></div></td>
      <tr><td>Throws:</td><td><div id="editThrows"></div></td><td>Bats:</td><td><div id="editBats"></div></td>
      <tr><td>Height:</td><td><div id="editHeight"></div></td><td>Weight:</td><td><div id="editWeight"></div></td>
      <tr><td>Age:</td><td><div id="editAge"></div></td><td>Date of Birth:</td><td><div id="editDOB"></div></td>
      <tr><td>Address:</td><td><div id="editAddress"></div></td>
      <tr><td>City:</td><td><div id="editCity"></div></td><td>State:</td><td><div id="editState"></div></td><td>Zip:</td><td><div id="editZip"></div></td>
      <tr><td>Phone:</td><td><div id="editPhone"></div></td><td>Email:</td><td><div id="editEmail"></div></td>
      <tr><td>Profile Pic Path:</td><td><div id="editProfilePic"></div></td><td>Video URL:</td><td><div id="editVideoURL"></div></td>
    </table>

    <div class="maniacsRosterDialog">High School Information</div>

    <table border=0>
      <tr><td>High School Name:</td><td><div id="editHSName"></div></td>
      <tr><td>Address:</td><td><div id="editHSAddress"></div></td>
      <tr><td>City:</td><td><div id="editHSCity"></div></td><td>State:</td><td><div id="editHSState"></div></td><td>Zip:</td><td><div id="editHSZip"></div></td>
      <tr><td>High School Phone:</td><td><div id="editHSPhone"></div></td><td>Graduation Year:</td><td><div id="editGradYear"></div></td>
      <tr><td>Athletic Director:</td><td><div id="editAthDirect"></div></td><td>Softball Head Coach:</td><td><div id="editHSCoach"></div></td>
      <tr><td>Sports Played:</td><td><div id="editSportsPlayed"></div></td><td>Grade Point Avg:</td><td><div id="editGPA"></div></td>
      <tr><td>Class Rank:</td><td><div id="editClassRank"></div></td><td>PSAT:</td><td><div id="editPSAT"></div></td><td>SAT:</td><td><div id="editSAT"></div></td>
      <tr><td>High School Softball Highlights:</td><td><div id="editHSSoftballHighlights"></td>
    </table>

    <div class="maniacsRosterDialog">Travel Softball Statistics</div>

    <table border=0>
      <tr><td>Year:</td><td><div id="editTravelYear"></div></td><td>Coach:</td><td><div id="editTravelCoach"></div></td>
      <tr><td>Coach Phone:</td><td><div id="editTravelCoachPhone"></div></td><td>Coach Email:</td><td><div id="editTravelCoachEmail"></div></td>
      <tr><td>High School and/or Travel Statistics:</td><td><div id="editTravelHSStats"></div></td>
    </table>

    <div class="maniacsRosterDialog">Parent & Personal Information</div>

    <table border=0>
      <tr><td>Father:</td><td><div id="editDadName"></div></td><td>Father Phone:</td><td><div id="editDadPhone"></div></td>
      <tr><td>Mother:</td><td><div id="editMomName"></div></td><td>Mother Phone:</td><td><div id="editMomPhone"></div></td>
      <tr><td>Email:</td><td><div id="editParentEmail"></div></td>
      <tr><td>Personal Statement:</td><td><div id="editPersonalStatement"></div></td>
      <tr><td>High School Clubs/Activities (non-sports related):</td><td><div id="editPersonalClubs"></div></td>
      <tr><td>Community Service Activities:</td><td><div id="editPersonalCommunity"></div></td>
    </table>

    <button id="editOKButton" data-dojo-type="dijit/form/Button">Edit Roster Member</button>
    <button id="editCancelButton" data-dojo-type="dijit/form/Button" type="submit">Cancel</button>
  </div>
</div>

