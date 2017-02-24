<?php
include "../class/ManiacsClass.php";
$maniacs = new ManiacsClass();
$news = $maniacs->GetNewsItems();
$numItems = count($news);

date_default_timezone_set('America/New_York');
$count = 0;

$content = "";
$content = $content . "<div class=\"maniacsCenter\">\n";
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
  $content = $content . "<ul>\n";
  for ($i = 0; $i < $count; $i++){
    $current = new DateTime($news[$i]->news_date);
    $sTime = $current->format('m/d/Y');
      $content = $content . "  <li>" . $sTime. " - " . $news[$i]->news_desc . $news[$i]->news_data . "<br>\n";
  }
  $content = $content . "</ul>\n";
}
$content = $content . "</div>\n";

echo $content;
?>

