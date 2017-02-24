<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
<title>Maniacs 18U 2016-2017</title>

<link rel="stylesheet" type="text/css" href="/js/mobile-release/dojo/resources/dojo.css">
<link rel="stylesheet" type="text/css" href="/js/mobile-release/dijit/themes/claro/claro.css">
<link rel="stylesheet" type="text/css" href="/js/mobile-release/dojox/mobile/themes/iphone/iphone.css">
<link rel="stylesheet" type="text/css" href="/js/mobile-release/dojox/calendar/themes/claro/Calendar.css">
<link rel="stylesheet" type="text/css" href="css/maniacs.css">

<script>
  var dojoConfig = {
    async:true,
    parseOnLoad: true,
    mblAlwaysHideAddressBar: true
  };
</script>

<script type="text/javascript" src="/js/mobile-release/dojox/mobile/deviceTheme.js"></script>
<script type="text/javascript" src="/js/mobile-release/dojo/dojo.js"></script>

<script type="text/javascript">
require(["dojox/mobile",
         "dijit/form/TextBox",
         "dijit/form/DateTextBox",
         "dijit/form/TimeTextBox",
         "dijit/form/ComboBox",
         "dijit/form/CheckBox",
         "mobile/maniacsMobile",
         "dojo/domReady!"], 
  function(mobile, TextBox, DateTextBox, TimeTextBox,
           ComboBox, CheckBox, maniacsMobile){

    maniacsMobile.populateNews();
    maniacsMobile.populateCalendar();
    maniacsMobile.populatePhotos();
    maniacsMobile.populateEvents();
    maniacsMobile.populateGames();
    maniacsMobile.populatePractices();
    maniacsMobile.populateRoster();
    maniacsMobile.populateCoaches();
  });
</script>
</head>

<body class="claro">
<div class="maniacsCenter">
  <img src="images/maniacslogo_small.jpg" height="100px" width="100px">
  <center>
  <table border=0>
  <tr>
      <td><a target="_blank" title="Follow us on Facebook" href="http://www.facebook.com/sjmaniacs"><img alt="Follow us on Facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png" border=0></a></td>
      <td><a href="https://twitter.com/Maniacs18U" class="twitter-follow-button" data-show-count="false">Follow @Maniacs18U</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></td>
     <td><a target="_blank" title="Follow us on Instagram" href="http://www.instagram.com/18umaniacs"><img alt="Follow us on Instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png" border=0></a></td>
  </table>
  </center>
</div>

<div id="view1" data-dojo-type="dojox.mobile.View" data-dojo-props='selected:true'>
  <h1 data-dojo-type="dojox.mobile.Heading" fixed="top">Maniacs 18U</h1>
    <ul id="list1" data-dojo-type="dojox.mobile.RoundRectList">
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view2", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs News
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view3", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs Photos
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view4", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs Calendar
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view5", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs Events
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view6", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs Tournaments
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view7", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs Practices
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view8", arrowClass:"mblDomButtonSilverCircleDownArrow"'>
        Maniacs Roster
      </li>
      <li data-dojo-type="dojox.mobile.ListItem" data-dojo-props='icon:"mblDomButtonBluePlus", moveTo:"view9", arrowClass:"mblToolBarButtonArrow"'>
        Maniacs Coaches
      </li>
    </ul>
    <h1 data-dojo-type="dojox.mobile.Heading" fixed="bottom" style="height: 135px;">
      <div class="maniacsCenter"><iframe src="//gc.com/scoreboard-5806830f88a349002308b43c?g=5&p=56198998c4abe90020bf7b07" width="728" height="90" scrolling="no" frameborder="0"></iframe>
      <br><div class="maniacsCopyright">&copy; 2016 - Site design: Harry Devine / Photos: Jeff Scozzafava</div>
      </div>
    </h1>
</div>

<div id="view2" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs News</h1>
    <div id="mobileNews"></div>
</div>
<div id="view3" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Photos</h1>
    <div id="mobilePhotos"></div>
</div>

<div id="view4" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Calendar</h1>
    <div id="mobileCalendar"></div><br><hr>
    <div class="maniacsCenter">
      Event Information:<br>
      <div><span>Summary:</span></div>
      <div id="maniacsCalendarEventDesc" data-dojo-type="dijit/form/TextBox" style="width:225px;" data-dojo-props="disabled:true"></div>
      <div style=margin-top:10px><span>Start:</span></div>
      <div>
        <div id="maniacsCalendarStartDate" data-dojo-type="dijit/form/DateTextBox" style="width:120px;" data-dojo-props="disabled:true"></div>
        <div id="maniacsCalendarStartTime" data-dojo-type="dijit/form/TimeTextBox" style="width:100px;" data-dojo-props="disabled:true"></div>
      </div>
      <div style="margin-top:10px"><span>End:</span></div>
      <div>
        <div id="maniacsCalendarEndDate" data-dojo-type="dijit/form/DateTextBox" style="width:120px;" data-dojo-props="disabled:true"></div>
        <div id="maniacsCalendarEndTime" data-dojo-type="dijit/form/TimeTextBox" style="width:100px;" data-dojo-props="disabled:true"></div>
      </div>
      <div style="margin-top:10px"><span>Calendar:</span></div>
      <select id="maniacsCalendarType" data-dojo-type="dijit/form/ComboBox" style="width:225px;" data-dojo-props="disabled:true">
        <option>Events</option>
        <option>Games</option>
        <option>Practices</option>
        <option>Birthdays</option>
      </select>
      <div>
        <input type="checkbox" id="maniacsAllDayEvent" data-dojo-type="dijit/form/CheckBox">
        <label for="maniacsAllDayEvent">All-Day</label>
      </div>
    </div>
</div>

<div id="view5" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Events</h1>
    <div id="mobileEvents"></div>
</div>

<div id="view6" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Touraments</h1>
    <div id="mobileGames"></div>
</div>

<div id="view7" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Practices</h1>
    <div id="mobilePractices"></div>
</div>

<div id="view8" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Roster</h1>
    <div id="mobileRoster"></div>
</div>

<div id="view9" data-dojo-type="dojox.mobile.View">
  <h1 data-dojo-type="dojox.mobile.Heading" data-dojo-props='back:"Back", moveTo:"view1"'>Maniacs Coaches</h1>
    <div id="mobileCoaches"></div>
</div>
</body>
</html>

