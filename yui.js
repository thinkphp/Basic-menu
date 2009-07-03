(function() {

var YE = YAHOO.util.Event, YD = YAHOO.util.Dom, YS = YAHOO.util.Selector;

var config = {

             //id of the menu
             'id': 'menu',

             //class to add to apply design/functionality
             'jsenabled': 'js',

             //show the menu
             'show': 'open',

             //current item (will be not collapsed)
             'current': 'current' 

             }; 
 

     var m = YD.get(config.id);

         if(m) {

               YD.addClass(m,config.jsenabled);

               tabOrder(YS.query('#'+config.id + ' ul a'),-1);

               tabOrder(YS.query('#'+config.id + ' li.'+ config.show + ' a'),0);

               tabOrder(YS.query('#'+config.id + ' li.'+ config.current + ' a'),0);

               YD.batch(YS.query('#'+config.id + ' h3'),function(o){

                       var c = o.innerHTML;   

                       var butt = document.createElement('button');

                           o.innerHTML = '';

                           o.appendChild(butt);

                           butt.innerHTML = c;  
               });

               YE.on(m,'click',function(e){

                       var t = YE.getTarget(e);

                           if(t.nodeName.toLowerCase() === 'button') {

                                var mom = YD.getAncestorByTagName(t,'li');

                                        if(!YD.hasClass(mom,config.current)) {

                                               var as = YS.query('ul a',mom);

                                                    if(YD.hasClass(mom,config.show)) {

                                                            YD.removeClass(mom,config.show); 

                                                            tabOrder(as,-1); 

                                                    } else {

                                                            YD.addClass(mom,config.show); 

                                                            tabOrder(as,0);

                                                    }                                                  
                                        }//endif
                           }//end if

               },true);    

         }//end if   

          //add or remove elements from tab order
          function tabOrder(elems,index) {for(var i=0;elems[i];i++) elems[i].tabIndex = index;}

})();