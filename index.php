<html>
<head>
<meta charset="utf-8">
<title>South Jersey Maniacs - 18U 2016/2017</title>

<meta charset="utf-8">
<link rel="stylesheet" href="/js/main-release/dojo/resources/dojo.css">
<link rel="stylesheet" href="/js/main-release/dgrid/css/dgrid.css">
<link rel="stylesheet" href="/js/main-release/dgrid/css/skins/claro.css">
<link rel="stylesheet" href="/js/main-release/dijit/themes/claro/claro.css">
<link rel="stylesheet" href="/js/main-release/dojox/calendar/themes/claro/Calendar.css">
<link rel="stylesheet" href="/js/main-release/dojox/image/resources/image.css">
<link rel="stylesheet" href="/css/maniacs.css">
<link rel="stylesheet" href="/css/thumbnail.css">

<script>
  var dojoConfig = {
    async:true
  };
</script>

<script type="text/javascript" src="/js/main-release/dojo/dojo.js"></script>
<script type="text/javascript">
  require(["dojo/parser",
           "dojo/sniff",
           "dojo/window",
           "dijit/layout/ContentPane", 
           "dijit/layout/BorderContainer",
           "dijit/TitlePane", 
           "dijit/form/CheckBox",
           "dijit/form/TextBox",
           "dijit/form/DateTextBox",
           "dijit/form/TimeTextBox",
           "dijit/form/Button",
           "dijit/Dialog",
           "maniacs/maniacsFunctions",
           "dojo/domReady!"], 
           function(parser, has, window, ContentPane, BorderContainer, TitlePane, 
                    CheckBox, TextBox, DateTextBox, TimeTextBox, Button, Dialog, 
                    maniacsFunctions){

             parser.parse();

             console.log("Calling checkForMobileDevice...");
             maniacsFunctions.checkForMobileDevice();
           });
</script>
</head>

<!-- About dialog !-->
<div data-dojo-type="dijit/Dialog" id="AboutDlg" data-dojo-props="title:'About South Jersey Maniacs 18U', closable: false">
  <div class="maniacsCenter">
    <div class="maniacsNewsItem">
      The South Jersey Maniacs 18U Softball team is based out of Atlantic County NJ.  We promote teamwork and<br>
      sportsmanship in the sport of softball, and we aim to prepare the girls for playing softball at much higher levels.<br><br>
      If anyone has any questions or comments, please contact us at <a href="mailto:admin@southjerseymaniacs18u.com">admin@southjerseymaniacs18u.com</a><br>
    </div>
    <button id="aboutOKButton" data-dojo-type="dijit/form/Button" type="submit">Close</button>
  </div>
</div>

<body class="claro">
<div data-dojo-type="dijit/layout/BorderContainer" data-dojo-id="maniacsMain" data-dojo-props="style:'height:100%;width:100%'">
  <div class="user-header" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'top',splitter:false" style="height: 250px; background-color:#008080">
    <center>
      <a href="index.php"><img src="images/maniacslogo.jpg" height="175px" width="1147px" title="Maniacs"></a>
      <table border=0>
      <tr>
           <td><a target="_blank" title="Follow us on Facebook" href="http://www.facebook.com/sjmaniacs"><img alt="Follow us on Facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png" border=0></a></td>
           <td><a href="https://twitter.com/Maniacs18U" class="twitter-follow-button" data-show-count="false">Follow @Maniacs18U</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></td>
           <td><a target="_blank" title="Follow us on Instagram" href="http://www.instagram.com/18umaniacs"><img alt="Follow us on Instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png" border=0></a></td>
      </table>
      </center>
    <div id="maniacsMenuBar"></div>
  </div>
  <div id="maniacsWorkerPane" data-dojo-type="dijit/layout/ContentPane" data-dojo-id="maniacsWorkerPane" data-dojo-props="region:'center'" style="background-color:#A0A0A0">
    <center>
      <div class="maniacsWelcome">Welcome to the home of the South Jersey Maniacs 18U Softball!</div><br>
      <img src="images/Maniacs_MikeTrout.jpg" title="We met Mike Trout!" height="375px" width="500px"></img><br>
    </center>
  </div>
  <div id="maniacsStatusPane" data-dojo-type="dijit/layout/ContentPane" data-dojo-id="maniacsStatusPane" data-dojo-props="region:'bottom'" style="height: 110px; background-color:#008080">
    <center>
    <iframe src="//gc.com/scoreboard-5806830f88a349002308b43c?g=5&p=56198998c4abe90020bf7b07" width="728" height="90" scrolling="no" frameborder="0"></iframe>
    <br><div class="maniacsCopyright">&copy; 2016 - Site design: Harry Devine / Photos: Jeff Scozzafava</div>
    </center>
  </div>
</div>
</body>
</html>

