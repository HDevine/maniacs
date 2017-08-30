<?php
  include "../class/ManiacsClass.php";
  $maniacs = new ManiacsClass();
  $player = $maniacs->GetRosterProfile($_GET["id"]);
  $stats = $maniacs->GetRosterStats($_GET["id"]);
?>
<html>
<head>
<title>Maniacs 18U - Player Profile</title>
<meta charset="utf-8">
<link rel="stylesheet" href="/js/mobile-release/dojo/resources/dojo.css">
<link rel="stylesheet" href="/js/mobile-release/dijit/themes/claro/claro.css">
<link rel="stylesheet" href="/css/maniacs.css">

<style>
  .dgrid {
    height: 500px;
  }
</style>

<script>
  var dojoConfig = {
    async:true
  };
</script>

<script type="text/javascript" src="/js/mobile-release/dojo/dojo.js"></script>

<script type="text/javascript">
  require(["dojo/parser",
           "dijit/TitlePane", 
           "mobile/maniacsMobile",
           "dojo/domReady!"], 
           function(parser, TitlePane, maniacsMobile){

             parser.parse();
             maniacsMobile.setupStatsGrids(<?php echo $_GET["id"]; ?>);
           });
</script>
</head>

<body class="claro" style="background-color:#008080;">
<div class="maniacsCenter"><img src=" <?php echo $player[0]->profile_pic_path; ?>" height="150" width="150"></div><br>
<div class="maniacsTable"> 
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Name:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"><?php echo $player[0]->firstname . " " . $player[0]->lastname; ?></div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">View my Video Highlights</div></div>
<?php
  if (filter_var($player[0]->video_url, FILTER_VALIDATE_URL) == true) {
?>
    <div class="maniacsProfile"><a href=<?php echo "\"" . $player[0]->video_url . "\" target=\"_blank\">"?>here</a></div>
<?php
  }
  else {
?>
    <div class="maniacsCell"><img src="images/coming-soon.png" height="100px;" width="200px;"></div>
<?php
  }
?>
  </div>
</div>
<div data-dojo-type="dijit/TitlePane" open="true" data-dojo-props="title:'Player Information'" style="background-color:#008080;">
<div class="maniacsTable">
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Jersey #:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->number; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Position(s):</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->position1; ?>
<?php
  if (!empty($player[0]->position2)) {
    echo ", " . $player[0]->position2;
  } 
  if (!empty($player[0]->position3)) {
    echo ", " . $player[0]->position3;
  } 
?>
    </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Bats:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->bats; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Throws:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->throws; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Age:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile">  <?php echo $player[0]->age; ?></div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Date of Birth:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile">  
    <?php     
      $dob = new DateTime($player[0]->dob);
      $strDOB = $dob->format('m/d/Y');
      echo $strDOB; 
    ?>
    </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Height:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile">  <?php echo $player[0]->height; ?></div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Weight:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile">  <?php echo $player[0]->weight; ?></div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Email:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile">  <?php echo $player[0]->email; ?></div></div>
  </div>
</div>
</div>
<div data-dojo-type="dijit/TitlePane" open="false" data-dojo-props="title:'High School Information'" style="background-color:#008080;">
<div class="maniacsTable">
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">High School Name:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs; ?> </div></div>
    <div class="maniacsCell"></div><div class="maniacsCell"></div>
    <div class="maniacsCell"></div><div class="maniacsCell"></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">High School Address:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_address; ?> </div></div>
    <div class="maniacsCell"></div><div class="maniacsCell"></div>
    <div class="maniacsCell"></div><div class="maniacsCell"></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_city; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_state; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_zip; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">High School Phone:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_phone; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Graduation Year:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->grad_date; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Athletic Director:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_athletic_director; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Head Softball Coach:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_softball_coach; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Sports Participated In:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_sports_played; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Grade Point Average:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_gpa; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Class Rank:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_class_rank; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">PSAT Score:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_psat; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">SAT Score:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_sat; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">High School Softball Highlights:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->hs_softball_highlights; ?> </div></div>
  </div>
</div>
</div>
<div data-dojo-type="dijit/TitlePane" open="false" data-dojo-props="title:'Travel Softball Information'" style="background-color:#008080;">
<div class="maniacsTable">
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Travel Season:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->travel_year; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Travel Coach:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->travel_coach; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Travel Coach Phone:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->travel_coach_phone; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Travel Coach Email:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->travel_coach_email; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Travel Softball Highlights:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->travel_highlights; ?> </div></div>
  </div>
