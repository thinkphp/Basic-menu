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


           //if FF
           if(window.addEventListener) {    

                 //using event delegation for click
                  m.addEventListener('click',function(e){

                          var t = e.target; 

                              //find the event target and check that it was a button
                              if(t.nodeName.toLowerCase() === 'button') {

                                   var mom = t.parentNode.parentNode;

                                       //check if its class is not current and 
                                       //remove the open class if it exists else
                                       //add an open class
                                       if(mom.className != 'current') {

                                                 if(mom.className === 'open') {

                                                      mom.className = '';

                                                 } else {

                                                      mom.className = 'open';
                                                 }

                                       }//end if                                  

                              }//end if

                          //cancel return value
                          e.preventDefault();   
                   
                 },true);

             //if IE
             } else if(window.attachEvent) {

                 //using event delegation for click
                  m.attachEvent('onclick',function(e){

                          var t = window.event.srcElement;

                              //if element is button then get parentNode.parentNode
                              if(t.nodeName.toLowerCase() === 'button') {

                                   var mom = t.parentNode.parentNode;

                                       //check if its class is not current and 
                                       //remove the open class if it exists else
                                       //add an open class
                                       if(mom.className != 'current') {

                                                 if(mom.className === 'open') {

                                                      mom.className = '';

                                                 } else {

                                                      //set class 'open'
                                                      mom.className = 'open';
                                                 }

                                       }//end if                                  

                              }//end if

                          //cancel return value
                          window.event.cancelBubble = true;

                          window.event.returnValue = false;                   
                 });

             }//end ifelse
 

         }//end if
})();