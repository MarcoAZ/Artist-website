 /*
 * By Marco Zamora
 *
 * Use: adds even listeners to the nav that handle displaying submenus
 *	and hover actions
 */


 $(function() {

	$('.nav').on('click', '.group', function () {
		//display
        toggleDisplay($(this).find('ul:first'));
		//don't display others
		closeOtherNavLinks($(this));
    });


	//adds eventListeners to spans. this means if we want to add spans not in the nav later, we'll have to change this function
	// var spans = document.getElementsByTagName("span");
	//
	// for(var i = 0; i < spans.length; i++)
	// {
	// 	(function(aSpan)
	// 	{
	// 		aSpan.addEventListener("mouseover",function() {
	// 			toggleBorder(aSpan);
	// 		},false);
	//
	// 		aSpan.addEventListener("mouseout", function() {
	// 			toggleBorder(aSpan);
	// 		}, false);
	// 	})(spans[i]);
	// };

});

var pinkBorderBottom = "4px solid rgb(241, 4, 255)";

function toggleDisplay (ul) {
	if(ul.css('display') == 'none'){
		ul.slideDown('fast');
    }
    else{
		ul.slideUp('fast');
	}
};

function toggleBorder (span) {
	span.style.borderBottom = (span.style.borderBottom == pinkBorderBottom) ? "none" : pinkBorderBottom;
};

function closeOtherNavLinks (curr) {
	//get rid of every border
	$('.group').find('span').css('border-bottom', 'none');

	$('.group').each(function (idx, next) {
		if(next != curr.context){
			console.log($(next).find('ul:first').slideUp('fast'));
		}
    });
};