<!--
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Travel Softball Statistics:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->travel_stats; ?> </div></div>
  </div>
-->
</div>
</div>
<div data-dojo-type="dijit/TitlePane" open="false" data-dojo-props="title:'Parent/Personal Information'" style="background-color:#008080;">
<div class="maniacsTable">
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Father:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->dad_name; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Father Phone:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->dad_phone; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Mother:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->mom_name; ?> </div></div>
    <div class="maniacsCell"><div class="maniacsProfile">Mother Phone:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->mom_phone; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Parent Email:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->parent_email; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Personal Statment:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->personal_statement; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Personal Clubs/Activities:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->personal_clubs; ?> </div></div>
  </div>
  <div class="maniacsRow">
    <div class="maniacsCell"><div class="maniacsProfile">Community Service/Activities:</div></div>
    <div class="maniacsCell"><div class="maniacsProfile"> <?php echo $player[0]->community_service; ?> </div></div>
  </div>
</div>
</div>
<!--<div data-dojo-type="dijit/TitlePane" open="false" data-dojo-props="title:'2016-2017 Maniacs Statistics'" style="background-color:#008080;">
  <div id="playerTabContainer" data-dojo-type="dijit/layout/TabContainer" data-dojo-props="doLayout:true" style="width:100%; height:100%;">
    <div id="playerHitting" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Hitting',selected:true">
      <div id="hittingTabContainer" data-dojo-type="dijit/layout/TabContainer" data-dojo-props="doLayout:false,tabStrip:true" style="width:100%; height:100%;">
        <div id="hittingStandard" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Standard',selected:true">
          <div id="standardHittingGrid"></div>
          <b>PA=Plate Appearances; AB=At Bats; H=Hits;1B=Singles;2B=Doubles;3B=Triples;HR=Home Runs;RBI=Runs Batted In;R=Runs;HBP=Hit By Pitch;ROE=Reached On Error;FC=Fielders Choice;CI=Catcher Interference;BB=Walks;K=Strikeouts;AVG=Batting Average;OBP=On-Base Percentage;SLG=Slugging Percentage;OPS=On-base % + Slugging %</b><br>
        </div>
        <div id="hittingPatience" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Patience, Speed, & Power'">
          <div id="patienceHittingGrid"></div>
          <b>PA=Plate Appearances; AB=At Bats; PA/BB=Plate Appearances per Walk;BB/K=Walks per strikeout;C%=Contact Rate;SB=Stolen Bases;CS=Caught Stealing;SB%=Stolen Base Percentage;PIK=Picked Off;GIDP=Hit into Double Play;GITP=Hit into Triple Play;XBH=Extra Base hits;TB=Total Bases;AB/HR=At Bats per Home Run;BA/RISP=Batting Average with runner in scoring position;SLG=Slugging Percentage</b><br>
        </div>
        <div id="hittingQAB" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'QABs & Team Impact'">
          <div id="qabHittingGrid"></div>
          <b>PA=Plate Appearances; AB=At Bats; PS=Pitches Seen;PS/PA=Pitches Seen per Plate Appearance;2S+3=Plate Appearance where batter sees 3+ pitches after 2 strikes;2S+3%=% of plate appearances where batter sees 3+ pitches after 2 strikes;6+=Plate Appearances with 6+ pitches;6+%=% of plate appearances of 6+ pitches;SAC=Sacrifice hits and bunts;SF=Sacrifice flies;LOB=Runners left on base when batter is out;2OUTRBI=2-out RBI;HHB=Hard hit balls (Total line drives and hard ground balls);QAB=Quality at bats (any one of 3 pitches after 2 strikes, 6+ pitch ABs, XBH, HHB, BB, SAC bunt, SAC Fly);QAB%=Quality at bats per plate appearance</b><br>
        </div>
      </div>
    </div>

    <div id="playerPitching" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Pitching',selected:true" style="background-color: rgb(203,219,237);">
      <div id="pitchingTabContainer" data-dojo-type="dijit/layout/TabContainer" data-dojo-props="doLayout:false,tabStrip:true" style="width:100%; height:100%;">
        <div id="pitchingStandard" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Standard',selected:true">
          <div id="standardPitchingGrid"></div>
          <b>IP=Innings Pitched; GP=Games pitched; GS=Games started as pitcher; W=Wins; L=Losses; SV=Saves; SVO=Save opportunities; BS=Blown Saves; SV%=Save percentage; H=Hits allowed; R=Runs allowed; ER=Earned Runs allowed; BB=Walks allowed; K=Strikeouts; HBP=Hit Batters; ERA=Earned Run Average; WHIP=Walks plus hits per innings pitched</b><br>
        </div>
        <div id="pitchingEfficiency" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Efficiency'">
          <div id="efficiencyPitchingGrid"></div>
          <b>IP=Innings Pitched; BF=Batters Faced; #P=Total Pitches; TS=Total Strikes; TB=Total Balls; P/IP=Pitches per inning; P/BF=Pitches per batter faced; <3=Batters on or out in 3 pitches or less; <3%=% of batters on or out in 3 pitches or less; LOO=Leadoff out(1st batter of inning); 1ST2OUT=Innings with 1st 2 batters out; 123INN=1-2-3 innings; <13=Inninngs of 13 pitches or fewer; FIP=Fielding Independent Pitching</b><br>
        </div>
        <div id="pitchingCommand" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Command'">
          <div id="commandPitchingGrid"></div>
          <b>IP=Innings Pitched; BF=Batters Faced; TS=Total Strikes; S%=Strike Percentage; FPS=First pitch strikes; FPS%=First pitch strike percentage; FPSO%=% of FPS at-bats that result in an out; FPSW%=% of at-bats that result in a walk; FPSH%=% of FPS at-bats that result in a hit; BB/INN=Walks per inning; 0BBINN=Zero-walk innings; BBS=Walks that score; LOBB=Leadoff walk (1st batter of inning); LOBBS=Leadoff walk that scored (1st batter of inning); WP=Wild Pitches</b><br>
        </div>
        <div id="pitchingBatter" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Batter Results'">
          <div id="batterPitchingGrid"></div>
          <b>IP=Innings Pitched; BF=Batters Faced; #P=Total Pitches; SM=Opposing batter swings-and-misses; SM%=% of total pitches that are swings and misses; K=Strikeouts; K/G=Strikeouts per regulation game; K/BF=Strikeouts per batter faced; K/BB=Strikeouts per walk; WEAK%=% of batted balls weakly hit (fly balls and ground balls); HHB%=% of batter balls that are line drives or hard ground balls; GB%=% of batted balls hit on the ground; FLY%=% of batted balls that are hit in the air; GO=Ground outs; FO=Fly outs; GO/FO=Ratio of ground balls to fly outs; BAA=Opponent batting average; HR=Home runs allowed</b><br>
        </div>
        <div id="pitchingRunning" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Runs & Running Game'">
          <div id="runningPitchingGrid"></div>
          <b>IP=Innings Pitched; LOB=Runners left on base; BK=Balks; PIK=Runners picked off; SB=Stolen bases allowed; CS=Caught Stealing; SB%=Opponent stolen base percentage</b><br>
        </div>
        <div id="pitchingPitches" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Pitch Breakdown'">
          <div id="pitchesPitchingGrid"></div>
          <b>#P=Total Pitches; FB=Number of pitches thrown as Fastballs; FBS=Number of Fastballs thrown for strikes; CB=Number of pitches thrown as Curveballs; CBS=Number of Curveballs thrown for strikes; CH=Number of pitches thrown as Changeups; CHS=Number of Changeups thrown for strikes; RB=Number of pitches thrown as Riseballs; RBS=Number of Riseballs thrown for strikes; DB=Number of pitches thrown as Dropballs; DBS=Number of Dropballs thrown for strikes; SC=Number of pitches thrown as screwballs; SCS=Number of Screwballs thrown for strikes; OS=Number of pitches thrown Offspeed(Curveball, Screwball, Changeup); OSS=Number of Offspeed pitches thrown for strikes</b><br>
        </div>
      </div>
    </div>

    <div id="playerFielding" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Fielding',selected:true" style="background-color: rgb(203,219,237);">
      <div id="fieldingTabContainer" data-dojo-type="dijit/layout/TabContainer" data-dojo-props="doLayout:false,tabStrip:true" style="width:100%; height:75%;">
        <div id="fieldingStandard" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Standard'">
          <div id="standardFieldingGrid"></div>
          <b>TC=Total Chances; A=Assists; PO=Putouts; E=Errors; DP=Double Plays; TP=Triple Plays; FPCT=Fielding Percentage</b><br>
        </div>
        <div id="fieldingCatching" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Catching'">
          <div id="catchingGrid"></div>
          <b>INN=Innings caught; PB=Passed Balls allowed; SB=Stolen Bases Allowed; CS=Runners caught stealing; CS%=Runners caught stealing percentage; PIK=Runners picked off; CI=Batter advances on catcher's interference</b><br>
        </div>
      </div>
    </div>

  </div>
</div> -->
</body>
</html>

