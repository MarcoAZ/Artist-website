 /*
 * By Marco Zamora
 *
 * Use: adds even listeners to the nav that handle displaying submenus
 *	and hover actions
 */
 var pinkBorderBottom = "4px solid rgb(241, 4, 255)";

$(function() {
	$('.nav-desktop').on('click', '.group', function () {
		//display
		toggleDisplay($(this).find('ul:first'));
		//don't display others
		closeOtherNavLinks($(this));
	});

	$('.nav-desktop').on('mouseenter mouseleave', 'span', function (event) {
		toggleBorder($(this).context);
	});

});

function toggleDisplay (ul) {
	if(ul.css('display') == 'none'){
		ul.slideDown('fast');
    }
    else{
		ul.slideUp('fast');
	}
}

function toggleBorder (span) {
	span.style.borderBottom = (span.style.borderBottom == pinkBorderBottom) ? "none" : pinkBorderBottom;
}

function closeOtherNavLinks (curr) {
	//get rid of every border
	$('.group').find('span').css('border-bottom', 'none');

	$('.group').each(function (idx, next) {
		if(next != curr.context){
			$(next).find('ul:first').slideUp('fast');
		}
    });
}