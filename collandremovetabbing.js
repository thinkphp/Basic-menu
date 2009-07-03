(function() {

     //get the menu and make sure if exists
     var m = document.getElementById('menu'); 

         //if exists the do it
         if(m) {

               //add class to apply design/functionality
               m.className = 'js';

               //get headers H3 from #menu
               var headers = m.getElementsByTagName('h3');  
                   
               //loop over the all headers H3
                 for(var i=0;headers[i];i++) {

                         //get the content of the current header H3
                         var content = headers[i].innerHTML;

                         //create a button, delete the content of the header
                         //replace it with the button and set the content to cached header content
                         var button = document.createElement('button');

                             headers[i].innerHTML = '';

                             headers[i].appendChild(button);

                             button.innerHTML = content; 
                 }//end for

                 //get all ULs from menu
                 var uls = m.getElementsByTagName('ul');

                     //loop over the nested lists and set the taborder of the nested links to -1 
                     //to remove them from the tab order
                     for(var i=0;uls[i];i++) {

                             if(uls[i].parentNode.className !== 'open' && uls[i].parentNode.className !== 'current'){

                                       var as = uls[i].getElementsByTagName('a');

                                       tabOrder(as,-1);
                             }

                     }//endfor

                 //if FF
                 if(window.addEventListener) {

                     //using event delegation for click
                     m.addEventListener('click',function(e){

                          //get event
                          var t = e.target;

                              //if button is clicked
                              if(t.nodeName.toLowerCase() === 'button') {

                                            //get the LI
                                            var mom = t.parentNode.parentNode;

                                            var as = mom.getElementsByTagName('a'); 

                                                  //check if its class name is not current and remove 
                                                 //the open class if it exists
                                                //else add an open class. Also, remove or add the 
                                               //links to the tab order
                                                if(mom.className !== 'current') {

                                                   if(mom.className !== 'open') {       

                                                       //set class open
                                                       mom.className = 'open';  

                                                       tabOrder(as,0);

                                                   } else {

                                                       mom.className = '';  

                                                       tabOrder(as,-1);
                                                    }
                                                }
                              }//endif 
 
                            //don t do the normal things buttons do
                            e.preventDefault();

                     },true);

                  //if IE
                  } else if(window.attachEvent) {

                     //using event delegation for click
                     m.attachEvent('onclick',function(e){

                          var t = window.event.srcElement;

                              //if button is clicked
                              if(t.nodeName.toLowerCase() === 'button') {

                                            var mom = t.parentNode.parentNode;

                                            var as = mom.getElementsByTagName('a'); 

                                                //check if its class name is not current and remove 
                                                //the open class if it exists
                                                //else add an open class. Also, remove or 
                                               //add the links to the tab order
                                                if(mom.className !== 'current') {

                                                   if(mom.className !== 'open') {       

                                                       //set class open
                                                       mom.className = 'open';  

                                                       tabOrder(as,0);

                                                   } else {

                                                       mom.className = '';  

                                                       tabOrder(as,-1);
                                                    }
                                                }
                              }//endif 
 

                              //don t do the normal things buttons do
                              window.event.cancelBubble = true;

                              window.event.returnValue = false;

                     });
                  }

          }//end if
 
          //add or remove elements from tab order
          function tabOrder(elems,index) {for(var i=0;elems[i];i++) elems[i].tabIndex = index;}

})();