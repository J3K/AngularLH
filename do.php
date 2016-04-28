<?php
header('Content-Type: application/json');


// DoIt('http://cdn.livehighlights.net/content/web/app_dev.php/Modules/DeleteAllGames');
// DoIt('http://cdn.livehighlights.net/content/web/app_dev.php/Modules/GetGames');
// DoIt('http://cdn.livehighlights.net/content/web/app_dev.php/Modules/ShowAllSports');


$Elements  = array(
    'http://cdn.livehighlights.net/content/web/app_dev.php/Modules/DeleteAllGames',
    'http://cdn.livehighlights.net/content/web/app_dev.php/Modules/GetGames',
    'http://cdn.livehighlights.net/content/web/app_dev.php/Modules/ShowAllSports'
);



foreach($Elements as $Element)
{
    DoIt($Element);
}

function DoIt($LINK)
{   
    print "<br>~ ~ ~ ".$LINK." ~ ~ ~ ";
    
    $curl_handle=curl_init();
    curl_setopt($curl_handle,CURLOPT_URL,$LINK);
    curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
    curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
    $buffer = curl_exec($curl_handle);
    curl_close($curl_handle);
    if (empty($buffer)){
        print "Nothing returned from url.<p>";
    }
    else{
        print $buffer;
    }
    
    print "<br><br> ####################################### <br><br>";
}

    
 ?>
