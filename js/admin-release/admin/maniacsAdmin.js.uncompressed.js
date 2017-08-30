define("admin/maniacsAdmin", [
  "dijit/registry",
  "dijit/form/Button",
  "dijit/Dialog",
  "dijit/form/DateTextBox",
  "dijit/form/TimeTextBox",
  "dijit/form/TextBox",
  "dijit/form/Textarea",
  "dijit/form/Select",
  "dijit/Menu",
  "dijit/MenuItem",
  "dijit/ConfirmDialog",
  "dijit/form/ComboBox",
  "dojo/on",
  "dojo/_base/declare",
  "dojo/_base/json",
  "dojo/store/Observable",
  "dojo-smore/RequestMemory",
  "dojo/dom-attr",
  "dojo/request",
  "dojo/date",
  "dojo/date/locale",
  "dojo/date/stamp",
  "dojo/_base/lang",
  "dojo/has",
  "dgrid/Grid", 
  "dgrid/extensions/Pagination", 
  "dgrid/extensions/ColumnResizer",
  "dgrid/extensions/DijitRegistry",
  "dgrid/Selection",
  "dgrid/editor",
  "dgrid/util/touch"
], function(registry, Button, Dialog, DateTextBox, TimeTextBox, TextBox, Textarea, Select, Menu, MenuItem,
            ConfirmDialog, ComboBox, on, declare, json, Observable, RequestMemory, domAttr, request, date, locale, stamp, 
            lang, has, Grid, Pagination, ColumnResizer, DijitRegistry, Selection, editor,touchUtil) {

  return {

    /* Define the data stores */
    rosterStore: null,
    coachStore: null,
    newsStore: null,
    eventStore: null,
    photosStore: null,
    gamesStore: null,
    practiceStore: null,
    stateStore: new Observable(new RequestMemory({url:"json/states.json"})),
    coachTypeStore: new Observable(new RequestMemory({url:"json/coachType.json"})),
    batsthrowsStore: new Observable(new RequestMemory({url:"json/batsthrows.json"})),
    positionsStore: new Observable(new RequestMemory({url:"json/positions.json"})),
    gradyearStore: new Observable(new RequestMemory({url:"json/gradyear.json"})),
    yearsStore: new Observable(new RequestMemory({url:"json/years.json"})),
    gameTypeStore: new Observable(new RequestMemory({url:"json/gameType.json"})),
    alumniStore: new Observable (new RequestMemory({url:"json/alumni.json"})),

    /* Define the grids */
    rosterGrid: null,
    coachGrid: null,
    newsGrid: null,
    eventGrid: null,
    photoGrid: null,
    gamesGrid:null,
    practiceGrid: null,

    setupButtonHandlers: function() {
      var mod=this;

      /* Add Player Button handler */
      on(registry.byId("addPlayerButton"), 'click', function(evt) {

        var today = new Date();

        /* Create the Player First Name Text Box control */
        if (!registry.byId("rosterFirstName")){
            rosterFirstNameEdit = new TextBox({
            id: "rosterFirstName",
            name: "rosterFirstName",
            value: "",
            style: "width: 150px;"
          }, "rosterFirstName");
        }
        else {
          rosterFirstNameEdit.set("value", "");
        }

        /* Create the Player Last Name Text Box control */
        if (!registry.byId("rosterLastName")){
            rosterLastNameEdit = new TextBox({
            id: "rosterLastName",
            name: "rosterLastName",
            value: "",
            style: "width: 150px;"
          }, "rosterLastName");
        }
        else {
          rosterLastNameEdit.set("value", "");
        }

        /* Create the Roster Jersey Number Text Box control */
        if (!registry.byId("rosterJersey")){
            rosterJerseyEdit = new TextBox({
            id: "rosterJersey",
            name: "rosterJersey",
            value: "",
            style: "width: 50px;"
          }, "rosterJersey");
        }
        else {
          rosterJerseyEdit.set("value", "");
        }

        /* Create the Roster Position 1 control */
        if (!registry.byId("rosterPos1")) {
          rosterPos1 = new Select({
            id: "rosterPos1",
            name: "rosterPos1",
            value: 0,
            store: mod.positionsStore,
            labelAttr: "pos",
            sortByLabel: false,
            searchAttr: "pos",
            style: "width: 125px;"
          }, "rosterPos1");
        }
        else {
          rosterPos1.reset();
          rosterPos1.set("store", mod.positionsStore);
        }

        /* Create the Roster Position 2 control */
        if (!registry.byId("rosterPos2")) {
          rosterPos2 = new Select({
            id: "rosterPos2",
            name: "rosterPos2",
            value: 0,
            store: mod.positionsStore,
            labelAttr: "pos",
            sortByLabel: false,
            searchAttr: "pos",
            style: "width: 125px;"
          }, "rosterPos2");
        }
        else {
          rosterPos2.reset();
          rosterPos2.set("store", mod.positionsStore);
        }

        /* Create the Roster Position 3 control */
        if (!registry.byId("rosterPos3")) {
          rosterPos3 = new Select({
            id: "rosterPos3",
            name: "rosterPos3",
            value: 0,
            store: mod.positionsStore,
            labelAttr: "pos",
            sortByLabel: false,
            searchAttr: "pos",
            style: "width: 125px;"
          }, "rosterPos3");
        }
        else {
          rosterPos3.reset();
          rosterPos3.set("store", mod.positionsStore);
        }

        /* Create the Roster Throws control */
        if (!registry.byId("rosterThrows")) {
          rosterThrows = new Select({
            id: "rosterThrows",
            name: "rosterThrows",
            value: 1,
            store: mod.batsthrowsStore,
            labelAttr: "hand",
            sortByLabel: false,
            searchAttr: "hand",
            style: "width: 125px;"
          }, "rosterThrows");
        }
        else {
          rosterThrows.reset();
          rosterThrows.set("store", mod.batsthrowsStore);
        }

        /* Create the Roster Bats control */
        if (!registry.byId("rosterBats")) {
          rosterBats = new Select({
            id: "rosterBats",
            name: "rosterBats",
            value: 1,
            store: mod.batsthrowsStore,
            labelAttr: "hand",
            sortByLabel: false,
            searchAttr: "hand",
            style: "width: 125px;"
          }, "rosterBats");
        }
        else {
          rosterBats.reset();
          rosterBats.set("store", mod.batsthrowsStore);
        }

        /* Create the Player Height Text Box control */
        if (!registry.byId("rosterHeight")){
            rosterHeightEdit = new TextBox({
            id: "rosterHeight",
            name: "rosterHeight",
            value: "",
            style: "width: 100px;"
          }, "rosterHeight");
        }
        else {
          rosterHeightEdit.set("value", "");
        }

        /* Create the Player Weight Text Box control */
        if (!registry.byId("rosterWeight")){
            rosterWeightEdit = new TextBox({
            id: "rosterWeight",
            name: "rosterWeight",
            value: "",
            style: "width: 100px;"
          }, "rosterWeight");
        }
        else {
          rosterWeightEdit.set("value", "");
        }

        /* Create the Player Age Text Box control */
        if (!registry.byId("rosterAge")){
            rosterAgeEdit = new TextBox({
            id: "rosterAge",
            name: "rosterAge",
            value: "",
            style: "width: 50px;"
          }, "rosterAge");
        }
        else {
          rosterAgeEdit.set("value", "");
        }

        /* Create the Roster D.O.B. DateTextBox control */
        if (!registry.byId("rosterDOB")) {
          rosterDOBDateBox = new DateTextBox({
            value: "2000-01-01",
            name: "rosterDOB",
            id: "rosterDOB",
            style: "width: 100px;"
          }, "rosterDOB");
        }
        else {
          rosterDOBDateBox.set("value", "2000-01-01");
        }

        /* Create the Player Address Text Box control */
        if (!registry.byId("rosterAddress")){
            rosterAddressEdit = new TextBox({
            id: "rosterAddress",
            name: "rosterAddress",
            value: "",
            style: "width: 300px;"
          }, "rosterAddress");
        }
        else {
          rosterAddressEdit.set("value", "");
        }

        /* Create the Player City Text Box control */
        if (!registry.byId("rosterCity")){
            rosterCityEdit = new TextBox({
            id: "rosterCity",
            name: "rosterCity",
            value: "",
            style: "width: 200px;"
          }, "rosterCity");
        }
        else {
          rosterCityEdit.set("value", "");
        }

        /* Create the Roster State control */
        if (!registry.byId("rosterState")) {
          rosterState = new Select({
            id: "rosterState",
            name: "rosterState",
            value: "NJ",
            store: mod.stateStore,
            labelAttr: "displaystate",
            sortByLabel: false,
            searchAttr: "state",
            style: "width: 125px;"
          }, "rosterState");
        }
        else {
          rosterState.reset();
          rosterState.set("store", mod.stateStore);
          rosterState.set("value", "NJ");
        }

        /* Create the Player Zip Text Box control */
        if (!registry.byId("rosterZip")){
            rosterZipEdit = new TextBox({
            id: "rosterZip",
            name: "rosterZip",
            value: "",
            style: "width: 100px;"
          }, "rosterZip");
        }
        else {
          rosterZipEdit.set("value", "");
        }

        /* Create the Player Phone Text Box control */
        if (!registry.byId("rosterPhone")){
            rosterPhoneEdit = new TextBox({
            id: "rosterPhone",
            name: "rosterPhone",
            value: "",
            style: "width: 200px;"
          }, "rosterPhone");
        }
        else {
          rosterPhoneEdit.set("value", "");
        }

        /* Create the Player EMail Text Box control */
        if (!registry.byId("rosterEmail")){
            rosterEmailEdit = new TextBox({
            id: "rosterEmail",
            name: "rosterEmail",
            value: "",
            style: "width: 200px;"
          }, "rosterEmail");
        }
        else {
          rosterEmailEdit.set("value", "");
        }

        /* Create the Player Profile Pic Path Text Box control */
        if (!registry.byId("rosterProfilePic")){
            rosterProfilePicEdit = new TextBox({
            id: "rosterProfilePic",
            name: "rosterProfilePic",
            value: "",
            style: "width: 200px;"
          }, "rosterProfilePic");
        }
        else {
          rosterProfilePicEdit.set("value", "");
        }

        /* Create the Player Video URL Text Box control */
        if (!registry.byId("rosterVideoURL")){
            rosterVideoURLEdit = new TextBox({
            id: "rosterVideoURL",
            name: "rosterVideoURL",
            value: "",
            style: "width: 200px;"
          }, "rosterVideoURL");
        }
        else {
          rosterVideoURLEdit.set("value", "");
        }

        /* Create the High School Name Text Box control */
        if (!registry.byId("rosterHSName")){
            rosterHSNameEdit = new TextBox({
            id: "rosterHSName",
            name: "rosterHSName",
            value: "",
            style: "width: 200px;"
          }, "rosterHSName");
        }
        else {
          rosterHSNameEdit.set("value", "");
        }

        /* Create the High School Address Text Box control */
        if (!registry.byId("rosterHSAddress")){
            rosterHSAddressEdit = new TextBox({
            id: "rosterHSAddress",
            name: "rosterHSAddress",
            value: "",
            style: "width: 300px;"
          }, "rosterHSAddress");
        }
        else {
          rosterHSAddressEdit.set("value", "");
        }

        /* Create the High School City Text Box control */
        if (!registry.byId("rosterHSCity")){
            rosterHSCityEdit = new TextBox({
            id: "rosterHSCity",
            name: "rosterHSCity",
            value: "",
            style: "width: 200px;"
          }, "rosterHSCity");
        }
        else {
          rosterHSCityEdit.set("value", "");
        }

        /* Create the High School State control */
        if (!registry.byId("rosterHSState")) {
          rosterHSState = new Select({
            id: "rosterHSState",
            name: "rosterHSState",
            value: "NJ",
            store: mod.stateStore,
            labelAttr: "displaystate",
            sortByLabel: false,
            searchAttr: "state",
            style: "width: 125px;"
          }, "rosterHSState");
        }
        else {
          rosterHSState.reset();
          rosterHSState.set("store", mod.stateStore);
          rosterHSState.set("value", "NJ");
        }

        /* Create the High School Zip Text Box control */
        if (!registry.byId("rosterHSZip")){
            rosterHSZipEdit = new TextBox({
            id: "rosterHSZip",
            name: "rosterHSZip",
            value: "",
            style: "width: 100px;"
          }, "rosterHSZip");
        }
        else {
          rosterHSZipEdit.set("value", "");
        }

        /* Create the High School Phone Text Box control */
        if (!registry.byId("rosterHSPhone")){
            rosterHSPhoneEdit = new TextBox({
            id: "rosterHSPhone",
            name: "rosterHSPhone",
            value: "",
            style: "width: 200px;"
          }, "rosterHSPhone");
        }
        else {
          rosterHSPhoneEdit.set("value", "");
        }

        /* Create the High School Grad Year control */
        if (!registry.byId("rosterGradYear")) {
          rosterGradYear = new Select({
            id: "rosterGradYear",
            name: "rosterGradYear",
            value: 1,
            store: mod.gradyearStore,
            labelAttr: "year",
            sortByLabel: false,
            searchAttr: "year",
            style: "width: 125px;"
          }, "rosterGradYear");
        }
        else {
          rosterGradYear.reset();
          rosterGradYear.set("store", mod.gradyearStore);
        }

        /* Create the Athletic Director Text Box control */
        if (!registry.byId("rosterAthDirect")){
            rosterAthDirectEdit = new TextBox({
            id: "rosterAthDirect",
            name: "rosterAthDirect",
            value: "",
            style: "width: 200px;"
          }, "rosterAthDirect");
        }
        else {
          rosterAthDirectEdit.set("value", "");
        }

        /* Create the High School Coach Text Box control */
        if (!registry.byId("rosterHSCoach")){
            rosterHSCoachEdit = new TextBox({
            id: "rosterHSCoach",
            name: "rosterHSCoach",
            value: "",
            style: "width: 200px;"
          }, "rosterHSCoach");
        }
        else {
          rosterHSCoachEdit.set("value", "");
        }

        /* Create the High School Sports Played Text Box control */
        if (!registry.byId("rosterSportsPlayed")){
            rosterSportsPlayedEdit = new TextBox({
            id: "rosterSportsPlayed",
            name: "rosterSportsPlayed",
            value: "",
            style: "width: 200px;"
          }, "rosterSportsPlayed");
        }
        else {
          rosterSportsPlayedEdit.set("value", "");
        }

        /* Create the High School GPA Text Box control */
        if (!registry.byId("rosterGPA")){
            rosterGPAEdit = new TextBox({
            id: "rosterGPA",
            name: "rosterGPA",
            value: "",
            style: "width: 200px;"
          }, "rosterGPA");
        }
        else {
          rosterGPAEdit.set("value", "");
        }

        /* Create the High School Class Rank Text Box control */
        if (!registry.byId("rosterClassRank")){
            rosterClassRankEdit = new TextBox({
            id: "rosterClassRank",
            name: "rosterClassRank",
            value: "",
            style: "width: 200px;"
          }, "rosterClassRank");
        }
        else {
          rosterClassRankEdit.set("value", "");
        }

        /* Create the High School PSAT Text Box control */
        if (!registry.byId("rosterPSAT")){
            rosterPSATEdit = new TextBox({
            id: "rosterPSAT",
            name: "rosterPSAT",
            value: "",
            style: "width: 200px;"
          }, "rosterPSAT");
        }
        else {
          rosterPSATEdit.set("value", "");
        }

        /* Create the High School SAT Text Box control */
        if (!registry.byId("rosterSAT")){
            rosterSATEdit = new TextBox({
            id: "rosterSAT",
            name: "rosterSAT",
            value: "",
            style: "width: 200px;"
          }, "rosterSAT");
        }
        else {
          rosterSATEdit.set("value", "");
        }

        /* Create the High School Softball Highlights Text Box control */
        if (!registry.byId("rosterHSSoftballHighlights")){
            rosterHSSoftballHighlightsEdit = new Textarea({
            id: "rosterHSSoftballHighlights",
            name: "rosterHSSoftballHighlights",
            value: "",
            style: "width: 400px;"
          }, "rosterHSSoftballHighlights");
        }
        else {
          rosterHSSoftballHighlightsEdit.set("value", "");
        }

        /* Create the Travel Year control */
        if (!registry.byId("rosterTravelYear")) {
          rosterTravelYear = new Select({
            id: "rosterTravelYear",
            name: "rosterTravelYear",
            value: 1,
            store: mod.yearsStore,
            labelAttr: "year",
            sortByLabel: false,
            searchAttr: "year",
            style: "width: 125px;"
          }, "rosterTravelYear");
        }
        else {
          rosterTravelYear.reset();
          rosterTravelYear.set("store", mod.yearsStore);
          rosterTravelYear.set("value", 1);
        }

        /* Create the Travel Softball Coach Text Box control */
        if (!registry.byId("rosterTravelCoach")){
            rosterTravelCoachEdit = new TextBox({
            id: "rosterTravelCoach",
            name: "rosterTravelCoach",
            value: "",
            style: "width: 400px;"
          }, "rosterTravelCoach");
        }
        else {
          rosterTravelCoachEdit.set("value", "");
        }

        /* Create the Travel Softball Coach Phone Text Box control */
        if (!registry.byId("rosterTravelCoachPhone")){
            rosterTravelCoachPhoneEdit = new TextBox({
            id: "rosterTravelCoachPhone",
            name: "rosterTravelCoachPhone",
            value: "",
            style: "width: 200px;"
          }, "rosterTravelCoachPhone");
        }
        else {
          rosterTravelCoachPhoneEdit.set("value", "");
        }

        /* Create the Travel Softball Coach Email Text Box control */
        if (!registry.byId("rosterTravelCoachEmail")){
            rosterTravelCoachEmailEdit = new TextBox({
            id: "rosterTravelCoachEmail",
            name: "rosterTravelCoachEmail",
            value: "",
            style: "width: 400px;"
          }, "rosterTravelCoachEmail");
        }
        else {
          rosterTravelCoachEmailEdit.set("value", "");
        }

        /* Create the Travel Stats Text Box control */
        if (!registry.byId("rosterTravelHSStats")){
            rosterTravelHSStatsEdit = new TextBox({
            id: "rosterTravelHSStats",
            name: "rosterTravelHSStats",
            value: "",
            style: "width: 400px;"
          }, "rosterTravelHSStats");
        }
        else {
          rosterTravelHSStatsEdit.set("value", "");
        }

        /* Create the Father Name Text Box control */
        if (!registry.byId("rosterDadName")){
            rosterDadNameEdit = new TextBox({
            id: "rosterDadName",
            name: "rosterDadName",
            value: "",
            style: "width: 200px;"
          }, "rosterDadName");
        }
        else {
          rosterDadNameEdit.set("value", "");
        }

        /* Create the Father Phone Text Box control */
        if (!registry.byId("rosterDadPhone")){
            rosterDadPhoneEdit = new TextBox({
            id: "rosterDadPhone",
            name: "rosterDadPhone",
            value: "",
            style: "width: 200px;"
          }, "rosterDadPhone");
        }
        else {
          rosterDadPhoneEdit.set("value", "");
        }

        /* Create the Mother Name Text Box control */
        if (!registry.byId("rosterMomName")){
            rosterMomNameEdit = new TextBox({
            id: "rosterMomName",
            name: "rosterMomName",
            value: "",
            style: "width: 200px;"
          }, "rosterMomName");
        }
        else {
          rosterMomNameEdit.set("value", "");
        }

        /* Create the Mother Phone Text Box control */
        if (!registry.byId("rosterMomPhone")){
            rosterMomPhoneEdit = new TextBox({
            id: "rosterMomPhone",
            name: "rosterMomPhone",
            value: "",
            style: "width: 200px;"
          }, "rosterMomPhone");
        }
        else {
          rosterMomPhoneEdit.set("value", "");
        }

        /* Create the Parent Email Text Box control */
        if (!registry.byId("rosterParentEmail")){
            rosterParentEmailEdit = new TextBox({
            id: "rosterParentEmail",
            name: "rosterParentEmail",
            value: "",
            style: "width: 200px;"
          }, "rosterParentEmail");
        }
        else {
          rosterParentEmailEdit.set("value", "");
        }

        /* Create the Personal Statement Text Box control */
        if (!registry.byId("rosterPersonalStatement")){
            rosterPersonalStatementEdit = new Textarea({
            id: "rosterPersonalStatement",
            name: "rosterPersonalStatement",
            value: "",
            style: "width: 400px;"
          }, "rosterPersonalStatement");
        }
        else {
          rosterPersonalStatementEdit.set("value", "");
        }

        /* Create the Personal Clubs Text Box control */
        if (!registry.byId("rosterPersonalClubs")){
            rosterPersonalClubsEdit = new Textarea({
            id: "rosterPersonalClubs",
            name: "rosterPersonalClubs",
            value: "",
            style: "width: 400px;"
          }, "rosterPersonalClubs");
        }
        else {
          rosterPersonalClubsEdit.set("value", "");
        }

        /* Create the Personal Community Text Box control */
        if (!registry.byId("rosterPersonalCommunity")){
            rosterPersonalCommunityEdit = new Textarea({
            id: "rosterPersonalCommunity",
            name: "rosterPersonalCommunity",
            value: "",
            style: "width: 400px;"
          }, "rosterPersonalCommunity");
        }
        else {
          rosterPersonalCommunityEdit.set("value", "");
        }

        /* Add Roster Member button */
        var rosterAddSignal = on.once(registry.byId("rosterAddButton"), 'click', function(evt) {
          mod.addPlayer();
          rosterCancelSignal.remove();
        });

        /* Add Roster Member Cancel button */
        var rosterCancelSignal = on.once(registry.byId("rosterCancelButton"), 'click', function(evt) {
          rosterAddSignal.remove();
        });

        /* Show the Add Roster Member dialog */
        registry.byId("RosterDlg").show();
      });

      /* Add Coach Button handler */
      on(registry.byId("addCoachButton"), 'click', function(evt) {

        /* Create the Coach Name Text Box control */
        if (!registry.byId("coachName")){
            coachNameEdit = new TextBox({
            id: "coachName",
            name: "coachName",
            value: "",
            style: "width: 250px;"
          }, "coachName");
        }
        else {
          coachNameEdit.set("value", "");
        }

        /* Create the Coach Phone Text Box control */
        if (!registry.byId("coachPhone")){
            coachPhoneEdit = new TextBox({
            id: "coachPhone",
            name: "coachPhone",
            value: "",
            style: "width: 250px;"
          }, "coachPhone");
        }
        else {
          coachPhoneEdit.set("value", "");
        }

        /* Create the Coach Email Text Box control */
        if (!registry.byId("coachEmail")){
            coachEmailEdit = new TextBox({
            id: "coachEmail",
            name: "coachEmail",
            value: "",
            style: "width: 250px;"
          }, "coachEmail");
        }
        else {
          coachEmailEdit.set("value", "");
        }

        /* Create the Coach Type control */
        if (!registry.byId("coachType")) {
          coachTypeSelect = new Select({
            id: "coachType",
            name: "coachType",
            value: 1,
            store: mod.coachTypeStore,
            labelAttr: "type",
            sortByLabel: false,
            searchAttr: "type",
            style: "width: 125px;"
          }, "coachType");
        }
        else {
          coachTypeSelect.reset();
          coachTypeSelect.set("store", mod.coachTypeStore);
        }

        /* Create the Coach Image Path Text Box control */
        if (!registry.byId("coachImagePath")){
            coachImagePath = new TextBox({
            id: "coachImagePath",
            name: "coachImagePath",
            value: "",
            style: "width: 250px;"
          }, "coachImagePath");
        }
        else {
          coachImagePath.set("value", "");
        }

        /* Add Coach submit button */
        on.once(registry.byId("coachAddButton"), 'click', function() {
          mod.addCoach();
        });

        registry.byId("CoachDlg").show();
      });

      /* Add News Item Button handler */
      on(registry.byId("addNewsButton"), 'click', function(evt) {

        var today = new Date();

        /* Create the News DateTextBox control */
        if (!registry.byId("newsDate")) {
          newsDateBox = new DateTextBox({
            value: today,
            name: "newsDate",
            id: "newsDate",
            style: "width: 100px;"
          }, "newNewsDate");
        }
        else {
          newsDateBox.set("value", today);
        }

        /* Create the News Description Text Box control */
        if (!registry.byId("newsDescEdit")){
            newsDescEdit = new TextBox({
            id: "newsDescEdit",
            name: "newsDescEdit",
            value: "",
            style: "width: 250px;"
          }, "newNewsDesc");
        }
        else {
          newsDescEdit.set("value", "");
        }

        /* Create the News Data Text Area control */
        if (!registry.byId("newsDataEdit")){
            newsDataEdit = new Textarea({
            id: "newsDataEdit",
            name: "newsDataEdit",
            value: "",
            style: "width: 250px;"
          }, "newNewsData");
        }
        else {
          newsDataEdit.set("value", "");
        }

        /* Create the News Image Path Text Box control */
        if (!registry.byId("newsImagePath")){
            newsImagePath = new TextBox({
            id: "newsImagePath",
            name: "newsImagePath",
            value: "",
            style: "width: 250px;"
          }, "newImagePath");
        }
        else {
          newsImagePath.set("value", "");
        }

        /* Add News Item submit button */
        on.once(registry.byId("newsAddButton"), 'click', function() {
          mod.addNewsItem();
        });


        registry.byId("NewsItemDlg").show();
      });

      /* Add Events Button handler */
      on(registry.byId("addEventButton"), 'click', function(evt) {
        var today = new Date();

        /* Create the Event DateTextBox control */
        if (!registry.byId("eventDate")) {
          eventDateBox = new DateTextBox({
            value: today,
            name: "eventDate",
            id: "eventDate",
            style: "width: 100px;"
          }, "newEventDate");
        }
        else {
          eventDateBox.set("value", today);
        }

        /* Create the Event Description Text Box control */
        if (!registry.byId("eventDescEdit")){
            eventDescEdit = new TextBox({
            id: "eventDescEdit",
            name: "eventDescEdit",
            value: "",
            style: "width: 250px;"
          }, "newEventDesc");
        }
        else {
          eventDescEdit.set("value", "");
        }

        /* Create the News Data Text Area control */
        if (!registry.byId("eventDataEdit")){
            eventDataEdit = new Textarea({
            id: "eventDataEdit",
            name: "eventDataEdit",
            value: "",
            style: "width: 250px;"
          }, "newEventData");
        }
        else {
          eventDataEdit.set("value", "");
        }

        /* Create the Event Start TimeTextBox control */
        if (!registry.byId("eventStartEdit")){
            eventStartTimeBox = new TimeTextBox({
            id: "eventStartEdit",
            name: "eventStartEdit",
            value: today,
            style: "width: 100px;"
          }, "newEventStartTime");
        }
        else {
          eventStartTimeBox.set("value", today);
        }

        /* Create the Event End TimeTextBox control */
        if (!registry.byId("eventEndEdit")){
            eventEndTimeBox = new TimeTextBox({
            id: "eventEndEdit",
            name: "eventEndEdit",
            value: today,
            style: "width: 100px;"
          }, "newEventEndTime");
        }
        else {
          eventEndTimeBox.set("value", today);
        }

        /* Create the Event Address Text Box control */
        if (!registry.byId("eventAddress")){
            eventAddressEdit = new TextBox({
            id: "eventAddress",
            name: "eventAddress",
            value: "",
            style: "width: 200px;"
          }, "newEventAddress");
        }
        else {
          eventAddressEdit.set("value", "");
        }

        /* Create the Event City Text Box control */
        if (!registry.byId("eventCity")){
            eventCityEdit = new TextBox({
            id: "eventCity",
            name: "eventCity",
            value: "",
            style: "width: 150px;"
          }, "newEventCity");
        }
        else {
          eventCityEdit.set("value", "");
        }

        /* Create the Event State control */
        if (!registry.byId("eventState")) {
          eventState = new Select({
            id: "eventState",
            name: "eventState",
            value: "NJ",
            store: mod.stateStore,
            labelAttr: "displaystate",
            sortByLabel: false,
            searchAttr: "state",
            style: "width: 125px;"
          }, "newEventState");
        }
        else {
          eventState.reset();
          eventState.set("store", mod.stateStore);
          eventState.set("value", "NJ");
        }

        /* Create the Event Zip Text Box control */
        if (!registry.byId("eventZip")){
            eventZipEdit = new TextBox({
            id: "eventZip",
            name: "eventZip",
            value: "",
            style: "width: 100px;"
          }, "newEventZip");
        }
        else {
          eventZipEdit.set("value", "");
        }

        /* Add Event submit button */
        on.once(registry.byId("eventAddButton"), 'click', function() {
          mod.addEvent();
        });

        registry.byId("EventDlg").show();
      });

      /* Add Team Photo Button handler */
      on(registry.byId("addPhotoButton"), 'click', function(evt) {

        /* Create the Photo Path Text Area control */
        if (!registry.byId("photoPath")){
            photoPathEdit = new TextBox({
            id: "photoPath",
            name: "photoPath",
            value: "",
            style: "width: 250px;"
          }, "newPhotoPath");
        }
        else {
          photoPathEdit.set("value", "");
        }

        /* Create the Photo URL Text Area control */
        if (!registry.byId("photoURL")){
            photoURLEdit = new TextBox({
            id: "photoURL",
            name: "photoURL",
            value: "",
            style: "width: 250px;"
          }, "newPhotoURL");
        }
        else {
          photoURLEdit.set("value", "");
        }

        /* Create the Photo Description Text Box control */
        if (!registry.byId("photoDesc")){
            photoDescEdit = new Textarea({
            id: "photoDesc",
            name: "photoDesc",
            value: "",
            style: "width: 250px;"
          }, "newPhotoDesc");
        }
        else {
          photoDescEdit.set("value", "");
        }

        /* Add Team Photo submit button */
        on.once(registry.byId("photoAddButton"), 'click', function() {
          mod.addPhoto();
        });

        registry.byId("PhotoDlg").show();
      });

      /* Add Game Button handler */
      on(registry.byId("addGameButton"), 'click', function(evt) {
        var today = new Date();

        /* Create the Game Date DateTextBox control */
        if (!registry.byId("gameDate")) {
          gameDateBox = new DateTextBox({
            value: today,
            name: "gameDate",
            id: "gameDate",
            style: "width: 100px;"
          }, "gameDate");
        }
        else {
          gameDateBox.set("value", today);
        }

        /* Create the Game Start TimeTextBox control */
        if (!registry.byId("gameTime")){
            gameStartTimeBox = new TimeTextBox({
            id: "gameTime",
            name: "gameTime",
            value: today,
            style: "width: 100px;"
          }, "gameTime");
        }
        else {
          gameStartTimeBox.set("value", today);
        }

        /* Create the Game Type control */
        if (!registry.byId("gameType")) {
          gameTypeSelect = new Select({
            id: "gameType",
            name: "gameType",
            value: 1,
            store: mod.gameTypeStore,
            labelAttr: "type",
            sortByLabel: false,
            searchAttr: "type",
            style: "width: 125px;"
          }, "gameType");
        }
        else {
          gameTypeSelect.reset();
          gameTypeSelect.set("store", mod.gameTypeStore);
        }

        /* Create the Game Description Text Box control */
        if (!registry.byId("gameDesc")){
            gameDescEdit = new TextBox({
            id: "gameDesc",
            name: "gameDesc",
            value: "",
            style: "width: 200px;"
          }, "gameDesc");
        }
        else {
          gameDescEdit.set("value", "");
        }

        /* Create the Game Opponent Text Box control */
        if (!registry.byId("gameOpponent")){
            gameOpponentEdit = new TextBox({
            id: "gameOpponent",
            name: "gameOpponent",
            value: "",
            style: "width: 200px;"
          }, "gameOpponent");
        }
        else {
          gameOpponentEdit.set("value", "");
        }

        /* Create the Game Address Text Box control */
        if (!registry.byId("gameAddress")){
            gameAddressEdit = new TextBox({
            id: "gameAddress",
            name: "gameAddress",
            value: "",
            style: "width: 200px;"
          }, "gameAddress");
        }
        else {
          gameAddressEdit.set("value", "");
        }

        /* Create the Game City Text Box control */
        if (!registry.byId("gameCity")){
            gameCityEdit = new TextBox({
            id: "gameCity",
            name: "gameCity",
            value: "",
            style: "width: 150px;"
          }, "gameCity");
        }
        else {
          gameCityEdit.set("value", "");
        }

        /* Create the Game State control */
        if (!registry.byId("gameState")) {
          gameState = new Select({
            id: "gameState",
            name: "gameState",
            value: "NJ",
            store: mod.stateStore,
            labelAttr: "displaystate",
            sortByLabel: false,
            searchAttr: "state",
            style: "width: 125px;"
          }, "gameState");
        }
        else {
          gameState.reset();
          gameState.set("store", mod.stateStore);
          gameState.set("value", "NJ");
        }

        /* Create the Game Zip Text Box control */
        if (!registry.byId("gameZip")){
            gameZipEdit = new TextBox({
            id: "gameZip",
            name: "gameZip",
            value: "",
            style: "width: 100px;"
          }, "gameZip");
        }
        else {
          gameZipEdit.set("value", "");
        }

        /* Add Game submit button */
        on.once(registry.byId("gameAddButton"), 'click', function() {
          mod.addGame();
        });

        registry.byId("GameDlg").show();

      });

      /* Add Practice Button handler */
      on(registry.byId("addPracticeButton"), 'click', function(evt) {
        var today = new Date();

        /* Create the Practice Date DateTextBox control */
        if (!registry.byId("practiceDate")) {
          practiceDateBox = new DateTextBox({
            value: today,
            name: "practiceDate",
            id: "practiceDate",
            style: "width: 100px;"
          }, "practiceDate");
        }
        else {
          practiceDateBox.set("value", today);
        }

        /* Create the Practice Start TimeTextBox control */
        if (!registry.byId("practiceStart")){
            practiceStartTimeBox = new TimeTextBox({
            id: "practiceStart",
            name: "practiceStart",
            value: today,
            style: "width: 100px;"
          }, "practiceStartTime");
        }
        else {
          practiceStartTimeBox.set("value", today);
        }

        /* Create the Practice End TimeTextBox control */
        if (!registry.byId("practiceEnd")){
            practiceEndTimeBox = new TimeTextBox({
            id: "practiceEnd",
            name: "practiceEnd",
            value: today,
            style: "width: 100px;"
          }, "practiceEndTime");
        }
        else {
          practiceEndTimeBox.set("value", today);
        }

        /* Create the Practice Address Text Box control */
        if (!registry.byId("practiceAddress")){
            practiceAddressEdit = new TextBox({
            id: "practiceAddress",
            name: "practiceAddress",
            value: "",
            style: "width: 200px;"
          }, "practiceAddress");
        }
        else {
          practiceAddressEdit.set("value", "");
        }

        /* Create the Practice City Text Box control */
        if (!registry.byId("practiceCity")){
            practiceCityEdit = new TextBox({
            id: "practiceCity",
            name: "practiceCity",
            value: "",
            style: "width: 150px;"
          }, "practiceCity");
        }
        else {
          practiceCityEdit.set("value", "");
        }

        /* Create the Practice State control */
        if (!registry.byId("practiceState")) {
          practiceState = new Select({
            id: "practiceState",
            name: "practiceState",
            value: "NJ",
            store: mod.stateStore,
            labelAttr: "displaystate",
            sortByLabel: false,
            searchAttr: "state",
            style: "width: 125px;"
          }, "practiceState");
        }
        else {
          practiceState.reset();
          practiceState.set("store", mod.stateStore);
          practiceState.set("value", "NJ");
        }

        /* Create the Practice Zip Text Box control */
        if (!registry.byId("practiceZip")){
            practiceZipEdit = new TextBox({
            id: "practiceZip",
            name: "practiceZip",
            value: "",
            style: "width: 100px;"
          }, "practiceZip");
        }
        else {
          practiceZipEdit.set("value", "");
        }

        /* Create the Practice Description Text Area control */
        if (!registry.byId("practiceDesc")){
            practiceDescEdit = new Textarea({
            id: "practiceDesc",
            name: "practiceDesc",
            value: "",
            style: "width: 250px;"
          }, "practiceDesc");
        }
        else {
          practiceDescEdit.set("value", "");
        }

        /* Add Practice submit button */
        on.once(registry.byId("practiceAddButton"), 'click', function() {
          mod.addPractice();
        });

        registry.byId("PracticeDlg").show();

      });
    },

    setupGrids: function() {
      var mod=this;
      /* Create the grid instance */
      var StandardGrid = declare([Grid, Selection, Pagination, ColumnResizer, DijitRegistry]);
      var activeItem;
      
      /* Roster Grid */
      mod.rosterStore = new Observable(new RequestMemory({url:"getAdminRoster.php"}));
      if (!registry.byId("maniacsPlayerGrid")) {
        mod.rosterGrid = new StandardGrid({
          columns: {
            id: {label: "Player ID", field: "id", width: 75},
            number: {label: "Number", field: "number"},
            firstname: {label: "First Name", field: "firstname"},
            lastname: {label: "Last Name", field: "lastname"},
            position: {label: "Position", field: "position1"},
            alumni: {label: "Alumni?", field: "alumni"},
            pic: {label: "Profile Pic", field: "profile_pic_path"}
          },
          loadingMessage: "Loading Maniacs Roster",
          errorMessage: "Error loading Maniacs Roster",
          noDataMessage: "No roster members currently exist",
          store: mod.rosterStore,
          sort: [{attribute: "number", descending: false}],
          selectionMode: "none",
          rowsPerPage: 20
        }, "maniacsPlayerGrid");
      }
      else {
        mod.rosterGrid.set("store", mod.rosterStore);
      }
      mod.rosterGrid.startup();

      /* Handler for the Player Grid context menu */
      on(mod.rosterGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.rosterGrid.row(evt);
        activeItem = row && row.data;
      });

      var deletePlayerMenu = new Menu({
        targetNodeIds: [mod.rosterGrid.domNode]
      });

      deletePlayerMenu.addChild(new MenuItem({
        label: "Delete Player",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deletePlayer(activeItem.id);
        }
      }));

      deletePlayerMenu.addChild(new MenuItem({
        label: "Create PDF datasheet",
        iconClass: "pdfItem",
        onClick: function() {
          mod.pdfData(activeItem.id);
        }
      }));

      /* Handle a double-click on a player, which will open the roster */
      /* dialog to allow the admin to edit that user's information     */
      on(mod.rosterGrid, '.dgrid-content .dgrid-cell:dblclick', function (evt) {
        var id = mod.rosterGrid.row(evt).data.id;
        request.post("getPlayerProfile.php", {
          handleAs: "json",
          method: "POST",
          data: {id: id}
        }).then(function (data) {

          /* Create the Player First Name Text Box control */
          if (!registry.byId("editFirstName")){
              editFirstNameEdit = new TextBox({
              id: "editFirstName",
              name: "editFirstName",
              value: data[0].firstname,
              style: "width: 150px;"
            }, "editFirstName");
          }
          else {
            editFirstNameEdit.set("value", data[0].firstname);
          }

          /* Create the Player Last Name Text Box control */
          if (!registry.byId("editLastName")){
              editLastNameEdit = new TextBox({
              id: "editLastName",
              name: "editLastName",
              value: data[0].lastname,
              style: "width: 150px;"
            }, "editLastName");
          }
          else {
            editLastNameEdit.set("value", data[0].lastname);
          }

          /* Create the Roster Jersey Number Text Box control */
          if (!registry.byId("editJersey")){
              editJerseyEdit = new TextBox({
              id: "editJersey",
              name: "editJersey",
              value: data[0].number,
              style: "width: 50px;"
            }, "editJersey");
          }
          else {
            editJerseyEdit.set("value", data[0].number);
          }

          /* Set the Alumni designation */
          if (!registry.byId("editAlumni")) {
            editAlumni = new ComboBox({
              id: "editAlumni",
              name: "editAlumni",
              value: data[0].alumni,
              store: mod.alumniStore,
              searchAttr: "alumni",
              style: "width: 125px;"
            }, "editAlumni");
          }
          else {
            editAlumni.reset();
            editAlumni.set("value", data[0].alumni);
            editAlumni.set("store", mod.alumniStore);
          }

          /* Create the Roster Position 1 control */
          if (!registry.byId("editPos1")) {
            editPos1 = new Select({
              id: "editPos1",
              name: "editPos1",
              value: data[0].position1,
              store: mod.positionsStore,
              labelAttr: "pos",
              sortByLabel: false,
              searchAttr: "pos",
              style: "width: 125px;"
            }, "editPos1");
          }
          else {
            editPos1.reset();
            editPos1.set("value", data[0].position1);
            editPos1.set("store", mod.positionsStore);
          }

          /* Create the Roster Position 2 control */
          if (!registry.byId("editPos2")) {
            editPos2 = new Select({
              id: "editPos2",
              name: "editPos2",
              value: data[0].position2,
              store: mod.positionsStore,
              labelAttr: "pos",
              sortByLabel: false,
              searchAttr: "pos",
              style: "width: 125px;"
            }, "editPos2");
          }
          else {
            editPos2.reset();
            editPos2.set("value", data[0].position2);
            editPos2.set("store", mod.positionsStore);
          }

          /* Create the Roster Position 3 control */
          if (!registry.byId("editPos3")) {
            editPos3 = new Select({
              id: "editPos3",
              name: "editPos3",
              value: data[0].position3,
              store: mod.positionsStore,
              labelAttr: "pos",
              sortByLabel: false,
              searchAttr: "pos",
              style: "width: 125px;"
            }, "editPos3");
          }
          else {
            editPos3.reset();
            editPos3.set("value", data[0].position3);
            editPos3.set("store", mod.positionsStore);
          }

          /* Create the Roster Throws control */
          if (!registry.byId("editThrows")) {
            editThrows = new Select({
              id: "editThrows",
              name: "editThrows",
              value: data[0].throws,
              store: mod.batsthrowsStore,
              labelAttr: "hand",
              sortByLabel: false,
              searchAttr: "hand",
              style: "width: 125px;"
            }, "editThrows");
          }
          else {
            editThrows.reset();
            editThrows.set("value", data[0].throws);
            editThrows.set("store", mod.batsthrowsStore);
          }

          /* Create the Roster Bats control */
          if (!registry.byId("editBats")) {
            editBats = new Select({
              id: "editBats",
              name: "editBats",
              value: data[0].bats,
              store: mod.batsthrowsStore,
              labelAttr: "hand",
              sortByLabel: false,
              searchAttr: "hand",
              style: "width: 125px;"
            }, "editBats");
          }
          else {
            editBats.reset();
            editBats.set("value", data[0].bats);
            editBats.set("store", mod.batsthrowsStore);
          }

          /* Create the Player Height Text Box control */
          if (!registry.byId("editHeight")){
              editHeightEdit = new TextBox({
              id: "editHeight",
              name: "editHeight",
              value: data[0].height,
              style: "width: 100px;"
            }, "editHeight");
          }
          else {
            editHeightEdit.set("value", data[0].height);
          }

          /* Create the Player Weight Text Box control */
          if (!registry.byId("editWeight")){
              editWeightEdit = new TextBox({
              id: "editWeight",
              name: "editWeight",
              value: data[0].weight,
              style: "width: 100px;"
            }, "editWeight");
          }
          else {
            editWeightEdit.set("value", data[0].weight);
          }

          /* Create the Player Age Text Box control */
          if (!registry.byId("editAge")){
              editAgeEdit = new TextBox({
              id: "editAge",
              name: "editAge",
              value: data[0].age,
              style: "width: 50px;"
            }, "editAge");
          }
          else {
            editAgeEdit.set("value", data[0].age);
          }

          /* Create the Roster D.O.B. DateTextBox control */
          if (!registry.byId("editDOB")) {
            editDOBDateBox = new DateTextBox({
              value: data[0].dob,
              name: "editDOB",
              id: "editDOB",
              style: "width: 100px;"
            }, "editDOB");
          }
          else {
            editDOBDateBox.set("value", data[0].dob);
          }

          /* Create the Player Address Text Box control */
          if (!registry.byId("editAddress")){
              editAddressEdit = new TextBox({
              id: "editAddress",
              name: "editAddress",
              value: data[0].address,
              style: "width: 300px;"
            }, "editAddress");
          }
          else {
            editAddressEdit.set("value", data[0].address);
          }

          /* Create the Player City Text Box control */
          if (!registry.byId("editCity")){
              editCityEdit = new TextBox({
              id: "editCity",
              name: "editCity",
              value: data[0].city,
              style: "width: 200px;"
            }, "editCity");
          }
          else {
            editCityEdit.set("value", data[0].city);
          }

          /* Create the Roster State control */
          if (!registry.byId("editState")) {
            editState = new Select({
              id: "editState",
              name: "editState",
              value: data[0].state,
              store: mod.stateStore,
              labelAttr: "displaystate",
              sortByLabel: false,
              searchAttr: "state",
              style: "width: 125px;"
            }, "editState");
          }
          else {
            editState.reset();
            editState.set("store", mod.stateStore);
            editState.set("value", data[0].state);
          }

          /* Create the Player Zip Text Box control */
          if (!registry.byId("editZip")){
              editZipEdit = new TextBox({
              id: "editZip",
              name: "editZip",
              value: data[0].zip,
              style: "width: 100px;"
            }, "editZip");
          }
          else {
            editZipEdit.set("value", data[0].zip);
          }

          /* Create the Player Phone Text Box control */
          if (!registry.byId("editPhone")){
              editPhoneEdit = new TextBox({
              id: "editPhone",
              name: "editPhone",
              value: data[0].phone,
              style: "width: 200px;"
            }, "editPhone");
          }
          else {
            editPhoneEdit.set("value", data[0].phone);
          }

          /* Create the Player EMail Text Box control */
          if (!registry.byId("editEmail")){
              editEmailEdit = new TextBox({
              id: "editEmail",
              name: "editEmail",
              value: data[0].email,
              style: "width: 200px;"
            }, "editEmail");
          }
          else {
            editEmailEdit.set("value", data[0].email);
          }

          /* Create the Player Profile Pic Path Text Box control */
          if (!registry.byId("editProfilePic")){
              editProfilePicEdit = new TextBox({
              id: "editProfilePic",
              name: "editProfilePic",
              value: data[0].profile_pic_path,
              style: "width: 200px;"
            }, "editProfilePic");
          }
          else {
            editProfilePicEdit.set("value", data[0].profile_pic_path);
          }

          /* Create the Player Video URL Text Box control */
          if (!registry.byId("editVideoURL")){
              editVideoURLEdit = new TextBox({
              id: "editVideoURL",
              name: "editVideoURL",
              value: data[0].video_url,
              style: "width: 200px;"
            }, "editVideoURL");
          }
          else {
            editVideoURLEdit.set("value", data[0].video_url);
          }

          /* Create the High School Name Text Box control */
          if (!registry.byId("editHSName")){
              editHSNameEdit = new TextBox({
              id: "editHSName",
              name: "editHSName",
              value: data[0].hs,
              style: "width: 200px;"
            }, "editHSName");
          }
          else {
            editHSNameEdit.set("value", data[0].hs);
          }

          /* Create the High School Address Text Box control */
          if (!registry.byId("editHSAddress")){
              editHSAddressEdit = new TextBox({
              id: "editHSAddress",
              name: "editHSAddress",
              value: data[0].hs_address,
              style: "width: 300px;"
            }, "editHSAddress");
          }
          else {
            editHSAddressEdit.set("value", data[0].hs_address);
          }

          /* Create the High School City Text Box control */
          if (!registry.byId("editHSCity")){
              editHSCityEdit = new TextBox({
              id: "editHSCity",
              name: "editHSCity",
              value: data[0].hs_city,
              style: "width: 200px;"
            }, "editHSCity");
          }
          else {
            editHSCityEdit.set("value", data[0].hs_city);
          }

          /* Create the High School State control */
          if (!registry.byId("editHSState")) {
            editHSState = new Select({
              id: "editHSState",
              name: "editHSState",
              value: data[0].hs_state,
              store: mod.stateStore,
              labelAttr: "displaystate",
              sortByLabel: false,
              searchAttr: "state",
              style: "width: 125px;"
            }, "editHSState");
          }
          else {
            editHSState.reset();
            editHSState.set("store", mod.stateStore);
            editHSState.set("value", data[0].hs_state);
          }

          /* Create the High School Zip Text Box control */
          if (!registry.byId("editHSZip")){
              editHSZipEdit = new TextBox({
              id: "editHSZip",
              name: "editHSZip",
              value: data[0].hs_zip,
              style: "width: 100px;"
            }, "editHSZip");
          }
          else {
            editHSZipEdit.set("value", data[0].hs_zip);
          }

          /* Create the High School Phone Text Box control */
          if (!registry.byId("editHSPhone")){
              editHSPhoneEdit = new TextBox({
              id: "editHSPhone",
              name: "editHSPhone",
              value: data[0].hs_phone,
              style: "width: 200px;"
            }, "editHSPhone");
          }
          else {
            editHSPhoneEdit.set("value", data[0].hs_phone);
          }

          /* Create the High School Grad Year control */
          if (!registry.byId("editGradYear")) {
          editGradYear = new Select({
              id: "editGradYear",
              name: "editGradYear",
              value: data[0].grad_date,
              store: mod.gradyearStore,
              labelAttr: "year",
              sortByLabel: false,
              searchAttr: "year",
              style: "width: 125px;"
            }, "editGradYear");
          }
          else {
            editGradYear.reset();
            editGradYear.set("value", data[0].grad_date);
            editGradYear.set("store", mod.gradyearStore);
          }

          /* Create the Athletic Director Text Box control */
          if (!registry.byId("editAthDirect")){
              editAthDirectEdit = new TextBox({
              id: "editAthDirect",
              name: "editAthDirect",
              value: data[0].hs_athletic_director,
              style: "width: 200px;"
            }, "editAthDirect");
          }
          else {
            editAthDirectEdit.set("value", data[0].hs_athletic_director);
          }

          /* Create the High School Coach Text Box control */
          if (!registry.byId("editHSCoach")){
              editHSCoachEdit = new TextBox({
              id: "editHSCoach",
              name: "editHSCoach",
              value: data[0].hs_softball_coach,
              style: "width: 200px;"
            }, "editHSCoach");
          }
          else {
            editHSCoachEdit.set("value", data[0].hs_softball_coach);
          }

          /* Create the High School Sports Played Text Box control */
          if (!registry.byId("editSportsPlayed")){
              editSportsPlayedEdit = new TextBox({
              id: "editSportsPlayed",
              name: "editSportsPlayed",
              value: data[0].hs_sports_played,
              style: "width: 200px;"
            }, "editSportsPlayed");
          }
          else {
            editSportsPlayedEdit.set("value", data[0].hs_sports_played);
          }

          /* Create the High School GPA Text Box control */
          if (!registry.byId("editGPA")){
              editGPAEdit = new TextBox({
              id: "editGPA",
              name: "editGPA",
              value: data[0].hs_gpa,
              style: "width: 200px;"
            }, "editGPA");
          }
          else {
            editGPAEdit.set("value", data[0].hs_gpa);
          }

          /* Create the High School Class Rank Text Box control */
          if (!registry.byId("editClassRank")){
              editClassRankEdit = new TextBox({
              id: "editClassRank",
              name: "editClassRank",
              value: data[0].hs_class_rank,
              style: "width: 200px;"
            }, "editClassRank");
          }
          else {
            editClassRankEdit.set("value", data[0].hs_class_rank);
          }

          /* Create the High School PSAT Text Box control */
          if (!registry.byId("editPSAT")){
              editPSATEdit = new TextBox({
              id: "editPSAT",
              name: "editPSAT",
              value: data[0].hs_psat,
              style: "width: 200px;"
            }, "editPSAT");
          } 
          else {
            editPSATEdit.set("value", data[0].psat);
          }

          /* Create the High School SAT Text Box control */
          if (!registry.byId("editSAT")){
              editSATEdit = new TextBox({
              id: "editSAT",
              name: "editSAT",
              value: data[0].sat,
              style: "width: 200px;"
            }, "editSAT");
           }
          else {
            editSATEdit.set("value", data[0].sat);
          }

          /* Create the High School Softball Highlights Text Box control */
          if (!registry.byId("editHSSoftballHighlights")){
              editHSSoftballHighlightsEdit = new Textarea({
              id: "editHSSoftballHighlights",
              name: "editHSSoftballHighlights",
              value: data[0].hs_softball_highlights,
              style: "width: 400px;"
            }, "editHSSoftballHighlights");
          }
          else {
            editHSSoftballHighlightsEdit.set("value", data[0].hs_softball_highlights);
          }

          /* Create the Travel Year control */
          if (!registry.byId("editTravelYear")) {
            editTravelYear = new Select({
              id: "editTravelYear",
              name: "editTravelYear",
              value: data[0].travel_year,
              store: mod.yearsStore,
              labelAttr: "year",
              sortByLabel: false,
              searchAttr: "year",
              style: "width: 125px;"
            }, "editTravelYear");
          }
          else {
            editTravelYear.reset();
            editTravelYear.set("store", mod.yearsStore);
            editTravelYear.set("value", data[0].travel_year);
          }

          /* Create the Travel Softball Coach Text Box control */
          if (!registry.byId("editTravelCoach")){
              editTravelCoachEdit = new TextBox({
              id: "editTravelCoach",
              name: "editTravelCoach",
              value: data[0].travel_coach,
              style: "width: 400px;"
            }, "editTravelCoach");
          }
          else {
            editTravelCoachEdit.set("value", data[0].travel_coach);
          }

          /* Create the Travel Softball Coach Phone Text Box control */
          if (!registry.byId("editTravelCoachPhone")){
              editTravelCoachPhoneEdit = new TextBox({
              id: "editTravelCoachPhone",
              name: "editTravelCoachPhone",
              value: data[0].travel_coach_phone,
              style: "width: 200px;"
            }, "editTravelCoachPhone");
          }
          else {
            editTravelCoachPhoneEdit.set("value", data[0].travel_coach_phone);
          }

          /* Create the Travel Softball Coach Email Text Box control */
          if (!registry.byId("editTravelCoachEmail")){
              editTravelCoachEmailEdit = new TextBox({
              id: "editTravelCoachEmail",
              name: "editTravelCoachEmail",
              value: data[0].travel_coach_email,
              style: "width: 400px;"
            }, "editTravelCoachEmail");
          }
          else {
            editTravelCoachEmailEdit.set("value", data[0].travel_coach_email);
          }

          /* Create the Travel Stats Text Box control */
          if (!registry.byId("editTravelHSStats")){
              editTravelHSStatsEdit = new TextBox({
              id: "editTravelHSStats",
              name: "editTravelHSStats",
              value: data[0].travel_highlights,
              style: "width: 400px;"
            }, "editTravelHSStats");
          }
          else {
            editTravelHSStatsEdit.set("value", data[0].travel_highlights);
          }

          /* Create the Father Name Text Box control */
          if (!registry.byId("editDadName")){
              editDadNameEdit = new TextBox({
              id: "editDadName",
              name: "editDadName",
              value: data[0].dad_name,
              style: "width: 200px;"
            }, "editDadName");
          }
          else {
            editDadNameEdit.set("value", data[0].dad_name);
          }

          /* Create the Father Phone Text Box control */
          if (!registry.byId("editDadPhone")){
              editDadPhoneEdit = new TextBox({
              id: "editDadPhone",
              name: "editDadPhone",
              value: data[0].dad_phone,
              style: "width: 200px;"
            }, "editDadPhone");
          }
          else {
            editDadPhoneEdit.set("value", data[0].dad_phone);
          }

          /* Create the Mother Name Text Box control */
          if (!registry.byId("editMomName")){
              editMomNameEdit = new TextBox({
              id: "editMomName",
              name: "editMomName",
              value: data[0].mom_name,
              style: "width: 200px;"
            }, "editMomName");
          }
          else {
            editMomNameEdit.set("value", data[0].mom_name);
          }

          /* Create the Mother Phone Text Box control */
          if (!registry.byId("editMomPhone")){
              editMomPhoneEdit = new TextBox({
              id: "editMomPhone",
              name: "editMomPhone",
              value: data[0].mom_phone,
              style: "width: 200px;"
            }, "editMomPhone");
          }
          else {
            editMomPhoneEdit.set("value", data[0].mom_phone);
          }

          /* Create the Parent Email Text Box control */
          if (!registry.byId("editParentEmail")){
              editParentEmailEdit = new TextBox({
              id: "editParentEmail",
              name: "editParentEmail",
              value: data[0].parent_email,
              style: "width: 200px;"
            }, "editParentEmail");
          }
          else {
            editParentEmailEdit.set("value", data[0].parent_email);
          }

          /* Create the Personal Statement Text Box control */
          if (!registry.byId("editPersonalStatement")){
              editPersonalStatementEdit = new Textarea({
              id: "editPersonalStatement",
              name: "editPersonalStatement",
              value: data[0].personal_statement,
              style: "width: 400px;"
            }, "editPersonalStatement");
          }
          else {
            editPersonalStatementEdit.set("value", data[0].personal_statement);
          }

          /* Create the Personal Clubs Text Box control */
          if (!registry.byId("editPersonalClubs")){
              editPersonalClubsEdit = new Textarea({
              id: "editPersonalClubs",
              name: "editPersonalClubs",
              value: data[0].hs_clubs_activities,
              style: "width: 400px;"
            }, "editPersonalClubs");
          }
          else {
            editPersonalClubsEdit.set("value", data[0].hs_clubs_activities);
          }

          /* Create the Personal Community Text Box control */
          if (!registry.byId("editPersonalCommunity")){
              editPersonalCommunityEdit = new Textarea({
              id: "editPersonalCommunity",
              name: "editPersonalCommunity",
              value: data[0].community_service,
              style: "width: 400px;"
            }, "editPersonalCommunity");
          }
          else {
            editPersonalCommunityEdit.set("value", data[0].community_service);
          }

          /* Edit Roster Member button */
          var onSignal = on.once(registry.byId("editOKButton"), 'click', function(evt) {
            mod.editPlayer(id);
            cancelSignal.remove();
          });

          /* Edit Roster Member Cancel button */
          var cancelSignal = on.once(registry.byId("editCancelButton"), 'click', function(evt) {
            onSignal.remove();
          });

          registry.byId("EditRosterDlg").show();
        });
      });

      /* Coaches Grid */
      mod.coachStore = new Observable(new RequestMemory({url:"getCoaches.php"}));
      if (!registry.byId("maniacsCoachesGrid")) {
        mod.coachGrid = new StandardGrid({
          columns: {
            name: editor({label: "Name", field: "coach_name"}, "text", "dblclick"),
            position: editor({label: "Position", field: "coach_position", editorArgs:{ store: mod.coachTypeStore, labelAttr: "type", style: "width: 100px;"}}, Select, "dblclick"),
            email: editor({label: "Email", field: "coach_email"}, "text", "dblclick"),
            phone: editor({label: "Phone", field: "coach_phone"}, "text", "dblclick"),
            path: editor({label: "Picture Path", field: "coach_pic_path"}, "text", "dblclick")
          },
          loadingMessage: "Loading Maniacs Coaches",
          errorMessage: "Error loading Maniacs Coaches",
          noDataMessage: "No coaches currently exist",
          store: mod.coachStore,
          sort: [{attribute: "position", descending: false}],
          selectionMode: "none",
          rowsPerPage: 10
        }, "maniacsCoachesGrid");
      }
      else {
        mod.coachGrid.set("store", mod.coachStore);
      }
      mod.coachGrid.startup();

      /* Handler for a grid data change */
      on(mod.coachGrid, "dgrid-datachange", function(evt){
        mod.editCoachGridCell(evt.cell.column.id, evt.cell.row.id, evt.oldValue, evt.value);
      });

      /* Handler for the Coach Grid context menu */
      on(mod.coachGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.coachGrid.row(evt);
        activeItem = row && row.data;
      });

      var deleteCoachMenu = new Menu({
        targetNodeIds: [mod.coachGrid.domNode]
      });

      deleteCoachMenu.addChild(new MenuItem({
        label: "Delete Coach",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deleteCoach(activeItem.id);
        }
      }));

      /* News Items Grid */
      mod.newsStore = new Observable(new RequestMemory({url:"getNewsItems.php"}));
      if (!registry.byId("maniacsNewsGrid")) {
        mod.newsGrid = new StandardGrid({
          columns: {
            date: {label: "Date", field: "news_date",renderCell: mod.formatDate},
            desc: editor({label: "Description", field: "news_desc"}, "text", "dblclick"),
            data: editor({label: "News Data", field: "news_data"}, "text", "dblclick"),
            path: editor({label: "News Image Path", field: "news_image"}, "text", "dblclick")
          },
          loadingMessage: "Loading Maniacs News Items",
          errorMessage: "Error loading Maniacs News Items",
          noDataMessage: "No news items currently exist",
          store: mod.newsStore,
          sort: [{attribute: "news_date", descending: true}],
          selectionMode: "none",
          rowsPerPage: 50
        }, "maniacsNewsGrid");
      }
      else {
        mod.newsGrid.set("store", mod.newsStore);
      }
      mod.newsGrid.startup();

      /* Handler for a grid data change */
      on(mod.newsGrid, "dgrid-datachange", function(evt){
        mod.editNewsGridCell(evt.cell.column.id, evt.cell.row.id, evt.oldValue, evt.value);
      });

      /* Handler for the News Grid context menu */
      on(mod.newsGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.newsGrid.row(evt);
        activeItem = row && row.data;
      });

      var deleteNewsMenu = new Menu({
        targetNodeIds: [mod.newsGrid.domNode]
      });

      deleteNewsMenu.addChild(new MenuItem({
        label: "Delete News Item",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deleteNewsItem(activeItem.id);
        }
      }));

      /* Events Grid */
      mod.eventStore = new Observable(new RequestMemory({url:"getEvents.php"}));
      if (!registry.byId("maniacsEventsGrid")) {
        mod.eventGrid = new StandardGrid({
          columns: {
//            date: editor({label: "Event Date", field: "event_date", renderCell: mod.formatDate, editorArgs: {selector: "date", datePattern: "MM/dd/YYYY", locale:"en-us", style: "width: 150px;"}}, DateTextBox, "dblclick"),
            date: {label: "Event Date", field: "event_date", renderCell: mod.formatDate},
            desc: editor({label: "Event Description", field: "event_desc"}, "text", "dblclick"),
            data: editor({label: "Event Data", field: "event_data"}, "text", "dblclick"),
//            start: editor({label: "Event Start", field: "event_start", renderCell: mod.formatTime}, TimeTextBox, "dblclick"),
//            end: editor({label: "Event End", field: "event_end", renderCell: mod.formatTime}, TimeTextBox, "dblclick"),
            start: {label: "Event Start", field: "event_start", renderCell: mod.formatTime},
            end: {label: "Event End", field: "event_end", renderCell: mod.formatTime},
            address: editor({label: "Address", field: "event_address"}, "text", "dblclick"),
            city: editor({label: "City", field: "event_city"}, "text", "dblclick"),
            state: editor({label: "State", field: "event_state", editorArgs:{ store: mod.stateStore, labelAttr: "displaystate", style: "width: 100px;"}}, Select, "dblclick"),
            zip: editor({label: "Zip", field: "event_zip"}, "text", "dblclick")
          },
          loadingMessage: "Loading Maniacs Events",
          errorMessage: "Error loading Maniacs Events",
          noDataMessage: "No events currently exist",
          store: mod.eventStore,
          sort: [{attribute: "events_date", descending: true}],
          selectionMode: "none",
          rowsPerPage: 50
        }, "maniacsEventsGrid");
      }
      else {
        mod.eventGrid.set("store", mod.eventStore);
      }
      mod.eventGrid.startup();

      /* Handler for a grid data change */
      on(mod.eventGrid, "dgrid-datachange", function(evt){
        mod.editEventsGridCell(evt.cell.column.id, evt.cell.row.id, evt.oldValue, evt.value);
      });

      /* Handler for the Events Grid context menu */
      on(mod.eventGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.eventGrid.row(evt);
        activeItem = row && row.data;
      });

      var deleteEventMenu = new Menu({
        targetNodeIds: [mod.eventGrid.domNode]
      });

      deleteEventMenu.addChild(new MenuItem({
        label: "Delete Event",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deleteEvent(activeItem.id);
        }
      }));

      /* Team Photos Grid */
      mod.photoStore = new Observable(new RequestMemory({url:"getPhotos.php"}));
      if (!registry.byId("maniacsPhotoGrid")) {
        mod.photoGrid = new StandardGrid({
          columns: {
            path: editor({label: "Photo Path", field: "photo_path"}, "text", "dblclick"),
            url: editor({label: "Photo URL", field: "photo_url"}, "text", "dblclick"),
            desc: editor({label: "Photo Description", field: "photo_desc"}, "text", "dblclick")
          },
          loadingMessage: "Loading Maniacs Team Photos",
          errorMessage: "Error loading Maniacs Team Photos",
          noDataMessage: "No photos currently exist",
          store: mod.photoStore,
          sort: [{attribute: "photo_path", descending: true}],
          selectionMode: "none",
          rowsPerPage: 50
        }, "maniacsPhotoGrid");
      }
      else {
        mod.photoGrid.set("store", mod.photoStore);
      }
      mod.photoGrid.startup();

      /* Handler for a Photo grid data change */
      on(mod.photoGrid, "dgrid-datachange", function(evt){
        mod.editPhotoGridCell(evt.cell.column.id, evt.cell.row.id, evt.oldValue, evt.value);
      });

      /* Handler for the Photo Grid context menu */
      on(mod.photoGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.photoGrid.row(evt);
        activeItem = row && row.data;
      });

      var deletePhotoMenu = new Menu({
        targetNodeIds: [mod.photoGrid.domNode]
      });

      deletePhotoMenu.addChild(new MenuItem({
        label: "Delete Photo",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deletePhoto(activeItem.id);
        }
      }));

      /* Games Grid */
      mod.gamesStore = new Observable(new RequestMemory({url:"getGames.php"}));
      if (!registry.byId("maniacsGamesGrid")) {
        mod.gamesGrid = new StandardGrid({
          columns: {
            date: {label: "Game Date", field: "game_date", renderCell: mod.formatDate},
            time: {label: "Game Time", field: "game_time", renderCell: mod.formatTime},
            type: editor({label: "Game Type", field: "game_type", editorArgs:{ store: mod.gameTypeStore, labelAttr: "type", style: "width: 100px;"}}, Select, "dblclick"),
            desc: editor({label: "Description", field: "game_desc"}, "text", "dblclick"),
            opponent: editor({label: "Opponent", field: "game_opponent"},"text", "dblclick"),
            score: editor({label: "Maniacs Score", field: "maniacs_score"}, "text",  has('touch') ? "click" : "dblclick"),
            oppscore: editor({label: "Opponent Score", field: "opponent_score"},"text", has('touch') ? "click" : "dblclick"),
            address: editor({label: "Address", field: "game_address"},"text", "dblclick"),
            city: editor({label: "City", field: "game_city"},"text", "dblclick"),
            state: editor({label: "State", field: "game_state", editorArgs:{ store: mod.stateStore, labelAttr: "displaystate", style: "width: 100px;"}}, Select, "dblclick"), 
            zip: editor({label: "Zip", field: "game_zip"},"text", "dblclick")
          },
          loadingMessage: "Loading Maniacs Games",
          errorMessage: "Error loading Maniacs Games",
          noDataMessage: "No games currently exist",
          store: mod.gamesStore,
          sort: [{attribute: "game_date", descending: false}, {attribute: "game_time", descending: false}],
          selectionMode: "none",
          rowsPerPage: 50
        }, "maniacsGamesGrid");
      }
      else {
        mod.gamesGrid.set("store", mod.gamesStore);
      }
      mod.gamesGrid.startup();

      /* Handler for a grid data change */
      on(mod.gamesGrid, "dgrid-datachange", function(evt){
        mod.editGamesGridCell(evt.cell.column.id, evt.cell.row.id, evt.oldValue, evt.value);
      });

      /* Handler for the Practice Grid context menu */
      on(mod.gamesGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.gamesGrid.row(evt);
        activeItem = row && row.data;
      });

      /* Handler for double-taps on a mobile device */
      mod.gamesGrid.on(touchUtil.selector('.dgrid-content .dgrid-row', touchUtil.dbltap), function(event) {
        alert("Column clicked: " + event.cell.column.id);
      });

      var deleteGameMenu = new Menu({
        targetNodeIds: [mod.gamesGrid.domNode]
      });

      deleteGameMenu.addChild(new MenuItem({
        label: "Delete Game",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deleteGame(activeItem.id);
        }
      }));

      /* Practice Grid */
      mod.practiceStore = new Observable(new RequestMemory({url:"getPractices.php"}));
      if (!registry.byId("maniacsPracticeGrid")) {
        mod.practiceGrid = new StandardGrid({
          columns: {
            date: {label: "Practice Date", field: "practice_date", renderCell: mod.formatDate},
            start: {label: "Practice Start", field: "practice_start", renderCell: mod.formatTime},
            end: {label: "Practice End", field: "practice_end", renderCell: mod.formatTime},
            desc: editor({label: "Description", field: "practice_desc"}, "text", "dblclick"),
            address: editor({label: "Address", field: "practice_address"},"text", "dblclick"),
            city: editor({label: "City", field: "practice_city"},"text", "dblclick"),
            state: editor({label: "State", field: "practice_state", editorArgs:{ store: mod.stateStore, labelAttr: "displaystate", style: "width: 100px;"}}, Select, "dblclick"),
            zip: editor({label: "Zip", field: "practice_zip"}, "text", "dblclick")
          },
          loadingMessage: "Loading Maniacs Practices",
          errorMessage: "Error loading Maniacs Practices",
          noDataMessage: "No practices currently exist",
          store: mod.practiceStore,
          sort: [{attribute: "practice_date", descending: true}],
          selectionMode: "none",
          rowsPerPage: 50
        }, "maniacsPracticeGrid");
      }
      else {
        mod.practiceGrid.set("store", mod.practiceStore);
      }
      mod.practiceGrid.startup();

      /* Handler for a grid data change */
      on(mod.practiceGrid, "dgrid-datachange", function(evt){
        mod.editPracticeGridCell(evt.cell.column.id, evt.cell.row.id, evt.oldValue, evt.value);
      });

      /* Handler for the Practice Grid context menu */
      on(mod.practiceGrid, ".dgrid-row:contextmenu", function(evt){
        evt.preventDefault(); // prevent default browser context menu
        var row = mod.practiceGrid.row(evt);
        activeItem = row && row.data;
      });

      var deletePracticeMenu = new Menu({
        targetNodeIds: [mod.practiceGrid.domNode]
      });

      deletePracticeMenu.addChild(new MenuItem({
        label: "Delete Practice",
        iconClass: "deleteGridItem",
        onClick: function() {
          mod.deletePractice(activeItem.id);
        }
      }));
    },

    addPlayer: function() {
      var mod=this;
      var rosterFirstName=registry.byId("rosterFirstName").get("value");
      var rosterLastName=registry.byId("rosterLastName").get("value");
      var rosterJersey=registry.byId("rosterJersey").get("value");
      var rosterPos1=registry.byId("rosterPos1").get("value");
      var rosterPos2=registry.byId("rosterPos2").get("value");
      var rosterPos3=registry.byId("rosterPos3").get("value");
      var rosterThrows=registry.byId("rosterThrows").get("value");
      var rosterBats=registry.byId("rosterBats").get("value");
      var rosterHeight=registry.byId("rosterHeight").get("value");
      var rosterWeight=registry.byId("rosterWeight").get("value");
      var rosterAge=registry.byId("rosterAge").get("value");
      var rosterDOB=registry.byId("rosterDOB").get("value");
      var rosterAddress=registry.byId("rosterAddress").get("value");
      var rosterCity=registry.byId("rosterCity").get("value");
      var rosterState=registry.byId("rosterState").get("value");
      var rosterZip=registry.byId("rosterZip").get("value");
      var rosterPhone=registry.byId("rosterPhone").get("value");
      var rosterEmail=registry.byId("rosterEmail").get("value");
      var rosterProfilePic=registry.byId("rosterProfilePic").get("value");
      var rosterVideoURL=registry.byId("rosterVideoURL").get("value");
      var rosterHSName=registry.byId("rosterHSName").get("value");
      var rosterHSAddress=registry.byId("rosterHSAddress").get("value");
      var rosterHSCity=registry.byId("rosterHSCity").get("value");
      var rosterHSState=registry.byId("rosterHSState").get("value");
      var rosterHSZip=registry.byId("rosterHSZip").get("value");
      var rosterHSPhone=registry.byId("rosterHSPhone").get("value");
      var rosterGradYear=registry.byId("rosterGradYear").get("value");
      var rosterAthDirect=registry.byId("rosterAthDirect").get("value");
      var rosterHSCoach=registry.byId("rosterHSCoach").get("value");
      var rosterSportsPlayed=registry.byId("rosterSportsPlayed").get("value");
      var rosterGPA=registry.byId("rosterGPA").get("value");
      var rosterClassRank=registry.byId("rosterClassRank").get("value");
      var rosterPSAT=registry.byId("rosterPSAT").get("value");
      var rosterSAT=registry.byId("rosterSAT").get("value");
      var rosterHSSoftballHighlights=registry.byId("rosterHSSoftballHighlights").get("value");
      var rosterTravelYear=registry.byId("rosterTravelYear").get("value");
      var rosterTravelCoach=registry.byId("rosterTravelCoach").get("value");
      var rosterTravelCoachPhone=registry.byId("rosterTravelCoachPhone").get("value");
      var rosterTravelCoachEmail=registry.byId("rosterTravelCoachEmail").get("value");
      var rosterTravelHSStats=registry.byId("rosterTravelHSStats").get("value");
      var rosterDadName=registry.byId("rosterDadName").get("value");
      var rosterDadPhone=registry.byId("rosterDadPhone").get("value");
      var rosterMomName=registry.byId("rosterMomName").get("value");
      var rosterMomPhone=registry.byId("rosterMomPhone").get("value");
      var rosterParentEmail=registry.byId("rosterParentEmail").get("value");
      var rosterPersonalStatement=registry.byId("rosterPersonalStatement").get("value");
      var rosterPersonalClubs=registry.byId("rosterPersonalClubs").get("value");
      var rosterPersonalCommunity=registry.byId("rosterPersonalCommunity").get("value");
      var rosterData = [];
      rosterData.push({'rosterFirstName': rosterFirstName});
      rosterData.push({'rosterLastName': rosterLastName});
      rosterData.push({'rosterJersey': rosterJersey});
      rosterData.push({'rosterPos1': rosterPos1});
      rosterData.push({'rosterPos2': rosterPos2});
      rosterData.push({'rosterPos3': rosterPos3});
      rosterData.push({'rosterThrows': rosterThrows});
      rosterData.push({'rosterBats': rosterBats});
      rosterData.push({'rosterHeight': rosterHeight});
      rosterData.push({'rosterWeight': rosterWeight});
      rosterData.push({'rosterAge': rosterAge});
      rosterData.push({'rosterDOB': rosterDOB});
      rosterData.push({'rosterAddress': rosterAddress});
      rosterData.push({'rosterCity': rosterCity});
      rosterData.push({'rosterState': rosterState});
      rosterData.push({'rosterZip': rosterZip});
      rosterData.push({'rosterPhone': rosterPhone});
      rosterData.push({'rosterEmail': rosterEmail});
      rosterData.push({'rosterProfilePic': rosterProfilePic});
      rosterData.push({'rosterVideoURL': rosterVideoURL});
      rosterData.push({'rosterHSName': rosterHSName});
      rosterData.push({'rosterHSAddress': rosterHSAddress});
      rosterData.push({'rosterHSCity': rosterHSCity});
      rosterData.push({'rosterHSState': rosterHSState});
      rosterData.push({'rosterHSZip': rosterHSZip});
      rosterData.push({'rosterHSPhone': rosterHSPhone});
      rosterData.push({'rosterGradYear': rosterGradYear});
      rosterData.push({'rosterAthDirect': rosterAthDirect});
      rosterData.push({'rosterHSCoach': rosterHSCoach});
      rosterData.push({'rosterSportsPlayed': rosterSportsPlayed});
      rosterData.push({'rosterGPA': rosterGPA});
      rosterData.push({'rosterClassRank': rosterClassRank});
      rosterData.push({'rosterPSAT': rosterPSAT});
      rosterData.push({'rosterSAT': rosterSAT});
      rosterData.push({'rosterHSSoftballHighlights': rosterHSSoftballHighlights});
      rosterData.push({'rosterTravelYear': rosterTravelYear});
      rosterData.push({'rosterTravelCoach': rosterTravelCoach});
      rosterData.push({'rosterTravelCoachPhone': rosterTravelCoachPhone});
      rosterData.push({'rosterTravelCoachEmail': rosterTravelCoachEmail});
      rosterData.push({'rosterTravelHSStats': rosterTravelHSStats});
      rosterData.push({'rosterDadName': rosterDadName});
      rosterData.push({'rosterDadPhone': rosterDadPhone});
      rosterData.push({'rosterMomName': rosterMomName});
      rosterData.push({'rosterMomPhone': rosterMomPhone});
      rosterData.push({'rosterParentEmail': rosterParentEmail});
      rosterData.push({'rosterPersonalStatement': rosterPersonalStatement});
      rosterData.push({'rosterPersonalClubs': rosterPersonalClubs});
      rosterData.push({'rosterPersonalCommunity': rosterPersonalCommunity});
      member = json.toJson(rosterData, true);
      request.post("addPlayer.php", {
        handleAs: "text",
        method: "POST",
        data: {data: member}
      }).then(function(data) {
        registry.byId("RosterDlg").hide();
        mod.rosterStore.add({id: data, 
                           number: rosterJersey,
                           firstname: rosterFirstName,
                           lastname: rosterLastName,
                           position: rosterPos1,
                           pic: rosterProfilePic});
        mod.rosterGrid.refresh();
        domAttr.set("rosterStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("rosterStatus", "innerHTML", "");}, 5000);
      });
    },

    editPlayer: function(id) {
      var mod=this;
      var editFirstName=registry.byId("editFirstName").get("value");
      var editLastName=registry.byId("editLastName").get("value");
      var editJersey=registry.byId("editJersey").get("value");
      var editPos1=registry.byId("editPos1").get("value");
      var editPos2=registry.byId("editPos2").get("value");
      var editPos3=registry.byId("editPos3").get("value");
      var editThrows=registry.byId("editThrows").get("value");
      var editBats=registry.byId("editBats").get("value");
      var editHeight=registry.byId("editHeight").get("value");
      var editWeight=registry.byId("editWeight").get("value");
      var editAge=registry.byId("editAge").get("value");
      var editDOB=registry.byId("editDOB").get("value");
      var editAddress=registry.byId("editAddress").get("value");
      var editCity=registry.byId("editCity").get("value");
      var editState=registry.byId("editState").get("value");
      var editZip=registry.byId("editZip").get("value");
      var editPhone=registry.byId("editPhone").get("value");
      var editEmail=registry.byId("editEmail").get("value");
      var editProfilePic=registry.byId("editProfilePic").get("value");
      var editVideoURL=registry.byId("editVideoURL").get("value");
      var editHSName=registry.byId("editHSName").get("value");
      var editHSAddress=registry.byId("editHSAddress").get("value");
      var editHSCity=registry.byId("editHSCity").get("value");
      var editHSState=registry.byId("editHSState").get("value");
      var editHSZip=registry.byId("editHSZip").get("value");
      var editHSPhone=registry.byId("editHSPhone").get("value");
      var editGradYear=registry.byId("editGradYear").get("value");
      var editAthDirect=registry.byId("editAthDirect").get("value");
      var editHSCoach=registry.byId("editHSCoach").get("value");
      var editSportsPlayed=registry.byId("editSportsPlayed").get("value");
      var editGPA=registry.byId("editGPA").get("value");
      var editClassRank=registry.byId("editClassRank").get("value");
      var editPSAT=registry.byId("editPSAT").get("value");
      var editSAT=registry.byId("editSAT").get("value");
      var editHSSoftballHighlights=registry.byId("editHSSoftballHighlights").get("value");
      var editTravelYear=registry.byId("editTravelYear").get("value");
      var editTravelCoach=registry.byId("editTravelCoach").get("value");
      var editTravelCoachPhone=registry.byId("editTravelCoachPhone").get("value");
      var editTravelCoachEmail=registry.byId("editTravelCoachEmail").get("value");
      var editTravelHSStats=registry.byId("editTravelHSStats").get("value");
      var editDadName=registry.byId("editDadName").get("value");
      var editDadPhone=registry.byId("editDadPhone").get("value");
      var editMomName=registry.byId("editMomName").get("value");
      var editMomPhone=registry.byId("editMomPhone").get("value");
      var editParentEmail=registry.byId("editParentEmail").get("value");
      var editPersonalStatement=registry.byId("editPersonalStatement").get("value");
      var editPersonalClubs=registry.byId("editPersonalClubs").get("value");
      var editPersonalCommunity=registry.byId("editPersonalCommunity").get("value");
      var editAlumni=registry.byId("editAlumni").get("value");
      var editData = [];
      editData.push({'editFirstName': editFirstName});
      editData.push({'editLastName': editLastName});
      editData.push({'editJersey': editJersey});
      editData.push({'editPos1': editPos1});
      editData.push({'editPos2': editPos2});
      editData.push({'editPos3': editPos3});
      editData.push({'editThrows': editThrows});
      editData.push({'editBats': editBats});
      editData.push({'editHeight': editHeight});
      editData.push({'editWeight': editWeight});
      editData.push({'editAge': editAge});
      editData.push({'editDOB': editDOB});
      editData.push({'editAddress': editAddress});
      editData.push({'editCity': editCity});
      editData.push({'editState': editState});
      editData.push({'editZip': editZip});
      editData.push({'editPhone': editPhone});
      editData.push({'editEmail': editEmail});
      editData.push({'editProfilePic': editProfilePic});
      editData.push({'editVideoURL': editVideoURL});
      editData.push({'editHSName': editHSName});
      editData.push({'editHSAddress': editHSAddress});
      editData.push({'editHSCity': editHSCity});
      editData.push({'editHSState': editHSState});
      editData.push({'editHSZip': editHSZip});
      editData.push({'editHSPhone': editHSPhone});
      editData.push({'editGradYear': editGradYear});
      editData.push({'editAthDirect': editAthDirect});
      editData.push({'editHSCoach': editHSCoach});
      editData.push({'editSportsPlayed': editSportsPlayed});
      editData.push({'editGPA': editGPA});
      editData.push({'editClassRank': editClassRank});
      editData.push({'editPSAT': editPSAT});
      editData.push({'editSAT': editSAT});
      editData.push({'editHSSoftballHighlights': editHSSoftballHighlights});
      editData.push({'editTravelYear': editTravelYear});
      editData.push({'editTravelCoach': editTravelCoach});
      editData.push({'editTravelCoachPhone': editTravelCoachPhone});
      editData.push({'editTravelCoachEmail': editTravelCoachEmail});
      editData.push({'editTravelHSStats': editTravelHSStats});
      editData.push({'editDadName': editDadName});
      editData.push({'editDadPhone': editDadPhone});
      editData.push({'editMomName': editMomName});
      editData.push({'editMomPhone': editMomPhone});
      editData.push({'editParentEmail': editParentEmail});
      editData.push({'editPersonalStatement': editPersonalStatement});
      editData.push({'editPersonalClubs': editPersonalClubs});
      editData.push({'editPersonalCommunity': editPersonalCommunity});
      editData.push({'editAlumni': editAlumni});
      member = json.toJson(editData, true);
      request.post("editPlayer.php", {
        handleAs: "text",
        method: "POST",
        data: {data: member,
               id: id
              }
      }).then(function(data) {
        registry.byId("EditRosterDlg").hide();
//        mod.rosterStore.add({id: id, 
//                           number: editJersey,
//                           firstname: editFirstName,
//                           lastname: editLastName,
//                           position: editPos1,
//                           pic: editProfilePic});
        mod.rosterGrid.refresh();
        domAttr.set("rosterStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("rosterStatus", "innerHTML", "");}, 5000);
      });
    },

    addCoach: function() {
      var mod=this;
      request.post("addCoach.php", {
        handleAs: "text",
        method: "POST",
        data: {name: registry.byId("coachName").get("value"),
               phone: registry.byId("coachPhone").get("value"),
               email: registry.byId("coachEmail").get("value"),
               type: registry.byId("coachType").get("value"),
               image: registry.byId("coachImagePath").get("value")}
      }).then(function(data) {
        registry.byId("CoachDlg").hide();
        mod.coachStore.add({id: data, 
                           coach_name: registry.byId("coachName").get("value"),
                           coach_phone: registry.byId("coachPhone").get("value"),
                           coach_email: registry.byId("coachEmail").get("value"),
                           coach_position: registry.byId("coachType").get("value"),
                           coach_pic_path: registry.byId("coachImagePath").get("value")
                           });
        mod.coachGrid.refresh();
        domAttr.set("coachStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("coachStatus", "innerHTML", "");}, 5000);
      });
    },

    addNewsItem: function() {
      var mod=this;
      var newsDate = registry.byId("newsDate").get("value");
      var date = stamp.toISOString(newsDate);
      request.post("addNewsItem.php", {
        handleAs: "text",
        method: "POST",
        data: {date: date,
               desc: registry.byId("newsDescEdit").get("value"),
               data: registry.byId("newsDataEdit").get("value"),
               image: registry.byId("newsImagePath").get("value")}
      }).then(function(data) {
        registry.byId("NewsItemDlg").hide();
        mod.newsStore.add({id: data, 
                           news_date: date,
                           news_desc: registry.byId("newsDescEdit").get("value"),
                           news_data: registry.byId("newsDataEdit").get("value"),
                           news_image: registry.byId("newsImagePath").get("value")
                           });
        mod.newsGrid.refresh();
        domAttr.set("newsStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("newsStatus", "innerHTML", "");}, 5000);
      });
    },

    addEvent: function() {
      var mod=this;
      var eventDate = registry.byId("eventDate").get("value");
      var eventStart = registry.byId("eventStartEdit").get("value");
      var eventEnd = registry.byId("eventEndEdit").get("value");
//      var tempStartDate = locale.format
//      var tempStartDateTime = registry.byId("eventDate").get("value") + "T" + registry.byId("eventStartEdit").get("value");
//      var tempEndDateTime = registry.byId("eventDate").get("value") + "T" + registry.byId("eventEndEdit").get("value");
//console.log("Start: ", tempStartDateTime, "  End: ", tempEndDateTime);
//console.log("Start ISO: ", stamp.toISOString(tempStartDateTime), "  End ISO: ", stamp.toISOString(tempEndDateTime));
      var date = stamp.toISOString(eventDate);
      var start = stamp.toISOString(eventStart);
      var end = stamp.toISOString(eventEnd);
      request.post("addEvent.php", {
        handleAs: "text",
        method: "POST",
        data: {date: date,
               desc: registry.byId("eventDescEdit").get("value"),
               data: registry.byId("eventDataEdit").get("value"),
               start: start,
               end: end,
               address: registry.byId("eventAddress").get("value"),
               city: registry.byId("eventCity").get("value"),
               state: registry.byId("eventState").get("value"),
               zip: registry.byId("eventZip").get("value")}
      }).then(function(data) {
        registry.byId("EventDlg").hide();
        mod.eventStore.add({id: data, 
                           event_date: date,
                           event_desc: registry.byId("eventDescEdit").get("value"),
                           event_data: registry.byId("eventDataEdit").get("value"),
                           event_start: start,
                           event_end: end,
                           event_address: registry.byId("eventAddress").get("value"),
                           event_city: registry.byId("eventCity").get("value"),
                           event_state: registry.byId("eventState").get("value"),
                           event_zip: registry.byId("eventZip").get("value")
                           });
        mod.eventGrid.refresh();
        domAttr.set("eventStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("eventStatus", "innerHTML", "");}, 5000);
      });
    },

    addPhoto: function() {
      var mod=this;
      var photoPath = registry.byId("photoPath").get("value");
      var photoURL = registry.byId("photoURL").get("value");
      var photoDesc = registry.byId("photoDesc").get("value");
      request.post("addPhoto.php", {
        handleAs: "text",
        method: "POST",
        data: {path: photoPath,
               url: photoURL,
               desc: photoDesc}
      }).then(function(data) {
        registry.byId("PhotoDlg").hide();
        mod.photoStore.add({id: data, 
                            photo_path: photoPath,
                            photo_url: photoURL,
                            photo_desc: photoDesc
                           });
        domAttr.set("photoStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("photoStatus", "innerHTML", "");}, 5000);
        mod.photoGrid.refresh();
      });
    },

    addPractice: function() {
      var mod=this;
      var startDate = registry.byId("practiceDate").get("value");
      var startTime = registry.byId("practiceStart").get("value");
      var endTime = registry.byId("practiceEnd").get("value");
      var desc = registry.byId("practiceDesc").get("value");
      var address = registry.byId("practiceAddress").get("value");
      var city = registry.byId("practiceCity").get("value");
      var state = registry.byId("practiceState").get("value");
      var zip = registry.byId("practiceZip").get("value");

      var date = stamp.toISOString(startDate);
      var sTime = stamp.toISOString(startTime);
      var eTime = stamp.toISOString(endTime);
      request.post("addPractice.php", {
        handleAs: "text",
        method: "POST",
        data: {date: date,
               start: sTime,
               end: eTime,
               desc: desc,
               address: address,
               city: city,
               state: state,
               zip: zip }
      }).then(function(data) {
        registry.byId("PracticeDlg").hide();
        mod.practiceStore.add({id: data, 
                           practice_date: startDate,
                           practice_start: startTime,
                           practice_end: endTime,
                           practice_address: address,
                           practice_desc: desc,
                           practice_city: city,
                           practice_state: state,
                           practice_zip: zip
                           });
        mod.practiceGrid.refresh();
        domAttr.set("practiceStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("practiceStatus", "innerHTML", "");}, 5000);
      });
    },

    addGame: function() {
      var mod=this;
      var gameDate = registry.byId("gameDate").get("value");
      var gameTime = registry.byId("gameTime").get("value");
      var gameType = registry.byId("gameType").get("value");
      var game_opponent = registry.byId("gameOpponent").get("value");
      var game_desc = registry.byId("gameDesc").get("value");
      var address = registry.byId("gameAddress").get("value");
      var city = registry.byId("gameCity").get("value");
      var state = registry.byId("gameState").get("value");
      var zip = registry.byId("gameZip").get("value");

      var date = stamp.toISOString(gameDate);
      var sTime = stamp.toISOString(gameTime);
      request.post("addGame.php", {
        handleAs: "text",
        method: "POST",
        data: {date: date,
               time: sTime,
               type: gameType,
               desc: game_desc,
               opponent: game_opponent,
               address: address,
               city: city,
               state: state,
               zip: zip }
      }).then(function(data) {
        registry.byId("GameDlg").hide();
        mod.gamesStore.add({id: data, 
                           date: gameDate,
                           time: gameTime,
                           type: gameType,
                           desc: game_desc,
                           opponent: game_opponent,
                           address: address,
                           city: city,
                           state: state,
                           zip: zip
                           });
        mod.gamesGrid.refresh();
        domAttr.set("gameStatus", "innerHTML", data);
        setTimeout(function(){domAttr.set("gameStatus", "innerHTML", "");}, 5000);
      });
    },

    formatDate: function(object, value, node, options) {
      var tempDate = new Date(value);
      var output = locale.format(tempDate, {selector: "date", datePattern: 'MM/dd/y'});
      node.innerHTML = output;
      return output;
    },

    formatTime: function(object, value, node, options) {
      var tempDate = new Date(value);
      var output = locale.format(tempDate, {selector: "time", datePattern: 'HH:MM:SS'});
      node.innerHTML = output;
      return output;
    },

    editCoachGridCell: function (field, id, oldValue, newValue){
      var mod=this;
      request.post("updateCoachGrid.php", {
        handleAs: "text",
        data: {
          value: newValue,
          field: field,
          id: id
      }
      }).then (function(data){
         domAttr.set("coachStatus", "innerHTML", data);
         mod.coachGrid.save();
         setTimeout(function(){domAttr.set("coachStatus", "innerHTML", "");}, 5000);
      }, function (e) {
         domAttr.set("coachStatus", "innerHTML", "Error updating Coach grid; " + e);
         setTimeout(function(){domAttr.set("coachStatus", "innerHTML", "");}, 5000);
      });
    },

    deletePlayer: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete Player",
        content: "Delete selected player?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deletePlayer", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected player from the backend database if the    */
    /* verifies the action via the confirmation window.  It will also remove the         */
    /* item from the roserStore store, which will delete it from the grid in real-time.  */

    _deletePlayer: function (id, name) {
      var mod=this;
      request.post("deletePlayer.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("rosterStatus", "innerHTML", data);
            mod.rosterStore.remove(id);
            setTimeout(function(){domAttr.set("rosterStatus", "innerHTML", "");}, 5000);
            mod.rosterGrid.refresh();        
        }, function (e) {
            domAttr.set("rosterStatus", "innerHTML", "Error deleting selected player; Error = " + e);
            setTimeout(function(){domAttr.set("playerStatus", "innerHTML", "");}, 5000);
      });
    },

    /* This function will create a new window/tab with the selected player's information. */
    /* This page can be printed to a PDF and uploaded to the server for viewing later.    */
    pdfData: function(id) {
      window.open("pdfData.php?id=" + id);
    },

    deleteCoach: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete Coach",
        content: "Delete selected coach?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deleteCoach", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected coach from the backend database if the     */
    /* verifies the action via the confirmation window.  It will also remove the         */
    /* item from the coachStore store, which will delete it from the grid in real-time.  */

    _deleteCoach: function (id, name) {
      var mod=this;
      request.post("deleteCoach.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("coachStatus", "innerHTML", data);
            mod.coachStore.remove(id);
            setTimeout(function(){domAttr.set("coachStatus", "innerHTML", "");}, 5000);
            mod.coachGrid.refresh();        
        }, function (e) {
            domAttr.set("coachStatus", "innerHTML", "Error deleting selected news item; Error = " + e);
            setTimeout(function(){domAttr.set("coachStatus", "innerHTML", "");}, 5000);
      });
    },

    editEventsGridCell: function (field, id, oldValue, newValue){
      var mod=this;
      request.post("updateEventsGrid.php", {
        handleAs: "text",
        data: {
          value: newValue,
          field: field,
          id: id
      }
      }).then (function(data){
         domAttr.set("eventStatus", "innerHTML", data);
         mod.eventGrid.save();
         setTimeout(function(){domAttr.set("eventStatus", "innerHTML", "");}, 5000);
      }, function (e) {
         domAttr.set("eventStatus", "innerHTML", "Error updating Events grid; " + e);
         setTimeout(function(){domAttr.set("eventStatus", "innerHTML", "");}, 5000);
      });
    },

    deleteEvent: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete Event",
        content: "Delete selected event?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deleteEvent", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected event from the backend database   */
    /* if the admin verifies the action via the confirmation window.  It will   */
    /* also remove the item from the eventStore store, which will delete it     */
    /* from the grid in real-time.                                              */

    _deleteEvent: function (id) {
      var mod=this;
      request.post("deleteEvent.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("eventStatus", "innerHTML", data);
            mod.eventStore.remove(id);
            setTimeout(function(){domAttr.set("eventStatus", "innerHTML", "");}, 5000);
            mod.eventGrid.refresh();        
        }, function (e) {
            domAttr.set("eventStatus", "innerHTML", "Error deleting selected event; Error = " + e);
            setTimeout(function(){domAttr.set("eventStatus", "innerHTML", "");}, 5000);
      });
    },

    editPhotoGridCell: function (field, id, oldValue, newValue){
      var mod=this;
      request.post("updatePhotosGrid.php", {
        handleAs: "text",
        data: {
          value: newValue,
          field: field,
          id: id
      }
      }).then (function(data){
         domAttr.set("photoStatus", "innerHTML", data);
         mod.photoGrid.save();
         setTimeout(function(){domAttr.set("photoStatus", "innerHTML", "");}, 5000);
      }, function (e) {
         domAttr.set("photoStatus", "innerHTML", "Error updating Photos grid; " + e);
         setTimeout(function(){domAttr.set("photoStatus", "innerHTML", "");}, 5000);
      });
    },

    deletePhoto: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete Photo",
        content: "Delete selected photo?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deletePhoto", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected photo from the backend database   */
    /* if the admin verifies the action via the confirmation window.  It will   */
    /* also remove the item from the photoStore store, which will delete it     */
    /* from the grid in real-time.                                              */

    _deletePhoto: function (id) {
      var mod=this;
      request.post("deletePhoto.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("photoStatus", "innerHTML", data);
            mod.photoStore.remove(id);
            setTimeout(function(){domAttr.set("photoStatus", "innerHTML", "");}, 5000);
            mod.photoGrid.refresh();        
        }, function (e) {
            domAttr.set("photoStatus", "innerHTML", "Error deleting selected photo; Error = " + e);
            setTimeout(function(){domAttr.set("photoStatus", "innerHTML", "");}, 5000);
      });
    },

    editNewsGridCell: function (field, id, oldValue, newValue){
      var mod=this;
      request.post("updateNewsGrid.php", {
        handleAs: "text",
        data: {
          value: newValue,
          field: field,
          id: id
      }
      }).then (function(data){
         domAttr.set("newsStatus", "innerHTML", data);
         mod.newsGrid.save();
         setTimeout(function(){domAttr.set("newsStatus", "innerHTML", "");}, 5000);
      }, function (e) {
         domAttr.set("newsStatus", "innerHTML", "Error updating News grid; " + e);
         setTimeout(function(){domAttr.set("newsStatus", "innerHTML", "");}, 5000);
      });
    },

    deleteNewsItem: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete News Item",
        content: "Delete selected News item?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deleteNewsItem", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected news item  from the backend database   */
    /* if the admin verifies the action via the confirmation window.  It will also   */
    /* also remove the item from the newsStore store, which will delete it from the  */
    /* grid in real-time.                                                            */

    _deleteNewsItem: function (id, name) {
      var mod=this;
      request.post("deleteNewsItem.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("newsStatus", "innerHTML", data);
            mod.newsStore.remove(id);
            setTimeout(function(){domAttr.set("newsStatus", "innerHTML", "");}, 5000);
            mod.newsGrid.refresh();        
        }, function (e) {
            domAttr.set("newsStatus", "innerHTML", "Error deleting selected news item; Error = " + e);
            setTimeout(function(){domAttr.set("newsStatus", "innerHTML", "");}, 5000);
      });
    },

    editGamesGridCell: function (field, id, oldValue, newValue){
      var mod=this;
      request.post("updateGamesGrid.php", {
        handleAs: "text",
        data: {
          value: newValue,
          field: field,
          id: id
      }
      }).then (function(data){
         domAttr.set("gameStatus", "innerHTML", data);
         mod.gamesGrid.save();
         setTimeout(function(){domAttr.set("gameStatus", "innerHTML", "");}, 5000);
      }, function (e) {
         domAttr.set("gameStatus", "innerHTML", "Error updating Game grid; " + e);
         setTimeout(function(){domAttr.set("gameStatus", "innerHTML", "");}, 5000);
      });
    },

    deleteGame: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete Game",
        content: "Delete selected game?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deleteGame", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected game from the backend database       */
    /* if the admin verifies the action via the confirmation window.  It will also */
    /* remove the item from the gamesStore store, which will delete it from the    */
    /* grid in real-time.                                                          */

    _deleteGame: function (id) {
      var mod=this;
      request.post("deleteGame.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("gameStatus", "innerHTML", data);
            mod.gamesStore.remove(id);
            setTimeout(function(){domAttr.set("gameStatus", "innerHTML", "");}, 5000);
            mod.gamesGrid.refresh();        
        }, function (e) {
            domAttr.set("gameStatus", "innerHTML", "Error deleting selected game; Error = " + e);
            setTimeout(function(){domAttr.set("gameStatus", "innerHTML", "");}, 5000);
      });
    },

    editPracticeGridCell: function (field, id, oldValue, newValue){
      var mod=this;
      request.post("updatePracticeGrid.php", {
        handleAs: "text",
        data: {
          value: newValue,
          field: field,
          id: id
      }
      }).then (function(data){
         domAttr.set("practiceStatus", "innerHTML", data);
         mod.practiceGrid.save();
         setTimeout(function(){domAttr.set("practiceStatus", "innerHTML", "");}, 5000);
      }, function (e) {
         domAttr.set("practiceStatus", "innerHTML", "Error updating Practice grid; " + e);
         setTimeout(function(){domAttr.set("practiceStatus", "innerHTML", "");}, 5000);
      });
    },

    deletePractice: function(id) {
      var mod=this;
      confirmDialog = new ConfirmDialog({
        title: "Delete Practice",
        content: "Delete selected practice?",
        style: "width: 150px"
      });

      confirmDialog.show();
      
      confirmDialog.on("execute", lang.hitch(mod, "_deletePractice", id));

      confirmDialog.on("cancel", function(evt){
        console.log("Cancel button pressed");
      });      
    },

    /* This function will delete the selected practice from the backend database   */
    /* if the admin verifies the action via the confirmation window.  It will also */
    /* remove the item from the practiceStore store, which will delete it from the */
    /* grid in real-time.                                                          */

    _deletePractice: function (id) {
      var mod=this;
      request.post("deletePractice.php", {
        handleAs: "text",
        data: {id: id}
        }).then (function(data){
            domAttr.set("practiceStatus", "innerHTML", data);
            mod.practiceStore.remove(id);
            setTimeout(function(){domAttr.set("practiceStatus", "innerHTML", "");}, 5000);
            mod.practiceGrid.refresh();        
        }, function (e) {
            domAttr.set("practiceStatus", "innerHTML", "Error deleting selected practice; Error = " + e);
            setTimeout(function(){domAttr.set("practiceStatus", "innerHTML", "");}, 5000);
      });
    }

  }
});
