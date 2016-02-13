var divs = document.getElementsByClassName('projectl');
	console.log( divs );
	// get window width and height
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;

	
 
    // get random numbers for each element
    	randomTop = getRandomNumber(0, winHeight);
    	randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    	divs.style = randomTop +"px";
    	divs.style = randomLeft +"px";
    	// dotTwo.style.top = randomTop +"px";
    	// dotTwo.style.left = randomLeft +"px";
    

		// function that returns a random number between a min and max
		function getRandomNumber(min, max) {
	    
	  			return Math.random() * (max - min) + min;
	    
				}//end of function







/*function init(){
   var obj=document.getElementsByTagName('a')[0];
   var obj1=document.getElementById('coolhaiku');

   var w=obj.offsetWidth;
   var h=obj.offsetHeight;

   var l=Math.floor(Math.random()*w);
   var t=Math.floor(Math.random()*h);

if(l>w-obj1.offsetWidth){
   l=w-obj1.offsetWidth;
 }
if(t>h-obj1.offsetHeight){
   t=h-obj1.offsetHeight;
 }
   obj1.style.left=l+'px';
   obj1.style.top=t+'px';
   obj1.className='pstn';
 }

 window.addEventListener?
 window.addEventListener('load',init,false):
 window.attachEvent('onload',init);*/