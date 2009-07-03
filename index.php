<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
   <title>Javascript Menu Basic</title>
   <link rel="stylesheet" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" type="text/css">
   <link rel="stylesheet" href="http://yui.yahooapis.com/2.7.0/build/base/base.css" type="text/css">
   <style>

    html,body{background:#369;color:#000;}

    #hd h1 a{color:#fff;text-decoration: none} 

    #bd{background:#fff;border:1em solid #fff;}

    #nav{background: yellow;-moz-border-radius:5px;width: 240px;margin-bottom: 20px;padding: 4px}

    #menu h3 {background: #A8A8A8;border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;margin: 0;padding: .2em;}

    #menu,#menu li{list-style:none;margin:0;padding:0}

    #menu ul{margin:0;padding:.5em;background:#eee;}

    #menu a{color:#000;}

    #menu button{display:block;width:100%;text-align:left;}

    #ft{margin:2em 0 0 0;text-align:right;color: #fff;font-size: 12px}

    #ft a{color: #ccc}

    #menu.js li ul {position: absolute;left: -9999px} 

    #menu.js li.open ul {position: relative;left: 0;} 

    #menu.js li.open h3 {background: #51E373;border-top: #51E373;border-bottom: #51E373}

    #menu.js h3 button {border: none;background: transparent;} 

    #menu.js li.open h3 button {color: blue;} 

    #menu.js li.current h3{background: #AA98E2}

    #menu.js li.current ul {position: relative;left: 0;}

    #menu.js li.current h3 button{color: #fff}

   </style>
</head>
<body>

<div id="doc2" class="yui-t7">

   <div id="hd" role="banner"><h1><a href="index.php">Javascript Basic Menu</a></h1></div>

   <div id="bd" role="main">

	<div class="yui-g" id="nav">

<?php
             $nav = array("candc"=>"Collapse with CSS","cands"=>"Collapse And Show","candrt"=>"Collapse And Remove Tabbing","fixall"=>"Fix for all browser using YUI");

             echo"<ol>";

                    foreach($nav as $k=>$v) {
                            
                            if($k == $_GET['id']) {
 
                                     echo'<li><strong>'.$nav[$k].'</strong></li>';   
                                    
                            } else {

                                     echo'<li><a href="index.php?id='.$k.'">'.$nav[$k].'</a></li>';   

                            }//end if else

                    } //end foreach

             echo"</ol>";
?>
       </div>

         <div class="yui-g"><!-- start yui-g -->

           <ul id="menu">

                  <li><h3>Section 1</h3>
                    <ul>
                       <li><a href="foo.html">Foo</a></li>
                       <li><a href="bar.html">Bar</a></li>
                       <li><a href="baz.html">Baz</a></li>
                   </ul>
                  </li>

                  <li><h3>Section 2</h3>
                    <ul>
                       <li><a href="foo.html">Foo-1</a></li>
                       <li><a href="bar.html">Bar-1</a></li>
                       <li><a href="baz.html">Baz-1</a></li>
                   </ul>
                </li>

                  <li class="open"><h3>Section 3 (open but collapsible)</h3>
                    <ul>
                       <li><a href="foo.html">Foo-2</a></li>
                       <li><a href="bar.html">Bar-2</a></li>
                       <li><a href="baz.html">Baz-2</a></li>
                   </ul>
                </li>
                  <li><h3>Section 4</h3>
                    <ul>
                       <li><a href="foo.html">Foo-3</a></li>
                       <li><a href="bar.html">Bar-3</a></li>
                       <li><a href="baz.html">Baz-3</a></li>
                   </ul>
                </li>
                  <li class="current"><h3>Section 5(open but fixed)</h3>
                    <ul>
                       <li><a href="foo.html">Foo-4</a></li>
                       <li><a href="bar.html">Bar-4</a></li>
                       <li><a href="baz.html">Baz-4</a></li>
                   </ul>
                </li>


          </ul>

        </div><!-- end yui-g -->

        <div class="yui-g"><!-- start yui-g -->
<pre>
<?php

             if(isset($_GET['id'])) {

                       switch($_GET['id']) {

                             case 'candc':

                                  $file = 'collapseandcss.js';

                                  $content = file_get_contents($file);

                                  echo"<br/><strong>Source</strong><br/><br/>";

                                  echo$content;
  
                             break;              

                             case 'cands':

                                  $file = 'collandshow.js';

                                  $content = file_get_contents($file);

                                  echo"<br/><strong>Source</strong><br/><br/>";

                                  echo$content;
  
                             break;   

                             case 'candrt':

                                  $file = 'collandremovetabbing.js';

                                  $content = file_get_contents($file);

                                  echo"<br/><strong>Source</strong><br/><br/>";

                                  echo$content;


                             break;   

                             case 'fixall':

                                  $file = 'yui.js';

                                  $content = file_get_contents($file);

                                  echo"<br/><strong>Source</strong><br/><br/>";

                                  echo$content;

                             break;   

                      }//end switch
                       

             }//end if

?>             

</pre>

         </div><!-- end yui-g -->

</div><!-- end main -->

<div id="ft" role="contentinfo"><p>written By <a href="http://thinkphp.ro">Adrian Statescu</a></p></div>

</div><!-- end doc -->

<?php if($file == 'yui.js') {echo'<script type="text/javascript" src="http://yui.yahooapis.com/combo?2.7.0/build/yahoo-dom-event/yahoo-dom-event.js&2.7.0/build/selector/selector-min.js"></script>';} ?>

<?php if(isset($file)) { ?>
<script type="text/javascript" src="<?php echo$file;?>" charset="utf-8"></script>
<?php } ?>
</body>
</html>
