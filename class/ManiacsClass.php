<?php

class ManiacsClass {

  /************************************************************************/
  /*                        Public Class Methods                          */
  /************************************************************************/

  public function __construct() {
  /************************************************************************/
  /* Class Constructor                                                    */
  /*  Description - Constructor for the Maniacs class                     */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Currently does nothing.                                   */
  /************************************************************************/

  }

  public function connect_to_db() {
  /************************************************************************/
  /* connect_to_db                                                        */
  /*  Description - This function will make a connection to the Maniacs   */
  /*                backend database.                                     */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Gets a connection ID from MySQL                           */
  /************************************************************************/

     /* Set the connection to the backend database */
     include "connect_info.php";
     $linkID = mysqli_connect($dbhost, $dbuser, $dbpass) or
           die("Could not connect to the MySQL server");

     mysqli_select_db($linkID, "db654380227") or
       die("Could not connect to the Maniacs database!");

     return $linkID;
  }

  public function GetRosterData($type) {
  /************************************************************************/
  /* GetRosterData                                                        */
  /*  Description - This function will retrieve the roster information    */
  /*                for the Maniacs.  If $type is basic, only the basic   */
  /*                data for each roster member is retrieved, as this     */
  /*                data will be displayed on the main roster page.  If   */
  /*                $type is full, retrieve all data for each roster      */
  /*                member.  This data will be displayed on that roster   */
  /*                member's full profile page.  If $type is admin, then  */
  /*                only the main admin information will be retrieved.    */
  /*                This data will be used on the admin section of the    */
  /*                site, and will not contain any stats data, as that    */
  /*                data will be obtained via the GameChanger CSV export. */
  /*  Accepts - Type of query (basic, full, admin).                       */
  /*  Returns - Array of roster information.                              */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     switch ($type) {
       case "basic":
         $sql = "SELECT id, firstname, lastname, number, position1, profile_pic_path FROM players ORDER BY number ASC";
         break;
       case "full":
         $sql = "SELECT * FROM players p LEFT JOIN stats s ON s.player_id = p.id";
         break;
       case "admin":
         $sql = "SELECT * FROM players ORDER BY number ASC";
         break;
     }
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetRosterProfile($id) {
  /************************************************************************/
  /* GetRosterProfile                                                     */
  /*  Description - This function will retrieve the roster information    */
  /*                for the Maniacs player associated with the given ID.  */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player information.                              */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
//     $sql = "SELECT firstname, lastname, number, position1, position2, position3, profile_pic_path, age FROM players WHERE id='$id'";
     $sql = "SELECT * FROM players WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function AddRosterMember($info) {
  /************************************************************************/
  /* AddRosterMember                                                      */
  /*  Description - This function will add a new roster member to the     */
  /*                Maniacs database.                                     */
  /*  Accepts - Array of data containing all of the new member's data.    */
  /*  Returns - ID of the new roster member.                              */
  /*  Effects - New roster member added.                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $firstname = $info[0];
     $lastname = $info[1];
     $number = $info[2];
     $pos1 = $info[3];
     $pos2 = $info[4];
     $pos3 = $info[5];
     $throws = $info[6];
     $bats = $info[7];
     $height = $info[8];
     $weight = $info[9];
     $age = $info[10];
     $dob = $info[11];
     $address = $info[12];
     $city = $info[13];
     $state = $info[14];
     $zip = $info[15];
     $phone = $info[16];
     $email = $info[17];
     $profile_pic_path = $info[18];
     $video_url = $info[19];
     $hs = $info[20];
     $hs_address = $info[21];
     $hs_city = $info[22];
     $hs_state = $info[23];
     $hs_zip = $info[24];
     $hs_phone = $info[25];
     $grad_date = $info[26];
     $hs_athletic_director = $info[27];
     $hs_softball_coach = $info[28];
     $hs_sports_played = $info[29];
     $hs_gpa = $info[30];
     $hs_class_rank = $info[31];
     $hs_psat = $info[32];
     $hs_sat = $info[33];
     $hs_softball_highlights = $info[34];
     $travel_year = $info[35];
     $travel_coach = $info[36];
     $travel_coach_phone = $info[37];
     $travel_coach_email = $info[38];
     $travel_highlights = $info[39];
     $dad_name = $info[40];
     $dad_phone = $info[41];
     $mom_name = $info[42];
     $mom_phone = $info[43];
     $parent_email = $info[44];
     $personal_statement = $info[45];
     $hs_clubs_activities = $info[46];
     $community_service = $info[47];

     $sql = "INSERT INTO players SET firstname='$firstname',lastname='$lastname', number='$number',
             position1='$pos1', position2='$pos2', position3='$pos3', throws='$throws', bats='$bats', height='$height',
             weight='$weight', age='$age', dob='$dob', address='$address',
             city='$city', state='$state', zip='$zip', email='$email',phone='$phone',profile_pic_path='$profile_pic_path',
             video_url='$video_url', hs='$hs', hs_address='$hs_address', hs_city='$hs_city',
             hs_state='$hs_state', hs_zip='$hs_zip', hs_phone='$hs_phone', grad_date='$grad_date', 
             hs_athletic_director='$hs_athletic_director', hs_softball_coach='$hs_softball_coach',
             hs_sports_played='$hs_sports_played', hs_gpa='$hs_gpa', hs_class_rank='$hs_class_rank',
             hs_psat='$hs_psat', hs_sat='$hs_sat', hs_softball_highlights='$hs_softball_highlights',
             hs_clubs_activities='$hs_clubs_activities', travel_year='$travel_year', travel_coach='$travel_coach',
             travel_coach_phone='$travel_coach_phone', travel_coach_email='$travel_coach_email',
             travel_highlights='$travel_highlights', mom_name='$mom_name',
             mom_phone='$mom_phone', dad_name='$dad_name', dad_phone='$dad_phone',
             parent_email='$parent_email', personal_statement='$personal_statement', community_service='$community_service'";
     $sqlResult = mysqli_query($linkID, $sql);
     if (!$sqlResult) {
       $id = 0;
       echo "Error adding new roster member; error = " . mysqli_error($linkID);
     }
     else {
       $id = mysqli_insert_id($linkID);
     }

     /* Place a record for this player into the stats table */
     if ($id !=0) {
       $sql = "INSERT INTO stats SET player_id='$id'";
       $sqlResult = mysqli_query($linkID, $sql);
     }

     mysqli_close($linkID);  
     return $id;
  }

  public function UpdateRosterMember($info, $id) {
  /************************************************************************/
  /* UpdateRosterMember                                                   */
  /*  Description - This function will update the roster member data for  */
  /*                the player indicated by the passed-in ID.             */
  /*  Accepts - Array of data containing all of the member's data;        */
  /*            ID of the player to update.                               */
  /*  Returns - ID of the new roster member.                              */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $firstname = $info[0];
     $lastname = $info[1];
     $number = $info[2];
     $pos1 = $info[3];
     $pos2 = $info[4];
     $pos3 = $info[5];
     $throws = $info[6];
     $bats = $info[7];
     $height = $info[8];
     $weight = $info[9];
     $age = $info[10];
     $dob = $info[11];
     $address = $info[12];
     $city = $info[13];
     $state = $info[14];
     $zip = $info[15];
     $phone = $info[16];
     $email = $info[17];
     $profile_pic_path = $info[18];
     $video_url = $info[19];
     $hs = $info[20];
     $hs_address = $info[21];
     $hs_city = $info[22];
     $hs_state = $info[23];
     $hs_zip = $info[24];
     $hs_phone = $info[25];
     $grad_date = $info[26];
     $hs_athletic_director = $info[27];
     $hs_softball_coach = $info[28];
     $hs_sports_played = $info[29];
     $hs_gpa = $info[30];
     $hs_class_rank = $info[31];
     $hs_psat = $info[32];
     $hs_sat = $info[33];
     $hs_softball_highlights = $info[34];
     $travel_year = $info[35];
     $travel_coach = $info[36];
     $travel_coach_phone = $info[37];
     $travel_coach_email = $info[38];
     $travel_highlights = $info[39];
     $dad_name = $info[40];
     $dad_phone = $info[41];
     $mom_name = $info[42];
     $mom_phone = $info[43];
     $parent_email = $info[44];
     $personal_statement = $info[45];
     $hs_clubs_activities = $info[46];
     $community_service = $info[47];

     $sql = "UPDATE players SET firstname='$firstname',lastname='$lastname', number='$number',
             position1='$pos1', position2='$pos2', position3='$pos3', throws='$throws', bats='$bats', height='$height',
             weight='$weight', age='$age', dob='$dob', address='$address',
             city='$city', state='$state', zip='$zip', email='$email',phone='$phone',profile_pic_path='$profile_pic_path',
             video_url='$video_url', hs='$hs', hs_address='$hs_address', hs_city='$hs_city',
             hs_state='$hs_state', hs_zip='$hs_zip', hs_phone='$hs_phone', grad_date='$grad_date', 
             hs_athletic_director='$hs_athletic_director', hs_softball_coach='$hs_softball_coach',
             hs_sports_played='$hs_sports_played', hs_gpa='$hs_gpa', hs_class_rank='$hs_class_rank',
             hs_psat='$hs_psat', hs_sat='$hs_sat', hs_softball_highlights='$hs_softball_highlights',
             hs_clubs_activities='$hs_clubs_activities', travel_year='$travel_year', travel_coach='$travel_coach',
             travel_coach_phone='$travel_coach_phone', travel_coach_email='$travel_coach_email',
             travel_highlights='$travel_highlights', mom_name='$mom_name',
             mom_phone='$mom_phone', dad_name='$dad_name', dad_phone='$dad_phone',
             parent_email='$parent_email', personal_statement='$personal_statement', community_service='$community_service' 
             WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "Data for $firstname $lastname updated successfully!\n";
     }
     else {
        echo "Error updating data for $firstname $lastname; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function DeleteRosterMember($id) {
  /************************************************************************/
  /* DeleteRosterMember                                                   */
  /*  Description - This function will delete a Maniacs player.           */
  /*  Accepts - ID of the player to delete.                               */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated player deleted from the players table, and the */
  /*            associated stats data will be deleted from the stats      */
  /*            table.                                                    */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     /* First remove from players */
     $sql = "DELETE FROM players WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     /* Second remove from stats */
     $sql = "DELETE FROM stats WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function GetCoaches() {
  /************************************************************************/
  /* GetCoaches                                                           */
  /*  Description - This function will retrieve the Maniacs coach data.   */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of coach data.                                      */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $coach = array();
     $sql = "SELECT * FROM coaches";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $coach[] = $row;
     }
     mysqli_close($linkID);  
     return $coach;
  }

