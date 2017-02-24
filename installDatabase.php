<?php
  /* Connect to the MySQL server */
  $dbhost = "localhost";
  $dbuser = "root"; 
  $dbpass = "DB5Mgr123";

  $linkID = mysqli_connect($dbhost, $dbuser, $dbpass) or die("Could not connect to the MySQL server");
  mysqli_select_db($linkID, "db654380227") or die("Could not connect to the Maniacs database!");

  /* Create the necessary tables */

  /* Players Table */
  echo "Creating Players table\n";
  $sql = "CREATE TABLE players
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         firstname TEXT,
         lastname TEXT,
         number INT,
         position1 TEXT,
         position2 TEXT,
         position3 TEXT,
         throws TEXT,
         bats TEXT,
         height TEXT,
         weight TEXT,
         age INT,
         dob DATETIME,
         address TEXT,
         city TEXT,
         state TEXT,
         zip TEXT,
         phone TEXT,
         email TEXT,
         profile_pic_path TEXT,
         video_url TEXT,
         hs TEXT,
         hs_address TEXT,
         hs_city TEXT,
         hs_state TEXT,
         hs_zip TEXT,
         hs_phone TEXT,
         grad_date TEXT,
         hs_athletic_director TEXT,
         hs_softball_coach TEXT,
         hs_sports_played TEXT,
         hs_gpa TEXT,
         hs_class_rank TEXT,
         hs_psat TEXT,
         hs_sat TEXT,
         hs_softball_highlights TEXT,
         hs_clubs_activities TEXT,
         travel_year TEXT,
         travel_coach TEXT,
         travel_coach_phone TEXT,
         travel_coach_email TEXT,
         travel_highlights TEXT,
         travel_stats TEXT,
         mom_name TEXT,
         mom_phone TEXT,
         dad_name TEXT,
         dad_phone TEXT,
         parent_email TEXT,
         personal_statement TEXT,
         community_service TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Players table (players) created successfully\n";
  }
  else
  {
    echo 'Error creating Players table (players): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }
  
  /* Coaches Table */
  echo "Creating Coaches table\n";
  $sql = "CREATE TABLE coaches
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         coach_name TEXT,
         coach_position TEXT,
         coach_email TEXT,
         coach_phone TEXT,
         coach_pic_path TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Coaches table (coaches) created successfully\n";
  }
  else
  {
    echo 'Error creating Coaches table (coaches): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* Stats Table */
  echo "Creating Stats table\n";
  $sql = "CREATE TABLE stats
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         player_id INT,
         games_played INT,
         plate_appearances INT,
         at_bats INT,
         hits INT,
         single INT,
         dbl INT,
         triple INT,
         homerun INT,
         rbi INT,
         runs INT,
         hbp INT,
         roe INT,
         fielders_choice INT,
         catcher_int INT,
         walks INT,
         strikeouts INT,
         avg TEXT,
         obp TEXT,
         slugging TEXT,
         ops TEXT,
         pa_per_bb TEXT,
         bb_per_k TEXT,
         c_percent TEXT,
         stolenbase INT,
         caughtstealing INT,
         stolenbase_percent TEXT,
         pik INT,
         gidp INT,
         gitp INT, 
         extrabasehits INT,
         totalbases INT,
         ab_per_hr TEXT,
         ba_risp TEXT,
         ps INT,
         ps_per_pa TEXT,
         two_s_plus_three INT,
         two_s_plus_t_percent TEXT,
         six_plus INT,
         six_plus_percent TEXT,
         sac INT,
         sf INT,
         lob INT,
         two_out_rbi INT,
         hhb INT,
         qab INT,
         qab_percent TEXT,
         pitching_innings_pitched INT,
         pitching_games_pitched INT,
         pitching_games_started INT,
         pitching_wins INT,
         pitching_losses INT,
         pitching_saves INT,
         pitching_save_opp INT,
         pitching_blown_saves INT,
         pitching_save_percent TEXT,
         pitching_hits_allowed INT,
         pitching_runs_allowed INT,
         pitching_earned_runs INT,
         pitching_walks INT,
         pitching_strikeouts INT,
         pitching_hit_batters INT,
         pitching_era TEXT,
         pitching_whip TEXT,
         pitching_batters_faced INT,
         pitching_total_pitches INT,
         pitching_total_strikes INT,
         pitching_total_balls INT,
         pitching_pitches_per_inning TEXT,
         pitching_pitches_per_batters_faced TEXT,
         pitching_less_than_three INT,
         pitching_less_than_three_percent TEXT,
         pitching_leadoff_out INT,
         pitching_innings_first2out INT,
         pitching_123inn INT,
         pitching_less_than_13pitches INT,
         pitching_fielding_independent_pitching TEXT,
         pitching_strike_percent TEXT,
         pitching_first_pitch_strikes INT,
         pitching_first_pitch_strikes_percent TEXT,
         pitching_first_pitch_strike_out_percent TEXT,
         pitching_first_pitch_strike_walks TEXT,
         pitching_first_pitch_strike_hits TEXT,
         pitching_walks_per_inning TEXT,
         pitching_zero_walk_innings INT,
         pitching_walks_that_score INT,
         pitching_leadoff_walk INT,
         pitching_leadoff_walk_scored INT,
         pitching_wild_pitches INT,
         pitching_atbats_against INT,
         pitching_swing_miss INT,
         pitching_swing_miss_percent TEXT,
         pitching_strikeouts_per_regulation_game TEXT,
         pitching_strikeouts_per_batter_faced TEXT,
         pitching_strikeouts_per_walk TEXT,
         pitching_weak_percent TEXT,
         pitching_hardhit_ball_percent TEXT,
         pitching_groundball_percent TEXT,
         pitching_flyball_percent TEXT,
         pitching_groundouts INT,
         pitching_flyouts INT,
         pitching_go_fo_ratio TEXT,
         pitching_opponent_batting_avg TEXT,
         pitching_homeruns_allowed INT,
         pitching_left_on_base INT,
         pitching_balks INT,
         pitching_picked_off INT,
         pitching_stolenbases_allowed INT,
         pitching_caught_stealing INT,
         pitching_stolenbase_percent TEXT,
         pitching_num_fastballs INT,
         pitching_num_fastballs_strikes INT,
         pitching_fastballs_strikes_percent TEXT,
         pitching_num_curveballs INT,
         pitching_num_curveballs_strikes INT,
         pitching_curveballs_strikes_percent TEXT,
         pitching_num_changeups INT,
         pitching_num_changeups_strikes INT,
         pitching_changeups_strikes_percent TEXT,
         pitching_num_riseballs INT,
         pitching_num_riseballs_strikes INT,
         pitching_riseballs_strikes_percent TEXT,
         pitching_num_dropballs INT,
         pitching_num_dropballs_strikes INT,
         pitching_dropballs_strikes_percent TEXT,
         pitching_num_screwballs INT,
         pitching_num_screwballs_strikes INT,
         pitching_screwballs_strikes_percent TEXT,
         pitching_num_offspeed INT,
         pitching_num_offspeed_strikes INT,
         pitching_offspeed_strikes_percent TEXT,
         fielding_total_chances INT,
         fielding_assists INT,
         fielding_putouts INT,
         fielding_errors INT,
         fielding_double_plays INT,
         fielding_triple_plays INT,
         fielding_field_percent TEXT,
         catching_innings_caught TEXT,
         catching_passed_balls INT,
         catching_stolen_bases_allowed INT,
         catching_caught_stealing INT,
         catching_caught_stealing_percent TEXT,
         catching_picked_off INT,
         catching_catcher_interference INT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Players table (players) created successfully\n";
  }
  else
  {
    echo 'Error creating Players table (players): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* Events Table */
  echo "Creating Events table\n";
  $sql = "CREATE TABLE events
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         event_date DATETIME,
         event_desc TEXT,
         event_data TEXT,
         event_start DATETIME,
         event_end DATETIME,
         event_address TEXT,
         event_city TEXT,
         event_state TEXT,
         event_zip TEXT,
         event_map TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Events table (events) created successfully\n";
  }
  else
  {
    echo 'Error creating Events table (events): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* News Table */
  echo "Creating News table\n";
  $sql = "CREATE TABLE news
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         news_date DATETIME,
         news_desc TEXT,
         news_data TEXT,
         news_image TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "News table (news) created successfully\n";
  }
  else
  {
    echo 'Error creating News table (news): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* Games Table */
  echo "Creating Games table\n";
  $sql = "CREATE TABLE games
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         game_date DATETIME,
         game_time DATETIME,
         game_type TEXT,
         game_opponent TEXT,
         opponent_score INT,
         maniacs_score INT,
         game_address TEXT,
         game_city TEXT,
         game_state TEXT,
         game_zip TEXT,
         game_map TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Games table (games) created successfully\n";
  }
  else
  {
    echo 'Error creating Games table (games): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* Practices Table */
  echo "Creating Practices table\n";
  $sql = "CREATE TABLE practices
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         practice_date DATETIME,
         practice_start DATETIME,
         practice_end DATETIME,
         practice_address TEXT,
         practice_city TEXT,
         practice_state TEXT,
         practice_zip TEXT,
         practice_map TEXT,
         practice_desc TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Practices table (practices) created successfully\n";
  }
  else
  {
    echo 'Error creating Practices table (games): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* Team Photos Table */
  echo "Creating Team Photos table\n";
  $sql = "CREATE TABLE photos
         (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         photo_path TEXT,
         photo_url TEXT,
         photo_desc TEXT
         )";
  
  if (mysqli_query($linkID, $sql))
  {
    echo "Team Photos table (practices) created successfully\n";
  }
  else
  {
    echo 'Error creating Team Photos table (games): ' . mysqli_errno($linkID) . ": " . mysqli_error($linkID) . "\n";
  }

  /* Close the connection */
  echo "All tables created!\n";
  mysqli_close($linkID);

?>

