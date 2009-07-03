(function() {

     //get the menu and make sure if exists
     var m = document.getElementById('menu'); 

         //if exists the do it
         if(m) {

               //add class to apply design/functionality
               m.className = 'js';

               //get headers H3 from #menu
               var headers = m.getElementsByTagName('h3');  
                   
               //loop through H3 and append a button with innerHTM H3
                 for(var i=0;headers[i];i++) {

                         var content = headers[i].innerHTML;

                         var button = document.createElement('button');

                             headers[i].innerHTML = '';

                             headers[i].appendChild(button);

                             button.innerHTML = content; 
                 }//end for

         }//end if
})();