  public function GetCoachData($id) {
  /************************************************************************/
  /* GetCoachData                                                         */
  /*  Description - This function will retrieve the Maniacs coach data    */
  /*                for the given ID.                                     */
  /*  Accepts - ID of the coach to retrieve.                              */
  /*  Returns - Array of coach data.                                      */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $coach = array();
     $sql = "SELECT * FROM coaches WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $coach[] = $row;
     }
     mysqli_close($linkID);  
     return $coach;
  }

  public function GetCoachesImages() {
  /************************************************************************/
  /* GetCoachesImages                                                     */
  /*  Description - This function will retrieve the Maniacs coach images. */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of coach images.                                    */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $image = array();
     $sql = "SELECT coach_name, coach_pic_path FROM coaches";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $image[] = $row;
     }
     mysqli_close($linkID);  
     return $image;
  }

  public function AddCoach($coach) {
  /************************************************************************/
  /* AddCoach                                                             */
  /*  Description - This function will add a Maniacs coach.               */
  /*  Accepts - Array of coach information.                               */
  /*  Returns - ID of new coach record.                                   */
  /*  Effects - New coach data added to the coaches table.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $coach_name = $coach[0];
     $coach_position = $coach[1];
     $coach_email = $coach[2];
     $coach_phone = $coach[3];
     $coach_pic_path = $coach[4];

     $sql = "INSERT INTO coaches SET coach_name='$coach_name',coach_position='$coach_position',
             coach_email='$coach_email', coach_phone='$coach_phone', coach_pic_path='$coach_pic_path'";
     $sqlResult = mysqli_query($linkID, $sql);
     $id = mysqli_insert_id($linkID);

     mysqli_close($linkID);  
     return $id;
  }

  public function DeleteCoach($id) {
  /************************************************************************/
  /* DeleteCoach                                                          */
  /*  Description - This function will delete a Maniacs coach.            */
  /*  Accepts - ID of the coach to delete.                                */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated coach deleted from the coaches table.          */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "DELETE FROM coaches WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function UpdateCoach($id, $field, $value) {
  /************************************************************************/
  /* UpdateCoach                                                          */
  /*  Description - This function will update an existing Maniacs coach   */
  /*                information.                                          */
  /*  Accepts - ID, Field to update, and new value for the coach field.   */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Specfied field updated with the new value.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "UPDATE coaches SET $field='$value' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "$field updated successfully!\n";
     }
     else {
        echo "Error updating $field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function GetNewsItems() {
  /************************************************************************/
  /* GetNewsItems                                                         */
  /*  Description - This function will retrieve the Maniacs news items.   */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of news items.                                      */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $news = array();
     $sql = "SELECT * FROM news ORDER BY news_date DESC";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $news[] = $row;
     }
     mysqli_close($linkID);  
     return $news;
  }

  public function AddNewsItem($date, $desc, $data, $path) {
  /************************************************************************/
  /* AddNewsItems                                                         */
  /*  Description - This function will add a Maniacs news items.          */
  /*  Accepts - Date,description, data, and image path of the news item.  */
  /*  Returns - ID of new news item.                                      */
  /*  Effects - New news item added to the news table.                    */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "INSERT INTO news SET news_date='$date',news_desc='$desc',news_data='$data',news_image='$path'";
     $sqlResult = mysqli_query($linkID, $sql);
     $id = mysqli_insert_id($linkID);

     if (!$sqlResult) {
       $id = 0;
     }

     mysqli_close($linkID);  
     return $id;
  }

  public function DeleteNewsItem($id) {
  /************************************************************************/
  /* DeleteNewsItems                                                      */
  /*  Description - This function will delete a Maniacs news item.        */
  /*  Accepts - ID of the news item to delete.                            */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated news item deleted from the news table.         */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "DELETE FROM news WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function UpdateNews($id, $field, $value) {
  /************************************************************************/
  /* UpdateNews                                                           */
  /*  Description - This function will update an existing Maniacs         */
  /*                news item.                                            */
  /*  Accepts - ID, Field to update, and new value for the news item.     */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Specfied field updated with the new value.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "UPDATE news SET $field='$value' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "$field updated successfully!\n";
     }
     else {
        echo "Error updating $field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function GetEvents() {
  /************************************************************************/
  /* GetEvents                                                            */
  /*  Description - This function will retrieve Maniacs events.           */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of events.                                          */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $events = array();
     $sql = "SELECT * FROM events ORDER BY event_date DESC";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $events[] = $row;
     }
     mysqli_close($linkID);  
     return $events;
  }

  public function AddEvent($info) {
  /************************************************************************/
  /* AddEvent                                                             */
  /*  Description - This function will add a Maniacs event.               */
  /*  Accepts - Array of data for the new event.                          */
  /*  Returns - ID of new event.                                          */
  /*  Effects - New event added to the events table.                      */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $eventDate = $info[0];
     $eventStart = $info[1];
     $eventEnd = $info[2];
     $eventAddress = $info[3];
     $eventCity = $info[4];
     $eventState = $info[5];
     $eventZip = $info[6];
     $eventDesc = $info[7];
     $eventData = $info[8];
     $eventMap = $info[9];

     $sql = "INSERT INTO events SET event_date='$eventDate',event_desc='$eventDesc',event_data='$eventData',
             event_start='$eventStart', event_end='$eventEnd', event_address='$eventAddress', event_city='$eventCity',
             event_state='$eventState', event_zip='$eventZip', event_map='$eventMap'";
     $sqlResult = mysqli_query($linkID, $sql);
     $id = mysqli_insert_id($linkID);

     mysqli_close($linkID);  
     return $id;
  }

  public function DeleteEvent($id) {
  /************************************************************************/
  /* DeleteEvent                                                          */
  /*  Description - This function will delete a Maniacs event.            */
  /*  Accepts - ID of the event to delete.                                */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated event deleted from the events table.           */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "DELETE FROM events WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function UpdateEvent($id, $field, $value) {
  /************************************************************************/
  /* UpdateEvent                                                          */
  /*  Description - This function will update an existing Maniacs event.  */
  /*  Accepts - ID, Field to update, and new value for the event.         */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Specfied field updated with the new value.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "UPDATE events SET $field='$value' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "$field updated successfully!\n";
     }
     else {
        echo "Error updating $field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function GetPhotos() {
  /************************************************************************/
  /* GetPhotos                                                            */
  /*  Description - This function will retrieve Maniacs team photos.      */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of team photos.                                     */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $photos = array();
     $sql = "SELECT * FROM photos ORDER BY id ASC";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $photos[] = $row;
     }
     mysqli_close($linkID);  
     return $photos;
  }

  public function AddPhoto($info) {
  /************************************************************************/
  /* AddPhoto                                                             */
  /*  Description - This function will add a Maniacs team photo.          */
  /*  Accepts - Array of data for the new photo.                          */
  /*  Returns - ID of new photo.                                          */
  /*  Effects - New team photo added to the photos table.                 */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $photo_path = $info[0];
     $photo_url = $info[1];
     $photo_desc = $info[2];

     $sql = "INSERT INTO photos SET photo_path='$photo_path',photo_url='$photo_url',photo_desc='$photo_desc'";
     $sqlResult = mysqli_query($linkID, $sql);
     $id = mysqli_insert_id($linkID);

     mysqli_close($linkID);  
     return $id;
  }

  public function DeletePhoto($id) {
  /************************************************************************/
  /* DeletePhoto                                                          */
  /*  Description - This function will delete a Maniacs team photo.       */
  /*  Accepts - ID of the photo to delete.                                */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated photo deleted from the photos table.           */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "DELETE FROM photos WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function UpdatePhoto($id, $field, $value) {
  /************************************************************************/
  /* UpdatePhoto                                                          */
  /*  Description - This function will update an existing Maniacs photo.  */
  /*  Accepts - ID, Field to update, and new value for the photo.         */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Specfied field updated with the new value.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "UPDATE photos SET $field='$value' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "$field updated successfully!\n";
     }
     else {
        echo "Error updating $field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function GetPhotoAlbum($album) {
  /************************************************************************/
  /* GetPhotoAlbum                                                        */
  /*  Description - This function will retrieve information about an      */
  /*                existing Maniacs photo album.                         */
  /*  Accepts - Album to retrieve.                                        */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Array of Album information.                               */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $photo = array();
     $sql = "SELECT * FROM photos WHERE photo_url LIKE '%$album'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $photo[] = $row;
     }

     mysqli_close($linkID);  
     return $photo;
  }

  public function GetGames() {
  /************************************************************************/
  /* GetGames                                                             */
  /*  Description - This function will retrieve Maniacs game data.        */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of Games.                                           */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $games = array();
     $sql = "SELECT * FROM games";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $games[] = $row;
     }
     mysqli_close($linkID);  
     return $games;
  }

  public function AddGame($info) {
  /************************************************************************/
  /* AddGame                                                              */
  /*  Description - This function will add a Maniacs game.                */
  /*  Accepts - Array with all game information for the new game.         */
  /*  Returns - ID of new game.                                           */
  /*  Effects - New game added to the games table.                        */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $game_date = $info[0];
     $game_time = $info[1];
     $game_type = $info[2];
     $game_opponent = $info[3];
     $game_address = $info[4];
     $game_city = $info[5];
     $game_state = $info[6];
     $game_zip = $info[7];
     $game_map = $info[8];

     $sql = "INSERT INTO games SET game_date='$game_date',game_time='$game_time',
             game_type='$game_type', game_opponent='$game_opponent', opponent_score='0',
             maniacs_score='0', game_address='$game_address', game_city='$game_city',
             game_state='$game_state',game_zip='$game_zip', game_map='$game_map'";
     $sqlResult = mysqli_query($linkID, $sql);
     $id = mysqli_insert_id($linkID);

     mysqli_close($linkID);  
     return $id;
  }

  public function DeleteGame($id) {
  /************************************************************************/
  /* DeleteGame                                                           */
  /*  Description - This function will delete a Maniacs game.             */
  /*  Accepts - ID of the game to delete.                                 */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated game deleted from the games table.             */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "DELETE FROM games WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function UpdateGame($id, $field, $value) {
  /************************************************************************/
  /* UpdateGame                                                           */
  /*  Description - This function will update an existing Maniacs         */
  /*                game item.                                            */
  /*  Accepts - ID, Field to update, and new value for the game item.     */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Specfied field updated with the new value.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "UPDATE games SET $field='$value' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "$field updated successfully!\n";
     }
     else {
        echo "Error updating $field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  

     /* Update the game's Google Map field if one of the address fields was updated. */
     if (($field == "game_address") || ($field == "game_state") ||
         ($field == "game_city" ) || ($field == "game_city")) {
       $this->UpdateGoogleMap($id);
     }

  }

  public function UpdateGoogleMap($id) {
  /************************************************************************/
  /* UpdateGoogleMap                                                      */
  /*  Description - This function will update the specfied game's Google  */
  /*                Map field.                                            */
  /*  Accepts - ID of game to update.                                     */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Google Map field updated.                                 */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $info = array();

     $sql = "SELECT game_address, game_city, game_state, game_zip FROM games WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);
     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  

     $map = "http://maps.google.com/?q=" . $info[0]->game_address . "," . $info[0]->game_city . "," . $info[0]->game_state . " " . $info[0]->game_zip . "&t=h&z=20";

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $sql = "UPDATE games SET game_map='$map' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "Google Map field updated successfully!\n";
     }
     else {
        echo "Error updating Google Map field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function GetPractices() {
  /************************************************************************/
  /* GetPractices                                                         */
  /*  Description - This function will retrieve Maniacs practice data.    */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of Practices.                                       */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $practices = array();
     $sql = "SELECT * FROM practices ORDER BY practice_date DESC";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $practices[] = $row;
     }
     mysqli_close($linkID);  
     return $practices;
  }

  public function AddPractice($info) {
  /************************************************************************/
  /* AddPractice                                                          */
  /*  Description - This function will add a Maniacs practice.            */
  /*  Accepts - Array with all practice information for the new practice. */
  /*  Returns - ID of new practice.                                       */
  /*  Effects - New practice added to the practices table.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $practice_date = $info[0];
     $practice_start = $info[1];
     $practice_end = $info[2];
     $practice_address = $info[3];
     $practice_city = $info[4];
     $practice_state = $info[5];
     $practice_zip = $info[6];
     $practice_desc = $info[7];
     $practice_map = $info[8];

     $sql = "INSERT INTO practices SET practice_date='$practice_date',practice_start='$practice_start',
             practice_end='$practice_end', practice_address='$practice_address', practice_city='$practice_city',
             practice_state='$practice_state',practice_zip='$practice_zip', practice_desc='$practice_desc',
             practice_map='$practice_map'";
     $sqlResult = mysqli_query($linkID, $sql);
     $id = mysqli_insert_id($linkID);

     mysqli_close($linkID);  
     return $id;
  }

  public function DeletePractice($id) {
  /************************************************************************/
  /* DeletePractice                                                       */
  /*  Description - This function will delete a Maniacs practice.         */
  /*  Accepts - ID of the practice to delete.                             */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Designated practice deleted from the practices table.     */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "DELETE FROM practices WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     mysqli_close($linkID);  
  }

  public function UpdatePractice($id, $field, $value) {
  /************************************************************************/
  /* UpdatePractice                                                       */
  /*  Description - This function will update an existing Maniacs         */
  /*                practice item.                                        */
  /*  Accepts - ID, Field to update, and new value for the practice item. */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Specfied field updated with the new value.                */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $sql = "UPDATE practices SET $field='$value' WHERE id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     if ($sqlResult) {
        echo "$field updated successfully!\n";
     }
     else {
        echo "Error updating $field; error: " . mysqli_error($linkID) . "\n";
     } 

     mysqli_close($linkID);  
  }

  public function GetBirthdays() {
  /************************************************************************/
  /* GetBirthdays                                                         */
  /*  Description - This function will retrieve Birthday's of each        */
  /*                Maniacs roster member.                                */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of players with birthdays.                          */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $birthday = array();
     $sql = "SELECT firstname,lastname,dob FROM players";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $birthday[] = $row;
     }
     mysqli_close($linkID);  
     return $birthday;
  }

  public function csvToArrayV1($filePath='', $delimiter='|', $header = null, $skipLines = -1) {
  /************************************************************************/
  /* csvToArrayV1                                                         */
  /*  Description - This function will parse a CSV file received via      */
  /*                GameChanger.  This file is expected to have the       */
  /*                roster member's ID and all of the stats for that      */
  /*                player.                                               */
  /*  Accepts - Nothing.                                                  */
  /*  Returns - Array of parsed stats data for each Maniacs player.       */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/
    $lineNumber = 0;
    $dataList = array();
    if (($handle = fopen($filePath, 'r')) != FALSE) {
         while (($row = fgets($handle, 4096)) !== false) {
            if($lineNumber > $skipLines) {
                $items = explode($delimiter, $row);
                 
                $record = array();
                for($index = 0, $i = count($header); $index < $i; $index++){
                    //If column exist then and then added in data with header name
                    if(isset($items[$index])) {
                        $record[$header[$index]] = trim($items[$index]);
                    }
                }
                $dataList[] = $record;
            } else {
                $lineNumber++;
            }
       }
       fclose($handle);
    }
    return $dataList;
  }

  public function ImportRosterStats($stats) {
  /************************************************************************/
  /* ImportRosterStats                                                    */
  /*  Description - This function will add the Gamechanger stats for each */
  /*                Maniacs roster member.                                */
  /*  Accepts - Array of stats to add.                                    */
  /*  Returns - Nothing.                                                  */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     for ($i = 1; $i < count($stats)-1; $i++) {
       $games_played = $stats[$i]["games_played"];
       $plate_appearances = $stats[$i]["plate_appearances"];
       $at_bats = $stats[$i]["at_bats"];
       $hits = $stats[$i]["hits"];
       $single = $stats[$i]["single"];
       $dbl = $stats[$i]["dbl"];
       $triple = $stats[$i]["triple"];
       $homerun = $stats[$i]["homerun"];
       $rbi = $stats[$i]["rbi"];
       $runs = $stats[$i]["runs"];
       $hbp = $stats[$i]["hbp"];
       $roe = $stats[$i]["roe"];
       $fielders_choice = $stats[$i]["fielders_choice"];
       $catcher_int = $stats[$i]["catcher_int"];
       $walks = $stats[$i]["walks"];
       $strikeouts = $stats[$i]["strikeouts"];
       $avg = $stats[$i]["avg"];
       $obp = $stats[$i]["obp"];
       $slugging = $stats[$i]["slugging"];
       $ops = $stats[$i]["ops"];
       $pa_per_bb = $stats[$i]["pa_per_bb"];
       $bb_per_k = $stats[$i]["bb_per_k"];
       $c_percent = $stats[$i]["c_percent"];
       $stolenbase = $stats[$i]["stolenbase"];
       $caughtstealing = $stats[$i]["caughtstealing"];
       $stolenbase_percent = $stats[$i]["stolenbase_percent"];
       $pik = $stats[$i]["pik"];
       $gidp = $stats[$i]["gidp"];
       $gitp = $stats[$i]["gitp"];
       $extrabasehits = $stats[$i]["extrabasehits"];
       $totalbases = $stats[$i]["totalbases"];
       $ab_per_hr = $stats[$i]["ab_per_hr"];
       $ba_risp = $stats[$i]["ba_risp"];
       $ps = $stats[$i]["ps"];
       $ps_per_pa = $stats[$i]["ps_per_pa"];
       $two_s_plus_three = $stats[$i]["two_s_plus_three"];
       $two_s_plus_t_percent = $stats[$i]["two_s_plus_t_percent"];
       $six_plus = $stats[$i]["six_plus"];
       $six_plus_percent = $stats[$i]["six_plus_percent"];
       $sac = $stats[$i]["sac"];
       $sf = $stats[$i]["sf"];
       $lob = $stats[$i]["lob"];
       $two_out_rbi = $stats[$i]["two_out_rbi"];
       $hhb = $stats[$i]["hhb"];
       $qab = $stats[$i]["qab"];
       $qab_percent = $stats[$i]["qab_percent"];
       $pitching_innings_pitched = $stats[$i]["pitching_innings_pitched"];
       $pitching_games_pitched = $stats[$i]["pitching_games_pitched"];
       $pitching_games_started = $stats[$i]["pitching_games_started"];
       $pitching_wins = $stats[$i]["pitching_wins"];
       $pitching_losses = $stats[$i]["pitching_losses"];
       $pitching_saves = $stats[$i]["pitching_saves"];
       $pitching_save_opp = $stats[$i]["pitching_save_opp"];
       $pitching_blown_saves = $stats[$i]["pitching_blown_saves"];
       $pitching_save_percent = $stats[$i]["pitching_save_percent"];
       $pitching_hits_allowed = $stats[$i]["pitching_hits_allowed"];
       $pitching_runs_allowed = $stats[$i]["pitching_runs_allowed"];
       $pitching_earned_runs = $stats[$i]["pitching_earned_runs"];
       $pitching_walks = $stats[$i]["pitching_walks"];
       $pitching_strikeouts = $stats[$i]["pitching_strikeouts"];
       $pitching_hit_batters = $stats[$i]["pitching_hit_batters"];
       $pitching_era = $stats[$i]["pitching_era"];
       $pitching_whip = $stats[$i]["pitching_whip"];
       $pitching_batters_faced = $stats[$i]["pitching_batters_faced"];
       $pitching_total_pitches = $stats[$i]["pitching_total_pitches"];
       $pitching_total_strikes = $stats[$i]["pitching_total_strikes"];
       $pitching_total_balls = $stats[$i]["pitching_total_balls"];
       $pitching_pitches_per_inning = $stats[$i]["pitching_pitches_per_inning"];
       $pitching_pitches_per_batters_faced = $stats[$i]["pitching_pitches_per_batters_faced"];
       $pitching_less_than_three = $stats[$i]["pitching_less_than_three"];
       $pitching_less_than_three_percent = $stats[$i]["pitching_less_than_three_percent"];
       $pitching_leadoff_out = $stats[$i]["pitching_leadoff_out"];
       $pitching_innings_first2out = $stats[$i]["pitching_innings_first2out"];
       $pitching_123inn = $stats[$i]["pitching_123inn"];
       $pitching_less_than_13pitches = $stats[$i]["pitching_less_than_13pitches"];
       $pitching_fielding_independent_pitching = $stats[$i]["pitching_fielding_independent_pitching"];
       $pitching_strike_percent = $stats[$i]["pitching_strike_percent"];
       $pitching_first_pitch_strikes = $stats[$i]["pitching_first_pitch_strikes"];
       $pitching_first_pitch_strikes_percent = $stats[$i]["pitching_first_pitch_strikes_percent"];
       $pitching_first_pitch_strike_out_percent = $stats[$i]["pitching_first_pitch_strike_out_percent"];
       $pitching_first_pitch_strike_walks = $stats[$i]["pitching_first_pitch_strike_walks"];
       $pitching_first_pitch_strike_hits = $stats[$i]["pitching_first_pitch_strikes_hits"];
       $pitching_walks_per_inning = $stats[$i]["pitching_walks_per_inning"];
       $pitching_zero_walk_innings = $stats[$i]["pitching_zero_walk_innings"];
       $pitching_walks_that_score = $stats[$i]["pitching_walks_that_score"];
       $pitching_leadoff_walk = $stats[$i]["pitching_leadoff_walk"];
       $pitching_leadoff_walk_scored = $stats[$i]["pitching_leadoff_walk_scored"];
       $pitching_wild_pitches = $stats[$i]["pitching_wild_pitches"];
       $pitching_atbats_against = $stats[$i]["pitching_atbats_against"];
       $pitching_swing_miss = $stats[$i]["pitching_swing_miss"];
       $pitching_swing_miss_percent = $stats[$i]["pitching_swing_miss_percent"];
       $pitching_strikeouts_per_regulation_game = $stats[$i]["pitching_strikeouts_per_regulation_game"];
       $pitching_strikeouts_per_batter_faced = $stats[$i]["pitching_strikeouts_per_batter_faced"];
       $pitching_strikeouts_per_walk = $stats[$i]["pitching_strikeouts_per_walk"];
       $pitching_weak_percent = $stats[$i]["pitching_weak_percent"];
       $pitching_hardhit_ball_percent = $stats[$i]["pitching_hardhit_ball_percent"];
       $pitching_groundball_percent = $stats[$i]["pitching_groundball_percent"];
       $pitching_flyball_percent = $stats[$i]["pitching_flyball_percent"];
       $pitching_groundouts = $stats[$i]["pitching_groundouts"];
       $pitching_flyouts = $stats[$i]["pitching_flyouts"];
       $pitching_go_fo_ratio = $stats[$i]["pitching_go_fo_ratio"];
       $pitching_opponent_batting_avg = $stats[$i]["pitching_opponent_batting_avg"];
       $pitching_homeruns_allowed = $stats[$i]["pitching_homeruns_allowed"];
       $pitching_left_on_base = $stats[$i]["pitching_left_on_base"];
       $pitching_balks = $stats[$i]["pitching_balks"];
       $pitching_picked_off = $stats[$i]["pitching_picked_off"];
       $pitching_stolenbases_allowed = $stats[$i]["pitching_stolenbases_allowed"];
       $pitching_caught_stealing = $stats[$i]["pitching_caught_stealing"];
       $pitching_stolenbase_percent = $stats[$i]["pitching_stolenbase_percent"];
       $pitching_num_fastballs = $stats[$i]["pitching_num_fastballs"];
       $pitching_num_fastballs_strikes = $stats[$i]["pitching_num_fastballs_strikes"];
       $pitching_fastballs_strikes_percent = $stats[$i]["pitching_fastballs_strikes_percent"];
       $pitching_num_curveballs = $stats[$i]["pitching_num_curveballs"];
       $pitching_num_curveballs_strikes = $stats[$i]["pitching_num_curveballs_strikes"];
       $pitching_curveballs_strikes_percent = $stats[$i]["pitching_curveballs_strikes_percent"];
       $pitching_num_changeups = $stats[$i]["pitching_num_changeups"];
       $pitching_num_changeups_strikes = $stats[$i]["pitching_num_changeups_strikes"];
       $pitching_changeups_strikes_percent = $stats[$i]["pitching_changeups_strikes_percent"];
       $pitching_num_riseballs = $stats[$i]["pitching_num_riseballs"];
       $pitching_num_riseballs_strikes = $stats[$i]["pitching_num_riseballs_strikes"];
       $pitching_riseballs_strikes_percent = $stats[$i]["pitching_riseballs_strikes_percent"];
       $pitching_num_dropballs = $stats[$i]["pitching_num_dropballs"];
       $pitching_num_dropballs_strikes = $stats[$i]["pitching_num_dropballs_strikes"];
       $pitching_dropballs_strikes_percent = $stats[$i]["pitching_dropballs_strikes_percent"];
       $pitching_num_screwballs = $stats[$i]["pitching_num_screwballs"];
       $pitching_num_screwballs_strikes = $stats[$i]["pitching_num_screwballs_strikes"];
       $pitching_screwballs_strikes_percent = $stats[$i]["pitching_screwballs_strikes_percent"];
       $pitching_num_offspeed = $stats[$i]["pitching_num_offspeed"];
       $pitching_num_offspeed_strikes = $stats[$i]["pitching_num_offspeed_strikes"];
       $pitching_offspeed_strikes_percent = $stats[$i]["pitching_offspeed_strikes_percent"];
       $fielding_total_chances = $stats[$i]["fielding_total_chances"];
       $fielding_assists = $stats[$i]["fielding_assists"];
       $fielding_putouts = $stats[$i]["fielding_putouts"];
       $fielding_errors = $stats[$i]["fielding_errors"];
       $fielding_double_plays = $stats[$i]["fielding_double_plays"];
       $fielding_triple_plays = $stats[$i]["fielding_triple_plays"];
       $fielding_field_percent = $stats[$i]["fielding_field_percent"];
       $catching_innings_caught = $stats[$i]["catching_innings_caught"];
       $catching_passed_balls = $stats[$i]["catching_passed_balls"];
       $catching_stolen_bases_allowed = $stats[$i]["catching_stolen_bases_allowed"];
       $catching_caught_stealing = $stats[$i]["catching_caught_stealing"];
       $catching_caught_stealing_percent = $stats[$i]["catching_caught_stealing_percent"];
       $catching_picked_off = $stats[$i]["catching_picked_off"];
       $catching_catcher_interference  = $stats[$i]["catching_catcher_interference"];

       $player_id= $stats[$i]["player_id"];
       $sql = "UPDATE stats SET 
               games_played = '$games_played',
               plate_appearances = '$plate_appearances',
               at_bats = '$at_bats',
               hits = '$hits',
               single = '$single',
               dbl = '$dbl',
               triple = '$triple',
               homerun = '$homerun',
               rbi = '$rbi',
               runs = '$runs',
               hbp = '$hbp',
               roe = '$roe',
               fielders_choice = '$fielders_choice',
               catcher_int = '$catcher_int',
               walks = '$walks',
               strikeouts = '$strikeouts',
               avg = '$avg',
               obp = '$obp',
               slugging = '$slugging',
               ops = '$ops',
               pa_per_bb = '$pa_per_bb',
               bb_per_k = '$bb_per_k',
               c_percent = '$c_percent',
               stolenbase = '$stolenbase',
               caughtstealing = '$caughtstealing',
               stolenbase_percent = '$stolenbase_percent',
               pik = '$pik',
               gidp = '$gidp',
               gitp = '$gitp',
               extrabasehits = '$extrabasehits',
               totalbases = '$totalbases',
               ab_per_hr = '$ab_per_hr',
               ba_risp = '$ba_risp',
               ps = '$ps',
               ps_per_pa = '$ps_per_pa',
               two_s_plus_three = '$two_s_plus_three',
               two_s_plus_t_percent = '$two_s_plus_t_percent',
               six_plus = '$six_plus',
               six_plus_percent = '$six_plus_percent',
               sac = '$sac',
               sf = '$sf',
               lob = '$lob',
               two_out_rbi = '$two_out_rbi',
               hhb = '$hhb',
               qab = '$qab',
               qab_percent = '$qab_percent',
               pitching_innings_pitched = '$pitching_innings_pitched',
               pitching_games_pitched = '$pitching_games_pitched',
               pitching_games_started = '$pitching_games_started',
               pitching_wins = '$pitching_wins',
               pitching_losses = '$pitching_losses',
               pitching_saves = '$pitching_saves',
               pitching_save_opp = '$pitching_save_opp',
               pitching_blown_saves = '$pitching_blown_saves',
               pitching_save_percent = '$pitching_save_percent',
               pitching_hits_allowed = '$pitching_hits_allowed',
               pitching_runs_allowed = '$pitching_runs_allowed',
               pitching_earned_runs = '$pitching_earned_runs',
               pitching_walks = '$pitching_walks',
               pitching_strikeouts = '$pitching_strikeouts',
               pitching_hit_batters = '$pitching_hit_batters',
               pitching_era = '$pitching_era',
               pitching_whip = '$pitching_whip',
               pitching_batters_faced = '$pitching_batters_faced',
               pitching_total_pitches = '$pitching_total_pitches',
               pitching_total_strikes = '$pitching_total_strikes',
               pitching_total_balls = '$pitching_total_balls',
               pitching_pitches_per_inning = '$pitching_pitches_per_inning',
               pitching_pitches_per_batters_faced = '$pitching_pitches_per_batters_faced',
               pitching_less_than_three = '$pitching_less_than_three',
               pitching_less_than_three_percent = '$pitching_less_than_three_percent',
               pitching_leadoff_out = '$pitching_leadoff_out',
               pitching_innings_first2out = '$pitching_innings_first2out',
               pitching_123inn = '$pitching_123inn',
               pitching_less_than_13pitches = '$pitching_less_than_13pitches',
               pitching_fielding_independent_pitching = '$pitching_fielding_independent_pitching',
               pitching_strike_percent = '$pitching_strike_percent',
               pitching_first_pitch_strikes = '$pitching_first_pitch_strikes',
               pitching_first_pitch_strikes_percent = '$pitching_first_pitch_strikes_percent',
               pitching_first_pitch_strike_out_percent = '$pitching_first_pitch_strike_out_percent',
               pitching_first_pitch_strike_walks = '$pitching_first_pitch_strike_walks',
               pitching_first_pitch_strike_hits = '$pitching_first_pitch_strike_hits',
               pitching_walks_per_inning = '$pitching_walks_per_inning',
               pitching_zero_walk_innings = '$pitching_zero_walk_innings',
               pitching_walks_that_score = '$pitching_walks_that_score',
               pitching_leadoff_walk = '$pitching_leadoff_walk',
               pitching_leadoff_walk_scored = '$pitching_leadoff_walk_scored',
               pitching_wild_pitches = '$pitching_wild_pitches',
               pitching_atbats_against = '$pitching_atbats_against',
               pitching_swing_miss = '$pitching_swing_miss',
               pitching_swing_miss_percent = '$pitching_swing_miss_percent',
               pitching_strikeouts_per_regulation_game = '$pitching_strikeouts_per_regulation_game',
               pitching_strikeouts_per_batter_faced = '$pitching_strikeouts_per_batter_faced',
               pitching_strikeouts_per_walk = '$pitching_strikeouts_per_walk',
               pitching_weak_percent = '$pitching_weak_percent',
               pitching_hardhit_ball_percent = '$pitching_hardhit_ball_percent',
               pitching_groundball_percent = '$pitching_groundball_percent',
               pitching_flyball_percent = '$pitching_flyball_percent',
               pitching_groundouts = '$pitching_groundouts',
               pitching_flyouts = '$pitching_flyouts',
               pitching_go_fo_ratio = '$pitching_go_fo_ratio',
               pitching_opponent_batting_avg = '$pitching_opponent_batting_avg',
               pitching_homeruns_allowed = '$pitching_homeruns_allowed',
               pitching_left_on_base = '$pitching_left_on_base',
               pitching_balks = '$pitching_balks',
               pitching_picked_off = '$pitching_picked_off',
               pitching_stolenbases_allowed = '$pitching_stolenbases_allowed',
               pitching_caught_stealing = '$pitching_caught_stealing',
               pitching_stolenbase_percent = '$pitching_stolenbase_percent',
               pitching_num_fastballs = '$pitching_num_fastballs',
               pitching_num_fastballs_strikes = '$pitching_num_fastballs_strikes',
               pitching_fastballs_strikes_percent = '$pitching_fastballs_strikes_percent',
               pitching_num_curveballs = '$pitching_num_curveballs',
               pitching_num_curveballs_strikes = '$pitching_num_curveballs_strikes',
               pitching_curveballs_strikes_percent = '$pitching_curveballs_strikes_percent',
               pitching_num_changeups = '$pitching_num_changeups',
               pitching_num_changeups_strikes = '$pitching_num_changeups_strikes',
               pitching_changeups_strikes_percent ='$pitching_changeups_strikes_percent',
               pitching_num_riseballs = '$pitching_num_riseballs',
               pitching_num_riseballs_strikes = '$pitching_num_riseballs_strikes',
               pitching_riseballs_strikes_percent = '$pitching_riseballs_strikes_percent',
               pitching_num_dropballs = '$pitching_num_dropballs',
               pitching_num_dropballs_strikes = '$pitching_num_dropballs_strikes',
               pitching_dropballs_strikes_percent = '$pitching_dropballs_strikes_percent',
               pitching_num_screwballs = '$pitching_num_screwballs',
               pitching_num_screwballs_strikes = '$pitching_num_screwballs_strikes',
               pitching_screwballs_strikes_percent = '$pitching_screwballs_strikes_percent',
               pitching_num_offspeed = '$pitching_num_offspeed',
               pitching_num_offspeed_strikes = '$pitching_num_offspeed_strikes',
               pitching_offspeed_strikes_percent = '$pitching_offspeed_strikes_percent',
               fielding_total_chances = '$fielding_total_chances',
               fielding_assists = '$fielding_assists',
               fielding_putouts = '$fielding_putouts',
               fielding_errors = '$fielding_errors',
               fielding_double_plays = '$fielding_double_plays',
               fielding_triple_plays = '$fielding_triple_plays',
               fielding_field_percent = '$fielding_field_percent',
               catching_innings_caught = '$catching_innings_caught',
               catching_passed_balls = '$catching_passed_balls',
               catching_stolen_bases_allowed = '$catching_stolen_bases_allowed',
               catching_caught_stealing = '$catching_caught_stealing',
               catching_caught_stealing_percent = '$catching_caught_stealing_percent',
               catching_picked_off = '$catching_picked_off',
               catching_catcher_interference  = '$catching_catcher_interference'
               WHERE player_id = '$player_id'";
       $sqlResult = mysqli_query($linkID, $sql);
       if (!$sqlResult) {
         echo "Error updating stats table for player_id " . $player_id . "]; Error = " . mysqli_error($linkID) . "\n";
       }
       else {
         echo "Stats updated sucessfully!\n";
       }
     }

     mysqli_close($linkID);  
  }

  public function GetRosterStats($id) {
  /************************************************************************/
  /* GetRosterStats                                                       */
  /*  Description - This function will retrieve the statistics for the    */
  /*                Maniacs player associated with the given ID.          */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player stats.                                    */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT * FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetStandardBattingStats($id) {
  /************************************************************************/
  /* GetStandardBattingStats                                              */
  /*  Description - This function will retrieve the standard batting      */
  /*                statistics for the Maniacs player associated with the */
  /*                given ID.                                             */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player standard batting stats.                   */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT plate_appearances, at_bats, hits, single, dbl, triple, homerun, rbi, runs, hbp, roe, fielders_choice,
             catcher_int, walks, strikeouts, avg, obp, slugging, ops FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetPatienceBattingStats($id) {
  /************************************************************************/
  /* GetPatienceBattingStats                                              */
  /*  Description - This function will retrieve the patience, power, &    */
  /*                speed batting statistics for the Maniacs player       */
  /*                associated with the given ID.                         */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player patience,power, & speed batting stats.    */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT plate_appearances, at_bats, pa_per_bb, bb_per_k, c_percent, stolenbase, caughtstealing, stolenbase_percent, pik, 
             gidp, gitp, extrabasehits, totalbases, ab_per_hr, ba_risp, slugging FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetQABBattingStats($id) {
  /************************************************************************/
  /* GetQABBattingStats                                                   */
  /*  Description - This function will retrieve the quality at-bat &      */
  /*                team impact batting statistics for the Maniacs player */
  /*                associated with the given ID.                         */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of QAB and team impact batting stats.               */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT plate_appearances, at_bats, ps, ps_per_pa, two_s_plus_three, two_s_plus_t_percent, six_plus, six_plus_percent, sac, sf, lob,
             two_out_rbi, hhb, qab, qab_percent FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetStandardPitchingStats($id) {
  /************************************************************************/
  /* GetStandardPitchingStats                                             */
  /*  Description - This function will retrieve the standard pitching     */
  /*                statistics for the Maniacs player associated with the */
  /*                given ID.                                             */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player standard pitching stats.                  */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT pitching_innings_pitched, pitching_games_pitched, pitching_games_started, pitching_wins, pitching_losses, pitching_saves,
             pitching_save_opp, pitching_blown_saves, pitching_save_percent, pitching_hits_allowed, pitching_runs_allowed, pitching_earned_runs,
             pitching_walks, pitching_strikeouts, pitching_hit_batters, pitching_era, pitching_whip FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetEfficiencyPitchingStats($id) {
  /************************************************************************/
  /* GetEfficiencyPitchingStats                                           */
  /*  Description - This function will retrieve the efficiency pitching   */
  /*                statistics for the Maniacs player associated with the */
  /*                given ID.                                             */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player efficiency pitching stats.                */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $info = array();
     $sql = "SELECT pitching_innings_pitched, pitching_batters_faced, pitching_total_pitches, pitching_total_strikes, pitching_total_balls, pitching_pitches_per_inning,
             pitching_pitches_per_batters_faced, pitching_less_than_three, pitching_less_than_three_percent, pitching_leadoff_out, pitching_innings_first2out, 
             pitching_123inn,pitching_less_than_13pitches, pitching_fielding_independent_pitching FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetCommandPitchingStats($id) {
  /************************************************************************/
  /* GetCommandPitchingStats                                              */
  /*  Description - This function will retrieve the command pitching      */
  /*                statistics for the Maniacs player associated with the */
  /*                given ID.                                             */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player command pitching stats.                   */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $info = array();
     $sql = "SELECT pitching_innings_pitched, pitching_batters_faced, pitching_total_strikes, pitching_strike_percent,
             pitching_first_pitch_strikes, pitching_first_pitch_strikes_percent, pitching_first_pitch_strike_out_percent,
             pitching_first_pitch_strike_walks, pitching_first_pitch_strike_hits, pitching_walks_per_inning, pitching_zero_walk_innings,
             pitching_walks_that_score, pitching_leadoff_walk, pitching_leadoff_walk_scored, pitching_wild_pitches FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);
     if (!$sqlResult) {
       echo "Error getting command pitching stats; error = " . mysqli_error($linkID) . "\n";
     }

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetBattersPitchingStats($id) {
  /************************************************************************/
  /* GetBattersPitchingStats                                              */
  /*  Description - This function will retrieve the command pitching      */
  /*                statistics for the Maniacs player associated with the */
  /*                given ID.                                             */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player command pitching stats.                   */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $info = array();
     $sql = "SELECT pitching_innings_pitched, pitching_batters_faced, pitching_total_pitches, pitching_swing_miss, pitching_swing_miss_percent,
             pitching_strikeouts, pitching_strikeouts_per_regulation_game,pitching_strikeouts_per_batter_faced,pitching_strikeouts_per_walk,
             pitching_weak_percent, pitching_hardhit_ball_percent,pitching_groundball_percent,pitching_flyball_percent,pitching_groundouts,
             pitching_flyouts,pitching_go_fo_ratio,pitching_opponent_batting_avg,pitching_homeruns_allowed FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);
     if (!$sqlResult) {
       echo "Error getting command pitching stats; error = " . mysqli_error($linkID) . "\n";
     }

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetRunningPitchingStats($id) {
  /************************************************************************/
  /* GetRunningPitchingStats                                              */
  /*  Description - This function will retrieve the running and running   */
  /*                game pitching statistics for the Maniacs player       */
  /*                associated with the given ID.                         */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player running and running game pitching stats.  */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $info = array();
     $sql = "SELECT pitching_innings_pitched, pitching_left_on_base,pitching_balks,pitching_picked_off,pitching_stolenbases_allowed,
             pitching_caught_stealing,pitching_stolenbase_percent FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);
     if (!$sqlResult) {
       echo "Error getting running and running game pitching stats; error = " . mysqli_error($linkID) . "\n";
     }

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetPitchesPitchingStats($id) {
  /************************************************************************/
  /* GetPitchesPitchingStats                                              */
  /*  Description - This function will retrieve the pitches breakdown     */
  /*                pitching statistics for the Maniacs player associated */
  /*                with the given ID.                                    */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of player pitches breakdown pitching stats.         */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();
     $info = array();
     $sql = "SELECT pitching_total_pitches, pitching_num_fastballs,pitching_num_fastballs_strikes,pitching_fastballs_strikes_percent,
             pitching_num_curveballs,pitching_num_curveballs_strikes,pitching_curveballs_strikes_percent,
             pitching_num_changeups ,pitching_num_changeups_strikes,pitching_changeups_strikes_percent,
             pitching_num_riseballs,pitching_num_riseballs_strikes,pitching_riseballs_strikes_percent,
             pitching_num_dropballs,pitching_num_dropballs_strikes,pitching_dropballs_strikes_percent,
             pitching_num_screwballs,pitching_num_screwballs_strikes,pitching_screwballs_strikes_percent,
             pitching_num_offspeed,pitching_num_offspeed_strikes,pitching_offspeed_strikes_percent FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);
     if (!$sqlResult) {
       echo "Error getting running and running game pitching stats; error = " . mysqli_error($linkID) . "\n";
     }

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetStandardFieldingStats($id) {
  /************************************************************************/
  /* GetStandardFieldStats                                                */
  /*  Description - This function will retrieve the standard fielding     */
  /*                statistics for the Maniacs player associated with the */
  /*                given ID.                                             */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of standard fielding stats.                         */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT fielding_total_chances, fielding_assists, fielding_putouts, fielding_errors,
             fielding_double_plays, fielding_triple_plays,fielding_field_percent FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

  public function GetCatchingStats($id) {
  /************************************************************************/
  /* GetCatchingStats                                                     */
  /*  Description - This function will retrieve the catching statistics   */
  /*                for the Maniacs player associated with the given ID.  */
  /*  Accepts - ID of player to retrieve.                                 */
  /*  Returns - Array of catching stats.                                  */
  /*  Effects - Nothing.                                                  */
  /************************************************************************/

     /* Connect to the backend database */
     $linkID = $this->connect_to_db();

     $info = array();
     $sql = "SELECT catching_innings_caught, catching_passed_balls, catching_stolen_bases_allowed, catching_caught_stealing,
             catching_caught_stealing_percent, catching_picked_off, catching_catcher_interference FROM stats WHERE player_id='$id'";
     $sqlResult = mysqli_query($linkID, $sql);

     while ($row = mysqli_fetch_object($sqlResult))
     {
       $info[] = $row;
     }
     mysqli_close($linkID);  
     return $info;
  }

}

?>

