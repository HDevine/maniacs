//>>built
define("mobile/maniacsMobile","dijit/registry dojo/_base/declare dojo/request dojo/dom-construct dojo-smore/RequestMemory dojo/store/Observable dojo/date/stamp dojox/calendar/Calendar dgrid/Grid dgrid/extensions/Pagination dgrid/extensions/ColumnResizer dgrid/extensions/DijitRegistry dgrid/Selection".split(" "),function(b,k,f,g,d,e,h,l,m,n,p,q,r){return{populateNews:function(){f.post("mobileNews.php",{handleAs:"text"}).then(function(a){g.place(a,"mobileNews","after")})},populatePhotos:function(){f.post("mobileTeamPhotos.php",
{handleAs:"text"}).then(function(a){g.place(a,"mobilePhotos","after")})},populateCalendar:function(){var a=new e(new d({url:"mobileCalendarEvents.php"})),a=new l({dateInterval:"month",columnViewProps:{minHours:0,maxHours:24},startTimeAttr:"begin",endTimeAttr:"end",store:a,cssClassFunc:function(a){return a.calendar},decodeDate:function(a){return h.fromISOString(a)},encodeDate:function(a){return h.toISOString(s)},style:"position:relative; width:100%; height:250px"},"mobileCalendar");a.on("itemClick",
function(a){b.byId("maniacsCalendarEventDesc").set("disabled",!1);b.byId("maniacsCalendarEventDesc").set("value",a.item.summary);b.byId("maniacsCalendarStartDate").set("disabled",!1);b.byId("maniacsCalendarStartDate").set("value",a.item.begin);b.byId("maniacsCalendarStartTime").set("disabled",!1);b.byId("maniacsCalendarStartTime").set("value",a.item.begin);b.byId("maniacsCalendarEndDate").set("disabled",!1);b.byId("maniacsCalendarEndDate").set("value",a.item.end);b.byId("maniacsCalendarEndTime").set("disabled",
!1);b.byId("maniacsCalendarEndTime").set("value",a.item.end);b.byId("maniacsCalendarType").set("disabled",!1);b.byId("maniacsCalendarType").set("value",a.item.calendar);b.byId("maniacsAllDayEvent").set("checked",a.item.allDay)});a.on("gridClick",function(a){b.byId("maniacsCalendarEventDesc").set("disabled",!0);b.byId("maniacsCalendarEventDesc").set("value","");b.byId("maniacsCalendarStartDate").set("disabled",!0);b.byId("maniacsCalendarStartDate").set("value",null);b.byId("maniacsCalendarStartTime").set("disabled",
!0);b.byId("maniacsCalendarStartTime").set("value",null);b.byId("maniacsCalendarEndDate").set("disabled",!0);b.byId("maniacsCalendarEndDate").set("value",null);b.byId("maniacsCalendarEndTime").set("disabled",!0);b.byId("maniacsCalendarEndTime").set("value",null);b.byId("maniacsCalendarType").set("disabled",!0);b.byId("maniacsCalendarType").set("value",null);b.byId("maniacsAllDayEvent").set("checked",!1)})},populateEvents:function(){f.post("mobileEvents.php",{handleAs:"text"}).then(function(a){g.place(a,
"mobileEvents","after")})},populatePractices:function(){f.post("mobilePractices.php",{handleAs:"text"}).then(function(a){g.place(a,"mobilePractices","after")})},populateGames:function(){f.post("mobileGames.php",{handleAs:"text"}).then(function(a){g.place(a,"mobileGames","after")})},populateRoster:function(){f.post("mobilePlayers.php",{handleAs:"text"}).then(function(a){g.place(a,"mobileRoster","after")})},populateCoaches:function(){f.post("mobileCoaches.php",{handleAs:"text"}).then(function(a){g.place(a,
"mobileCoaches","after")})},setupStatsGrids:function(a){var b=k([m,r,n,p,q]),c=new e(new d({url:"../getStandardBattingStats.php?id\x3d"+a}));standardBattingStatsGrid=new b({columns:{pa:{label:"PA",field:"plate_appearances"},ab:{label:"AB",field:"at_bats"},hits:{label:"H",field:"hits"},single:{label:"1B",field:"single"},dbl:{label:"2B",field:"dbl"},triple:{label:"3B",field:"triple"},homerun:{label:"HR",field:"homerun"},rbi:{label:"RBI",field:"rbi"},runs:{label:"R",field:"runs"},hbp:{label:"HBP",field:"hbp"},
roe:{label:"ROE",field:"roe"},fc:{label:"FC",field:"fielders_choice"},ci:{label:"CI",field:"catcher_int"},bb:{label:"BB",field:"walks"},k:{label:"K",field:"strikeouts"},avg:{label:"AVG",field:"avg"},obp:{label:"OBP",field:"obp"},slg:{label:"SLG",field:"slugging"},ops:{label:"OPS",field:"ops"}},className:"dgrid-autoheight",loadingMessage:"Loading Standard Batting Stats",errorMessage:"Error loading Standard Batting Stats",noDataMessage:"No standard batting stats exist",store:c,sort:[{attribute:"plate_appearances",
descending:!0}],selectionMode:"none",rowsPerPage:2},"standardHittingGrid");standardBattingStatsGrid.startup();c=new e(new d({url:"../getPatienceBattingStats.php?id\x3d"+a}));patienceBattingStatsGrid=new b({columns:{pa:{label:"PA",field:"plate_appearances"},ab:{label:"AB",field:"at_bats"},pabb:{label:"PA/BB",field:"pa_per_bb"},bbk:{label:"BB/K",field:"bb_per_k"},cpercent:{label:"C%",field:"c_percent"},sb:{label:"SB",field:"stolenbase"},cs:{label:"CS",field:"caughtstealing"},sbpercent:{label:"SB%",
field:"stolenbase_percent"},pik:{label:"PIK",field:"pik"},gidp:{label:"GIDP",field:"gidp"},gitp:{label:"GITP",field:"gitp"},xbh:{label:"XBH",field:"extrabasehits"},tb:{label:"TB",field:"totalbases"},abhr:{label:"AB/HR",field:"ab_per_hr"},barispk:{label:"BA/RISP",field:"ba_risp"},slg:{label:"SLG",field:"slugging"}},className:"dgrid-autoheight",loadingMessage:"Loading Patience Batting Stats",errorMessage:"Error loading Patience Batting Stats",noDataMessage:"No patience batting stats exist",store:c,
sort:[{attribute:"plate_appearances",descending:!0}],selectionMode:"none",rowsPerPage:2},"patienceHittingGrid");patienceBattingStatsGrid.startup();c=new e(new d({url:"../getQABBattingStats.php?id\x3d"+a}));qabBattingStatsGrid=new b({columns:{pa:{label:"PA",field:"plate_appearances"},ab:{label:"AB",field:"at_bats"},ps:{label:"PS",field:"ps"},pspa:{label:"PS/PA",field:"ps_per_pa"},twosplus3:{label:"2S+3",field:"two_s_plus_three"},twosplus3pct:{label:"2S+3%",field:"two_s_plus_t_percent"},sixplus:{label:"6+",
field:"six_plus"},sixpluspct:{label:"6+%",field:"six_plus_percent"},sac:{label:"SAC",field:"sac"},sf:{label:"SF",field:"sf"},lob:{label:"LOB",field:"lob"},twooutrbi:{label:"2OUTRBI",field:"two_out_rbi"},hhb:{label:"HHB",field:"hhb"},qab:{label:"QAB",field:"qab"},qabpct:{label:"QAB%",field:"qab_percent"}},className:"dgrid-autoheight",loadingMessage:"Loading Quality At Bats Batting Stats",errorMessage:"Error loading Quality At Bats Batting Stats",noDataMessage:"No Quality At Bats Batting Stats exist",
store:c,sort:[{attribute:"plate_appearances",descending:!0}],selectionMode:"none",rowsPerPage:2},"qabHittingGrid");qabBattingStatsGrid.startup();c=new e(new d({url:"../getStandardPitchingStats.php?id\x3d"+a}));standardPitchingStatsGrid=new b({columns:{ip:{label:"IP",field:"pitching_innings_pitched"},gp:{label:"GP",field:"pitching_games_pitched"},gs:{label:"GS",field:"pitching_games_started"},wins:{label:"W",field:"pitching_wins"},loss:{label:"L",field:"pitching_losses"},sv:{label:"SV",field:"pitching_saves"},
svopp:{label:"SVO",field:"pitching_save_opp"},bs:{label:"BS",field:"pitching_blown_saves"},svpct:{label:"SV%",field:"pitching_save_percent"},hit:{label:"H",field:"pitching_hits_allowed"},run:{label:"R",field:"pitching_runs_allowed"},er:{label:"ER",field:"pitching_earned_runs"},bb:{label:"BB",field:"pitching_walks"},k:{label:"K",field:"pitching_strikeouts"},hbp:{label:"HBP",field:"pitching_hit_batters"},era:{label:"ERA",field:"pitching_era"},whip:{label:"WHIP",field:"pitching_whip"}},className:"dgrid-autoheight",
loadingMessage:"Loading Standard Pitching Stats",errorMessage:"Error loading Standard Pitching Stats",noDataMessage:"No standard pitching stats exist",store:c,sort:[{attribute:"pitching_innings_pitched",descending:!0}],selectionMode:"none",rowsPerPage:2},"standardPitchingGrid");standardPitchingStatsGrid.startup();c=new e(new d({url:"../getEfficiencyPitchingStats.php?id\x3d"+a}));efficiencyPitchingStatsGrid=new b({columns:{ip:{label:"IP",field:"pitching_innings_pitched"},bf:{label:"BF",field:"pitching_batters_faced"},
tp:{label:"#P",field:"pitching_total_pitches"},ts:{label:"TS",field:"pitching_total_strikes"},tb:{label:"TB",field:"pitching_total_balls"},pinn:{label:"P/IP",field:"pitching_pitches_per_inning"},pbf:{label:"P/BF",field:"pitching_pitches_per_batters_faced"},lt3:{label:"\x3c3",field:"pitching_less_than_three"},lt3pct:{label:"\x3c3%",field:"pitching_less_than_three_percent"},loo:{label:"LOO",field:"pitching_leadoff_out"},f2out:{label:"1ST2OUT",field:"pitching_innings_first2out"},ottinn:{label:"123INN",
field:"pitching_123inn"},lt13:{label:"\x3c13",field:"pitching_less_than_13pitches"},fip:{label:"FIP",field:"pitching_fielding_independent_pitching"}},className:"dgrid-autoheight",loadingMessage:"Loading Efficiency Pitching Stats",errorMessage:"Error loading Efficiency Pitching Stats",noDataMessage:"No efficiency pitching stats exist",store:c,sort:[{attribute:"pitching_innings_pitched",descending:!0}],selectionMode:"none",rowsPerPage:2},"efficiencyPitchingGrid");efficiencyPitchingStatsGrid.startup();
c=new e(new d({url:"../getCommandPitchingStats.php?id\x3d"+a}));commandPitchingStatsGrid=new b({columns:{ip:{label:"IP",field:"pitching_innings_pitched"},bf:{label:"BF",field:"pitching_batters_faced"},ts:{label:"TS",field:"pitching_total_strikes"},spct:{label:"S%",field:"pitching_strike_percent"},fps:{label:"FPS",field:"pitching_first_pitch_strikes"},fpspct:{label:"FPS%",field:"pitching_first_pitch_strikes_percent"},fpsopct:{label:"FPSO%",field:"pitching_first_pitch_strike_out_percent"},fpsbb:{label:"FPSW%",
field:"pitching_first_pitch_strike_walks"},fpsh:{label:"FPSH%",field:"pitching_first_pitch_strike_hits"},bbinn:{label:"BB/INN",field:"pitching_walks_per_inning"},zerobb:{label:"0BBINN",field:"pitching_zero_walk_innings"},bbs:{label:"BBS",field:"pitching_walks_that_score"},lobb:{label:"LOBB",field:"pitching_leadoff_walk"},lobbs:{label:"LOBBS",field:"pitching_leadoff_walk_scored"},wp:{label:"LOBB",field:"pitching_wild_pitches"}},className:"dgrid-autoheight",loadingMessage:"Loading Command Pitching Stats",
errorMessage:"Error loading Command Pitching Stats",noDataMessage:"No command pitching stats exist",store:c,sort:[{attribute:"pitching_innings_pitched",descending:!0}],selectionMode:"none",rowsPerPage:2},"commandPitchingGrid");commandPitchingStatsGrid.startup();c=new e(new d({url:"../getBatterPitchingStats.php?id\x3d"+a}));batterPitchingStatsGrid=new b({columns:{ip:{label:"IP",field:"pitching_innings_pitched"},bf:{label:"BF",field:"pitching_batters_faced"},tp:{label:"#P",field:"pitching_total_pitches"},
sm:{label:"SM",field:"pitching_swing_miss"},smpct:{label:"SM%",field:"pitching_swing_miss_percent"},k:{label:"K",field:"pitching_strikeouts"},kg:{label:"K/G",field:"pitching_strikeouts_per_regulation_game"},kbf:{label:"K/BF",field:"pitching_strikeouts_per_batter_faced"},kbb:{label:"K/BB",field:"pitching_strikeouts_per_walk"},weak:{label:"WEAK%",field:"pitching_weak_percent"},hhbpct:{label:"HHB%",field:"pitching_hardhit_ball_percent"},gbpct:{label:"GB%",field:"pitching_groundball_percent"},gbpct:{label:"GB%",
field:"pitching_groundball_percent"},fbpct:{label:"FLY%",field:"pitching_flyball_percent"},go:{label:"GO",field:"pitching_groundouts"},fo:{label:"FO",field:"pitching_flyouts"},gofo:{label:"GO/FO",field:"pitching_go_fo_ratio"},baa:{label:"BAA",field:"pitching_opponent_batting_avg"},hr:{label:"HR",field:"pitching_homeruns_allowed"}},className:"dgrid-autoheight",loadingMessage:"Loading Batter Results Pitching Stats",errorMessage:"Error loading Batter Results Pitching Stats",noDataMessage:"No batter results pitching stats exist",
store:c,sort:[{attribute:"pitching_innings_pitched",descending:!0}],selectionMode:"none",rowsPerPage:2},"batterPitchingGrid");batterPitchingStatsGrid.startup();c=new e(new d({url:"../getRunningPitchingStats.php?id\x3d"+a}));runningPitchingStatsGrid=new b({columns:{ip:{label:"IP",field:"pitching_innings_pitched"},lob:{label:"LOB",field:"pitching_left_on_base"},bk:{label:"BK",field:"pitching_balks"},pik:{label:"PIK",field:"pitching_picked_off"},sb:{label:"SB",field:"pitching_stolenbases_allowed"},cs:{label:"CS",
field:"pitching_caught_stealing"},sbpct:{label:"SB%",field:"pitching_stolenbase_percent"}},className:"dgrid-autoheight",loadingMessage:"Loading Running and Running Game Pitching Stats",errorMessage:"Error loading Running and Running Game Pitching Stats",noDataMessage:"No running and running game pitching stats exist",store:c,sort:[{attribute:"pitching_innings_pitched",descending:!0}],selectionMode:"none",rowsPerPage:2},"runningPitchingGrid");runningPitchingStatsGrid.startup();c=new e(new d({url:"../getPitchesPitchingStats.php?id\x3d"+
a}));pitchesPitchingStatsGrid=new b({columns:{tp:{label:"#P",field:"pitching_total_pitches"},fb:{label:"FB",field:"pitching_num_fastballs"},fbs:{label:"FBS",field:"pitching_num_fastballs_strikes"},cb:{label:"CB",field:"pitching_num_curveballs"},cbs:{label:"CBS",field:"pitching_num_curveballs_strikes"},ch:{label:"CH",field:"pitching_num_changeups"},chs:{label:"CHS",field:"pitching_num_changeups_strikes"},rb:{label:"RB",field:"pitching_num_riseballs"},rbs:{label:"RBS",field:"pitching_num_riseballs_strikes"},
db:{label:"DB",field:"pitching_num_dropballs"},dbs:{label:"DBS",field:"pitching_num_dropballs_strikes"},sc:{label:"SC",field:"pitching_num_screwballs"},scs:{label:"SCS",field:"pitching_num_screwballs_strikes"},os:{label:"OS",field:"pitching_num_offspeed"},oss:{label:"OSS",field:"pitching_num_offspeed_strikes"}},className:"dgrid-autoheight",loadingMessage:"Loading Pitch Breakdown Pitching Stats",errorMessage:"Error loading Pitch Breakdown Pitching Stats",noDataMessage:"No pitch breakdown pitching stats exist",
store:c,sort:[{attribute:"pitching_total_pitches",descending:!0}],selectionMode:"none",rowsPerPage:2},"pitchesPitchingGrid");pitchesPitchingStatsGrid.startup();c=new e(new d({url:"../getStandardFieldingStats.php?id\x3d"+a}));standardFieldingStatsGrid=new b({columns:{tc:{label:"TC",field:"fielding_total_chances"},assist:{label:"A",field:"fielding_assists"},po:{label:"PO",field:"fielding_putouts"},err:{label:"E",field:"fielding_errors"},dp:{label:"DP",field:"fielding_double_plays"},tp:{label:"TP",field:"fielding_triple_plays"},
fpct:{label:"FPCT",field:"fielding_field_percent"}},className:"dgrid-autoheight",loadingMessage:"Loading Standard Fielding Stats",errorMessage:"Error loading Standard Fielding Stats",noDataMessage:"No standard field stats exist",store:c,sort:[{attribute:"fielding_total_chances",descending:!0}],selectionMode:"none",rowsPerPage:2},"standardFieldingGrid");standardFieldingStatsGrid.startup();a=new e(new d({url:"../getCatchingStats.php?id\x3d"+a}));catchingStatsGrid=new b({columns:{inn:{label:"INN",field:"catching_innings_caught"},
pb:{label:"PB",field:"catching_passed_balls"},sb:{label:"SB",field:"catching_stolen_bases_allowed"},cs:{label:"CS",field:"catching_caught_stealing"},cspct:{label:"CS%",field:"catching_caught_stealing_percent"},pik:{label:"PIK",field:"catching_picked_off"},ci:{label:"CI",field:"catching_catcher_interference"}},className:"dgrid-autoheight",loadingMessage:"Loading Catching Stats",errorMessage:"Error loading Catching Stats",noDataMessage:"No catching stats exist",store:a,sort:[{attribute:"catching_innings_caught",
descending:!0}],selectionMode:"none",rowsPerPage:2},"catchingGrid");catchingStatsGrid.startup()}}});
//# sourceMappingURL=maniacsMobile.js.map