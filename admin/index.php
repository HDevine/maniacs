<?php
  session_start();
?>

<html>
<head>
<title>Maniacs 18U - Admin Site</title>
<link rel="stylesheet" href="/js/admin-release/dojo/resources/dojo.css">
<link rel="stylesheet" href="/js/admin-release/dgrid/css/dgrid.css">
<link rel="stylesheet" href="/js/admin-release/dgrid/css/skins/claro.css">
<link rel="stylesheet" href="/css/maniacs.css">

<style type="text/css">
  @import "/js/admin-release/dijit/themes/claro/claro.css";
  @import "/js/admin-release/dojo/resources/dojo.css";
</style>

<script>
  var dojoConfig = {
    async:true
  };
</script>

<script type="text/javascript" src="/js/admin-release/dojo/dojo.js"></script>

<script>
  require(["dojo/parser",
           "dijit/layout/ContentPane",
           "dijit/layout/TabContainer",
           "dijit/form/Button",
           "dijit/registry",
           "dojo/on",
           "dojo/dom",
           "dgrid/Grid",
           "dgrid/extensions/DijitRegistry",
           "admin/maniacsAdmin",
           "dojo/domReady!"],
    function(parser, ContentPane, TabContainer, Button, registry,
             on, dom, Grid, DijitRegistry, maniacsAdmin) { 
      parser.parse();
      maniacsAdmin.setupButtonHandlers();
      maniacsAdmin.setupGrids();
    });
</script>
</head>

<body class="claro" style="background-color:#008080">
<center><h6><img src="images/maniacslogo.jpg" height="175" width="1175px" title="Maniacs"><br>South Jersey Maniacs 18U - Admin Area</h6></center>
<br><br><hr>
<div id="mainTabContainer" data-dojo-type="dijit/layout/TabContainer" data-dojo-props="doLayout:false,tabStrip:true" style="width:100%; height:75%;">
  <div id="maniacsPlayers" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Roster',selected:true" style="background-color: rgb(203,219,237);">
    <div class="maniacsWelcome">Maniacs 18U - Roster</div>
    <hr><br>
    <button id="addPlayerButton" data-dojo-type="dijit/form/Button" type="button">Add Player</button>
    <div id="maniacsPlayerGrid"></div>
    <div id="rosterStatus"></div>
  </div>
  <div id="maniacsCoaches" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Coaches'" style="background-color: rgb(203,219,237);">
    <div class="maniacsWelcome">Maniacs 18U - Coaches</div><br>
    <hr><br>
    <button id="addCoachButton" data-dojo-type="dijit/form/Button" type="button">Add Coach</button>
    <div id="maniacsCoachesGrid"></div>
    <div id="coachStatus"></div>
  </div>
  <div id="maniacsNews" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'News'" style="background-color: rgb(203,219,237);">
    <div class="maniacsWelcome">Maniacs 18U - News Items</div>
    <hr><br>
    <button id="addNewsButton" data-dojo-type="dijit/form/Button" type="button">Add News Item</button>
    <center><div id="maniacsNewsGrid"></div></center>
    <div id="newsStatus"></div>
  </div>
  <div id="maniacsEvents" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Events'" style="background-color: rgb(203,219,237);">
    <div class="maniacsWelcome">Maniacs 18U - Events</div>
    <hr><br>
    <button id="addEventButton" data-dojo-type="dijit/form/Button" type="button">Add Event</button>
    <center><div id="maniacsEventsGrid"></div></center>
    <div id="eventStatus"></div>
  </div>
  <div id="maniacsPhotos" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Team Photos'" style="background-color: rgb(203,219,237);">
    <div class="maniacsWelcome">Maniacs 18U - Team Photos</div>
    <hr><br>
    <button id="addPhotoButton" data-dojo-type="dijit/form/Button" type="button">Add Team Photo</button>
    <center><div id="maniacsPhotoGrid"></div></center>
    <div id="photoStatus"></div>
  </div>
  <div id="maniacsGames" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Games'" style="background-color: rgb(203,219,237);">
      <div class="maniacsWelcome">Maniacs 18U - Games</div><br><hr>
      <button id="addGameButton" data-dojo-type="dijit/form/Button" type="button">Add Game</button>
      <center><div id="maniacsGamesGrid"></div></center>
      <div id="gameStatus"></div>
  </div>
  <div id="maniacsPractices" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="title:'Practices'" style="background-color: rgb(203,219,237);">
      <div class="maniacsWelcome">Maniacs 18U - Practices</div><br><hr>
      <button id="addPracticeButton" data-dojo-type="dijit/form/Button" type="button">Add Practice</button>
      <center><div id="maniacsPracticeGrid"></div></center>
      <div id="practiceStatus"></div>
  </div>
</div>

<?php
  include "adminDialogs.php";
?>

</body>
</html>
