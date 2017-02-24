define("maniacs/maniacsFunctions", [
  "dijit/registry",
  "dijit/Menu",
  "dijit/MenuBar",
  "dijit/MenuBarItem",
  "dijit/PopupMenuBarItem",
  "dijit/DropDownMenu",
  "dijit/MenuItem",
  "dijit/PopupMenuItem",
  "dijit/layout/ContentPane",
  "dijit/form/Select",
  "dojo/_base/declare",
  "dojo/_base/array",
  "dojo/query",
  "dojo-smore/RequestMemory",
  "dojo/store/Observable",
  "dojo/store/Memory",
  "dojo/data/ItemFileReadStore",
  "dojo/request",
  "dojo/on",
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/date/locale",
  "dojo/date/stamp",
  "dojo/topic",
  "dojo/sniff",
  "dojox/calendar/Calendar",
  "dojox/image/ThumbnailPicker",
  "dojox/image/Gallery",
  "dgrid/Grid", 
  "dgrid/extensions/Pagination", 
  "dgrid/extensions/ColumnResizer",
  "dgrid/extensions/DijitRegistry",
  "dgrid/Selection"

], function(registry, Menu, MenuBar, MenuBarItem, PopupMenuBarItem, DropDownMenu, MenuItem, PopupMenuItem, ContentPane,
            Select, declare, arrayUtil, query, RequestMemory, Observable, Memory, ItemFileReadStore, request, on, dom, 
            domConst, domAttr, domClass, domStyle, locale, stamp, topic, has, Calendar, ThumbnailPicker, Gallery, Grid, Pagination, 
            ColumnResizer, DijitRegistry, Selection) {

  return {

    maniacsCalendar: null,

    checkForMobileDevice: function() {
      var mod=this;
      if (has("ios") || has("android")) {
        window.location = "mobile/index.php";
      }
      else {
        mod.createMenuBar();
      }
    },

    createMenuBar: function() {
      var mod=this;
      var pMenuBar = new MenuBar({style: "width:100%; height: 35px;margin-left:2px; margin-top: 0px; color:#f5f7f7; font-size:25px; background-color: transparent;"});

      /* Home Menu */
      pMenuBar.addChild(new MenuBarItem({
        label: "Home",
        onClick: function() {
          window.location = "index.php";
        }
      }));

      /* News Menu */
      pMenuBar.addChild(new MenuBarItem({
        label: "News",
        onClick: function() {
          mod.showNewsItems();
        }
      }));

      pMenuBar.addChild(new MenuBarItem({
        label: "Photos",
        onClick: function() {
          mod.showTeamPhotos();
        }
      }));
      pMenuBar.addChild(new MenuBarItem({
        label: "Calendar",
        onClick: function() {
          mod.showEventsCalendar();
        }
      }));
      pMenuBar.addChild(new MenuBarItem({
        label: "Events",
        onClick: function() {
          mod.showEvents();
        }
      }));
      pMenuBar.addChild(new MenuBarItem({
        label: "Tournaments",
        onClick: function() {
          mod.showGames();
        }
      }));
      pMenuBar.addChild(new MenuBarItem({
        label: "Practices",
        onClick: function() {
          mod.showPractices();
        }
      }));
      pMenuBar.addChild(new MenuBarItem({
        label: "Roster",
        onClick: function() {
          mod.showPlayerContent();
        }
      }));
      pMenuBar.addChild(new MenuBarItem({
        label: "Coaches",
        onClick: function() {
          mod.showCoachesContent();
        }
      }));

      /* About Menu */
      var about = new MenuBarItem({
        label: "About",
        onClick: function() {
          registry.byId("AboutDlg").show();
        }
      });
      domStyle.set(about.domNode, 'float', 'right');
      pMenuBar.addChild(about);

      /* Place menu into main area */
      pMenuBar.placeAt("maniacsMenuBar");
      pMenuBar.startup();

    },


    showNewsItems: function() {
      var mod=this;
      request.post("newsContent.php", {
        handleAs: "text"
      }).then(function(data) {
       registry.byId("maniacsWorkerPane").set("content", data);        
      });
    },

   showEvents: function() {
     var mod=this;
     eventStore = new Observable(new RequestMemory({url:"getEvents.php"}));     
     request.post("eventContent.php", {
       handleAs: "text"
     }).then(function(data) {
       var StandardGrid = declare([Grid, Selection, Pagination, ColumnResizer, DijitRegistry]);
       registry.byId("maniacsWorkerPane").set("content", data);
       if (!registry.byId("eventGrid")) {
         eventGrid = new StandardGrid({
           columns: {
             date: {label: "Event Date", field: "event_date", renderCell: mod.formatDate},
             start: {label: "Start Time", field: "event_start", renderCell: mod.formatTime},
             end: {label: "End Time", field: "event_end", renderCell: mod.formatTime},
             data: {label: "Event Data", field: "event_data"},
             desc: {label: "Description", field: "event_desc"},
             address: {label: "Address", field: "event_address"},
             city: {label: "City", field: "event_city"},
             state: {label: "State", field: "event_state"}, 
             zip: {label: "Zip", field: "event_zip"},
             map: {label: "Location Map", field: "event_map", renderCell: mod.formatMap}
           },
           loadingMessage: "Loading Maniacs Events",
           errorMessage: "Error loading Maniacs Events",
           noDataMessage: "No events currently exist",
           store: eventStore,
           sort: [{attribute: "event_date", descending: true}],
           selectionMode: "none",
           rowsPerPage: 50
         }, "eventGrid");
       }
       else {
         eventGrid.set("store", eventStore);
       }
       eventGrid.startup();
     });
   },

   showPlayerContent: function() {
     var mod=this;
     request.post("playerContent.php", {
       handleAs: "text"
     }).then(function(data) {
       registry.byId("maniacsWorkerPane").set("content", data);
     });
   },

   showCoachesContent: function() {
     var mod=this;
     request.post("coachesContent.php", {
       handleAs: "text"
     }).then(function(data) {
       registry.byId("maniacsWorkerPane").set("content", data);
     });
   },

   showGames: function() {
     var mod=this;
     gameStore = new Observable(new RequestMemory({url:"getGames.php"}));     
     request.post("gameContent.php", {
       handleAs: "text"
     }).then(function(data) {
       var StandardGrid = declare([Grid, Selection, Pagination, ColumnResizer, DijitRegistry]);
       registry.byId("maniacsWorkerPane").set("content", data);
       if (!registry.byId("gameGrid")) {
         gameGrid = new StandardGrid({
           columns: {
             date: {label: "Tournament Date", field: "game_date", renderCell: mod.formatDate},
             start: {label: "Tournament Time", field: "game_time", renderCell: mod.formatTime},
             type: {label: "Type", field: "game_type"},
             opponent: {label: "Opponent", field: "game_opponent"},
             address: {label: "Address", field: "game_address"},
             city: {label: "City", field: "game_city"},
             state: {label: "State", field: "game_state"}, 
             zip: {label: "Zip", field: "game_zip"},
             map: {label: "Location Map", field: "game_map", renderCell: mod.formatMap}
           },
           loadingMessage: "Loading Maniacs Tournaments",
           errorMessage: "Error loading Maniacs Tournaments",
           noDataMessage: "No tournaments currently exist",
           store: gameStore,
           sort: [{attribute: "game_date", descending: true}],
           selectionMode: "none",
           rowsPerPage: 50
         }, "gameGrid");
       }
       else {
         gameGrid.set("store", gameStore);
       }
       gameGrid.startup();
     });
   },

   showPractices: function() {
     var mod=this;
     practiceStore = new Observable(new RequestMemory({url:"getPractices.php"}));     
     request.post("practiceContent.php", {
       handleAs: "text"
     }).then(function(data) {
       var StandardGrid = declare([Grid, Selection, Pagination, ColumnResizer, DijitRegistry]);
       registry.byId("maniacsWorkerPane").set("content", data);
       if (!registry.byId("practiceGrid")) {
         practiceGrid = new StandardGrid({
           columns: {
             date: {label: "Practice Date", field: "practice_date", renderCell: mod.formatDate},
             start: {label: "Practice Start", field: "practice_start", renderCell: mod.formatTime},
             end: {label: "Practice End", field: "practice_end", renderCell: mod.formatTime},
             desc: {label: "Description", field: "practice_desc"},
             address: {label: "Address", field: "practice_address"},
             city: {label: "City", field: "practice_city"},
             state: {label: "State", field: "practice_state"}, 
             zip: {label: "Zip", field: "practice_zip"},
             map: {label: "Location Map", field: "practice_map", renderCell: mod.formatMap}
           },
           loadingMessage: "Loading Maniacs Practices",
           errorMessage: "Error loading Maniacs Practices",
           noDataMessage: "No practices currently exist",
           store: practiceStore,
           sort: [{attribute: "practice_date", descending: true}],
           selectionMode: "none",
           rowsPerPage: 50
         }, "practiceGrid");
       }
       else {
         practiceGrid.set("store", practiceStore);
       }
       practiceGrid.startup();
     });
   },

   showTeamPhotos: function () {
     var mod=this;
     request.post("teamPhotosContent.php", {
       handleAs: "text"
     }).then(function(data) {
       registry.byId("maniacsWorkerPane").set("content", data);
     });     
   },

   showEventsCalendar: function() {
     var mod=this;
     var calendarStore = new Observable(new RequestMemory({url:"getCalendarEvents.php"}));     

     request.post("calendarContent.php", {
       handleAs: "text"
     }).then(function(data) {
       registry.byId("maniacsWorkerPane").set("content", data);
       mod.maniacsCalendar = new Calendar({
         dateInterval: "month",
         columnViewProps: {minHours: 0, maxHours: 24},
         startTimeAttr: "begin",
         endTimeAttr: "end",
         store: calendarStore,
         cssClassFunc: function(item) {
           return item.calendar;
         },
         decodeDate: function(s) {
           return stamp.fromISOString(s);
         },
         encodeDate: function(t) {
           return stamp.toISOString(s);
         },
         style: "position:relative; width:500px; height:450px"
       }, "eventsCalendar");

       mod.maniacsCalendar.on("itemClick", function(e) {

         registry.byId("maniacsCalendarEventDesc").set("disabled", false);
         registry.byId("maniacsCalendarEventDesc").set("value", e.item.summary);
         registry.byId("maniacsCalendarStartDate").set("disabled", false);
         registry.byId("maniacsCalendarStartDate").set("value", e.item.begin);
         registry.byId("maniacsCalendarStartTime").set("disabled", false);
         registry.byId("maniacsCalendarStartTime").set("value", e.item.begin);
         registry.byId("maniacsCalendarEndDate").set("disabled", false);
         registry.byId("maniacsCalendarEndDate").set("value", e.item.end);
         registry.byId("maniacsCalendarEndTime").set("disabled", false);
         registry.byId("maniacsCalendarEndTime").set("value", e.item.end);
         registry.byId("maniacsCalendarType").set("disabled", false);
         registry.byId("maniacsCalendarType").set("value", e.item.calendar);
         registry.byId("maniacsAllDayEvent").set("checked", e.item.allDay);
       });

       mod.maniacsCalendar.on("gridClick", function(e) {
         registry.byId("maniacsCalendarEventDesc").set("disabled", true);
         registry.byId("maniacsCalendarEventDesc").set("value", "");
         registry.byId("maniacsCalendarStartDate").set("disabled", true);
         registry.byId("maniacsCalendarStartDate").set("value", null);
         registry.byId("maniacsCalendarStartTime").set("disabled", true);
         registry.byId("maniacsCalendarStartTime").set("value", null);
         registry.byId("maniacsCalendarEndDate").set("disabled", true);
         registry.byId("maniacsCalendarEndDate").set("value", null);
         registry.byId("maniacsCalendarEndTime").set("disabled", true);
         registry.byId("maniacsCalendarEndTime").set("value", null);
         registry.byId("maniacsCalendarType").set("disabled", true);
         registry.byId("maniacsCalendarType").set("value", null);
         registry.byId("maniacsAllDayEvent").set("checked", false);
       });

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

    formatMap: function(object, value, node, options) {
      node.innerHTML = "<a href=\"" + value + "\" target=_blank\">Map</a>";
    },

    setupStatsGrids: function(id) {
      var mod=this;
      var StandardGrid = declare([Grid, Selection, Pagination, ColumnResizer, DijitRegistry]);

      /* Standard Batting Stats grid */
      var standardBattingStatsStore = new Observable(new RequestMemory({url:"getStandardBattingStats.php?id=" + id}));
      standardBattingStatsGrid = new StandardGrid({
         columns: {
           pa: {label: "PA", field: "plate_appearances"},
           ab: {label: "AB", field: "at_bats"},
           hits: {label: "H", field: "hits"},
           single: {label: "1B", field: "single"},
           dbl: {label: "2B", field: "dbl"},
           triple: {label: "3B", field: "triple"},
           homerun: {label: "HR", field: "homerun"},
           rbi: {label: "RBI", field: "rbi"}, 
           runs: {label: "R", field: "runs"},
           hbp: {label: "HBP", field: "hbp"},
           roe: {label: "ROE", field: "roe"},
           fc: {label: "FC", field: "fielders_choice"},
           ci: {label: "CI", field: "catcher_int"},
           bb: {label: "BB", field: "walks"},
           k: {label: "K", field: "strikeouts"},
           avg: {label: "AVG", field: "avg"},
           obp: {label: "OBP", field: "obp"},
           slg: {label: "SLG", field: "slugging"},
           ops: {label: "OPS", field: "ops"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Standard Batting Stats",
         errorMessage: "Error loading Standard Batting Stats",
         noDataMessage: "No standard batting stats exist",
         store: standardBattingStatsStore,
         sort: [{attribute: "plate_appearances", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "standardHittingGrid");
       standardBattingStatsGrid.startup();

      /* Patience, Power, & Speed Batting Stats grid */
      var patienceBattingStatsStore = new Observable(new RequestMemory({url:"getPatienceBattingStats.php?id=" + id}));
      patienceBattingStatsGrid = new StandardGrid({
         columns: {
           pa: {label: "PA", field: "plate_appearances"},
           ab: {label: "AB", field: "at_bats"},
           pabb: {label: "PA/BB", field: "pa_per_bb"},
           bbk: {label: "BB/K", field: "bb_per_k"},
           cpercent: {label: "C%", field: "c_percent"},
           sb: {label: "SB", field: "stolenbase"},
           cs: {label: "CS", field: "caughtstealing"},
           sbpercent: {label: "SB%", field: "stolenbase_percent"}, 
           pik: {label: "PIK", field: "pik"},
           gidp: {label: "GIDP", field: "gidp"},
           gitp: {label: "GITP", field: "gitp"},
           xbh: {label: "XBH", field: "extrabasehits"},
           tb: {label: "TB", field: "totalbases"},
           abhr: {label: "AB/HR", field: "ab_per_hr"},
           barispk: {label: "BA/RISP", field: "ba_risp"},
           slg: {label: "SLG", field: "slugging"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Patience Batting Stats",
         errorMessage: "Error loading Patience Batting Stats",
         noDataMessage: "No patience batting stats exist",
         store: patienceBattingStatsStore,
         sort: [{attribute: "plate_appearances", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "patienceHittingGrid");
       patienceBattingStatsGrid.startup();

      /* QAB & Team Impact Batting Stats grid */
      var qabBattingStatsStore = new Observable(new RequestMemory({url:"getQABBattingStats.php?id=" + id}));
      qabBattingStatsGrid = new StandardGrid({
         columns: {
           pa: {label: "PA", field: "plate_appearances"},
           ab: {label: "AB", field: "at_bats"},
           ps: {label: "PS", field: "ps"},
           pspa: {label: "PS/PA", field: "ps_per_pa"},
           twosplus3: {label: "2S+3", field: "two_s_plus_three"},
           twosplus3pct: {label: "2S+3%", field: "two_s_plus_t_percent"},
           sixplus: {label: "6+", field: "six_plus"},
           sixpluspct: {label: "6+%", field: "six_plus_percent"},
           sac: {label: "SAC", field: "sac"},
           sf: {label: "SF", field: "sf"},
           lob: {label: "LOB", field: "lob"},
           twooutrbi: {label: "2OUTRBI", field: "two_out_rbi"},
           hhb: {label: "HHB", field: "hhb"},
           qab: {label: "QAB", field: "qab"},
           qabpct: {label: "QAB%", field: "qab_percent"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Quality At Bats Batting Stats",
         errorMessage: "Error loading Quality At Bats Batting Stats",
         noDataMessage: "No Quality At Bats Batting Stats exist",
         store: qabBattingStatsStore,
         sort: [{attribute: "plate_appearances", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "qabHittingGrid");
       qabBattingStatsGrid.startup();

      /* Standard Pitching Stats grid */
      var standardPitchingStatsStore = new Observable(new RequestMemory({url:"getStandardPitchingStats.php?id=" + id}));
      standardPitchingStatsGrid = new StandardGrid({
         columns: {
           ip: {label: "IP", field: "pitching_innings_pitched"},
           gp: {label: "GP", field: "pitching_games_pitched"},
           gs: {label: "GS", field: "pitching_games_started"},
           wins: {label: "W", field: "pitching_wins"},
           loss: {label: "L", field: "pitching_losses"},
           sv: {label: "SV", field: "pitching_saves"},
           svopp: {label: "SVO", field: "pitching_save_opp"},
           bs: {label: "BS", field: "pitching_blown_saves"}, 
           svpct: {label: "SV%", field: "pitching_save_percent"},
           hit: {label: "H", field: "pitching_hits_allowed"},
           run: {label: "R", field: "pitching_runs_allowed"},
           er: {label: "ER", field: "pitching_earned_runs"},
           bb: {label: "BB", field: "pitching_walks"},
           k: {label: "K", field: "pitching_strikeouts"},
           hbp: {label: "HBP", field: "pitching_hit_batters"},
           era: {label: "ERA", field: "pitching_era"},
           whip: {label: "WHIP", field: "pitching_whip"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Standard Pitching Stats",
         errorMessage: "Error loading Standard Pitching Stats",
         noDataMessage: "No standard pitching stats exist",
         store: standardPitchingStatsStore,
         sort: [{attribute: "pitching_innings_pitched", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "standardPitchingGrid");
       standardPitchingStatsGrid.startup();

      /* Efficiency Pitching Stats grid */
      var efficiencyPitchingStatsStore = new Observable(new RequestMemory({url:"getEfficiencyPitchingStats.php?id=" + id}));
      efficiencyPitchingStatsGrid = new StandardGrid({
         columns: {
           ip: {label: "IP", field: "pitching_innings_pitched"},
           bf: {label: "BF", field: "pitching_batters_faced"},
           tp: {label: "#P", field: "pitching_total_pitches"},
           ts: {label: "TS", field: "pitching_total_strikes"},
           tb: {label: "TB", field: "pitching_total_balls"},
           pinn: {label: "P/IP", field: "pitching_pitches_per_inning"},
           pbf: {label: "P/BF", field: "pitching_pitches_per_batters_faced"},
           lt3: {label: "<3", field: "pitching_less_than_three"}, 
           lt3pct: {label: "<3%", field: "pitching_less_than_three_percent"},
           loo: {label: "LOO", field: "pitching_leadoff_out"},
           f2out: {label: "1ST2OUT", field: "pitching_innings_first2out"},
           ottinn: {label: "123INN", field: "pitching_123inn"},
           lt13: {label: "<13", field: "pitching_less_than_13pitches"},
           fip: {label: "FIP", field: "pitching_fielding_independent_pitching"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Efficiency Pitching Stats",
         errorMessage: "Error loading Efficiency Pitching Stats",
         noDataMessage: "No efficiency pitching stats exist",
         store: efficiencyPitchingStatsStore,
         sort: [{attribute: "pitching_innings_pitched", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "efficiencyPitchingGrid");
       efficiencyPitchingStatsGrid.startup();

      /* Command Pitching Stats grid */
      var commandPitchingStatsStore = new Observable(new RequestMemory({url:"getCommandPitchingStats.php?id=" + id}));
      commandPitchingStatsGrid = new StandardGrid({
         columns: {
           ip: {label: "IP", field: "pitching_innings_pitched"},
           bf: {label: "BF", field: "pitching_batters_faced"},
           ts: {label: "TS", field: "pitching_total_strikes"},
           spct: {label: "S%", field: "pitching_strike_percent"},
           fps: {label: "FPS", field: "pitching_first_pitch_strikes"},
           fpspct: {label: "FPS%", field: "pitching_first_pitch_strikes_percent"},
           fpsopct: {label: "FPSO%", field: "pitching_first_pitch_strike_out_percent"}, 
           fpsbb: {label: "FPSW%", field: "pitching_first_pitch_strike_walks"},
           fpsh: {label: "FPSH%", field: "pitching_first_pitch_strike_hits"},
           bbinn: {label: "BB/INN", field: "pitching_walks_per_inning"},
           zerobb: {label: "0BBINN", field: "pitching_zero_walk_innings"},
           bbs: {label: "BBS", field: "pitching_walks_that_score"},
           lobb: {label: "LOBB", field: "pitching_leadoff_walk"},
           lobbs: {label: "LOBBS", field: "pitching_leadoff_walk_scored"},
           wp: {label: "LOBB", field: "pitching_wild_pitches"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Command Pitching Stats",
         errorMessage: "Error loading Command Pitching Stats",
         noDataMessage: "No command pitching stats exist",
         store: commandPitchingStatsStore,
         sort: [{attribute: "pitching_innings_pitched", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "commandPitchingGrid");
       commandPitchingStatsGrid.startup();

      /* Batter Results Pitching Stats grid */
      var batterPitchingStatsStore = new Observable(new RequestMemory({url:"getBatterPitchingStats.php?id=" + id}));
      batterPitchingStatsGrid = new StandardGrid({
         columns: {
           ip: {label: "IP", field: "pitching_innings_pitched"},
           bf: {label: "BF", field: "pitching_batters_faced"},
           tp: {label: "#P", field: "pitching_total_pitches"},
           sm: {label: "SM", field: "pitching_swing_miss"},
           smpct: {label: "SM%", field: "pitching_swing_miss_percent"},
           k: {label: "K", field: "pitching_strikeouts"},
           kg: {label: "K/G", field: "pitching_strikeouts_per_regulation_game"}, 
           kbf: {label: "K/BF", field: "pitching_strikeouts_per_batter_faced"},
           kbb: {label: "K/BB", field: "pitching_strikeouts_per_walk"},
           weak: {label: "WEAK%", field: "pitching_weak_percent"},
           hhbpct: {label: "HHB%", field: "pitching_hardhit_ball_percent"},
           gbpct: {label: "GB%", field: "pitching_groundball_percent"},
           gbpct: {label: "GB%", field: "pitching_groundball_percent"},
           fbpct: {label: "FLY%", field: "pitching_flyball_percent"},
           go: {label: "GO", field: "pitching_groundouts"},
           fo: {label: "FO", field: "pitching_flyouts"},
           gofo: {label: "GO/FO", field: "pitching_go_fo_ratio"},
           baa: {label: "BAA", field: "pitching_opponent_batting_avg"},
           hr: {label: "HR", field: "pitching_homeruns_allowed"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Batter Results Pitching Stats",
         errorMessage: "Error loading Batter Results Pitching Stats",
         noDataMessage: "No batter results pitching stats exist",
         store: batterPitchingStatsStore,
         sort: [{attribute: "pitching_innings_pitched", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "batterPitchingGrid");
       batterPitchingStatsGrid.startup();

      /* Running and Running Game Pitching Stats grid */
      var runningPitchingStatsStore = new Observable(new RequestMemory({url:"getRunningPitchingStats.php?id=" + id}));
      runningPitchingStatsGrid = new StandardGrid({
         columns: {
           ip: {label: "IP", field: "pitching_innings_pitched"},
           lob: {label: "LOB", field: "pitching_left_on_base"},
           bk: {label: "BK", field: "pitching_balks"},
           pik: {label: "PIK", field: "pitching_picked_off"},
           sb: {label: "SB", field: "pitching_stolenbases_allowed"},
           cs: {label: "CS", field: "pitching_caught_stealing"},
           sbpct: {label: "SB%", field: "pitching_stolenbase_percent"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Running and Running Game Pitching Stats",
         errorMessage: "Error loading Running and Running Game Pitching Stats",
         noDataMessage: "No running and running game pitching stats exist",
         store: runningPitchingStatsStore,
         sort: [{attribute: "pitching_innings_pitched", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "runningPitchingGrid");
       runningPitchingStatsGrid.startup();

      /* Pitch Breakdown Pitching Stats grid */
      var pitchesPitchingStatsStore = new Observable(new RequestMemory({url:"getPitchesPitchingStats.php?id=" + id}));
      pitchesPitchingStatsGrid = new StandardGrid({
         columns: {
           tp: {label: "#P", field: "pitching_total_pitches"},
           fb: {label: "FB", field: "pitching_num_fastballs"},
           fbs: {label: "FBS", field: "pitching_num_fastballs_strikes"},
           cb: {label: "CB", field: "pitching_num_curveballs"},
           cbs: {label: "CBS", field: "pitching_num_curveballs_strikes"},
           ch: {label: "CH", field: "pitching_num_changeups"},
           chs: {label: "CHS", field: "pitching_num_changeups_strikes"},
           rb: {label: "RB", field: "pitching_num_riseballs"},
           rbs: {label: "RBS", field: "pitching_num_riseballs_strikes"},
           db: {label: "DB", field: "pitching_num_dropballs"},
           dbs: {label: "DBS", field: "pitching_num_dropballs_strikes"},
           sc: {label: "SC", field: "pitching_num_screwballs"},
           scs: {label: "SCS", field: "pitching_num_screwballs_strikes"},
           os: {label: "OS", field: "pitching_num_offspeed"},
           oss: {label: "OSS", field: "pitching_num_offspeed_strikes"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Pitch Breakdown Pitching Stats",
         errorMessage: "Error loading Pitch Breakdown Pitching Stats",
         noDataMessage: "No pitch breakdown pitching stats exist",
         store: pitchesPitchingStatsStore,
         sort: [{attribute: "pitching_total_pitches", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "pitchesPitchingGrid");
       pitchesPitchingStatsGrid.startup();

      /* Standard Fielding Stats grid */
      var standardFieldingStatsStore = new Observable(new RequestMemory({url:"getStandardFieldingStats.php?id=" + id}));
      standardFieldingStatsGrid = new StandardGrid({
         columns: {
           tc: {label: "TC", field: "fielding_total_chances"},
           assist: {label: "A", field: "fielding_assists"},
           po: {label: "PO", field: "fielding_putouts"},
           err: {label: "E", field: "fielding_errors"},
           dp: {label: "DP", field: "fielding_double_plays"},
           tp: {label: "TP", field: "fielding_triple_plays"},
           fpct: {label: "FPCT", field: "fielding_field_percent"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Standard Fielding Stats",
         errorMessage: "Error loading Standard Fielding Stats",
         noDataMessage: "No standard field stats exist",
         store: standardFieldingStatsStore,
         sort: [{attribute: "fielding_total_chances", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "standardFieldingGrid");
       standardFieldingStatsGrid.startup();

      /* Catching Stats grid */
      var catchingStatsStore = new Observable(new RequestMemory({url:"getCatchingStats.php?id=" + id}));
      catchingStatsGrid = new StandardGrid({
         columns: {
           inn: {label: "INN", field: "catching_innings_caught"},
           pb: {label: "PB", field: "catching_passed_balls"},
           sb: {label: "SB", field: "catching_stolen_bases_allowed"},
           cs: {label: "CS", field: "catching_caught_stealing"},
           cspct: {label: "CS%", field: "catching_caught_stealing_percent"},
           pik: {label: "PIK", field: "catching_picked_off"},
           ci: {label: "CI", field: "catching_catcher_interference"}
         },
         className: "dgrid-autoheight",
         loadingMessage: "Loading Catching Stats",
         errorMessage: "Error loading Catching Stats",
         noDataMessage: "No catching stats exist",
         store: catchingStatsStore,
         sort: [{attribute: "catching_innings_caught", descending: true}],
         selectionMode: "none",
         rowsPerPage: 2
       }, "catchingGrid");
       catchingStatsGrid.startup();

    }
  }

});
