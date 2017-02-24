<?php
include "class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$news = $maniacs->GetNewsItems();
$numItems = count($news);

date_default_timezone_set('America/New_York');
$count = 0;

$content = "";
//$content = $content . "<div class=\"maniacsCenter\">\n";
$content = $content . "<hr><div class=\"maniacsNewsTitle\" id=\"maniacsNewsTitle\">Maniacs 18U - News</div><br>\n";

if ($numItems > 10) {
  $count = 10;
}
else {
  $count = $numItems;
}

if ($count == 0) {
  $content = $content . "<div class=\"maniacsNewsItem\">Sorry, but no news items are available at this time!</div>\n";
}
else {
  for ($i = 0; $i < $count; $i++){
    $current = new DateTime($news[$i]->news_date);
    $sTime = $current->format('m/d/Y');
    if (!is_null($news[$i]->news_image)) {
      $content = $content . "<div class=\"maniacsNewsItem\" data-dojo-type=\"dijit/TitlePane\" open=\"false\" data-dojo-props=\"title:'" . $sTime. " - " . $news[$i]->news_desc . "'\">" . $news[$i]->news_data . "<br><center><img src=\"" . $news[$i]->news_image . "\"></center></div><br>\n";
    }
    else {
      $content = $content . "<div class=\"maniacsNewsItem\" data-dojo-type=\"dijit/TitlePane\" open=\"false\" data-dojo-props=\"title:'" . $sTime. " - " . $news[$i]->news_desc . "'\">" . $news[$i]->news_data . "</div><br>\n";
    }
  }
}
//$content = $content . "</div>\n";

echo $content;
?>

