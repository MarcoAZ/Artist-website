 /*
 * By Marco Zamora
 *
 * Use: adds even listeners to the nav that handle displaying submenus
 *	and hover actions
 */
 
 document.addEventListener("DOMContentLoaded", function(event) {

	// determines which span is clicked, underlines it, and closes the others.
	
	var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("ul");
	
	for(var i=1; i < nav.length; i++)
	{
		(function(aNavLink)
		{
			aNavLink.addEventListener("click", function(){
				closeOtherNavLinks(aNavLink.getElementsByTagName("span")[0], aNavLink.children[1]); //spans
				toggleDisplay(aNavLink.children[1]); //links
				toggleBorder(aNavLink.getElementsByTagName("span")[0]);
			},false);
		})(nav[i].parentElement);
	};
	

	//adds eventlisteners to spans. this means if we want to add spans not in the nav later, we'll have to change this function
	var spans = document.getElementsByTagName("span");
	
	for(var i = 0; i < spans.length; i++)
	{
		(function(aSpan)
		{
			aSpan.addEventListener("mouseover",function() {
				toggleBorder(aSpan);
			},false);
			
			aSpan.addEventListener("mouseout", function() {
				toggleBorder(aSpan);
			}, false);
		})(spans[i]);
	};

});

var pinkBorderBottom = "4px solid rgb(241, 4, 255)";

function toggleDisplay (ul) {
	ul.style.display = (ul.style.display == "inline") ? "none" : "inline";
};

function toggleBorder (span) {
	span.style.borderBottom = (span.style.borderBottom == pinkBorderBottom) ? "none" : pinkBorderBottom;
};

function closeOtherNavLinks (span, link) {
	var spans = document.getElementsByTagName("span");
	for(var i = 0; i < spans.length; i++)
	{
		//get rid of every border
		if(spans[i] != span)
		{	spans[i].style.borderBottom = "none";}
	}
	
	var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("ul");
	for(var i=1; i < nav.length; i++)
	{
		//get rid of every display except the one we clicked on(that changes later)
		if(nav[i] != link)
		{	nav[i].style.display = "none";}
	}
};