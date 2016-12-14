/*
* Read the portfolio file and create the navs
*/

document.addEventListener("DOMContentLoaded", function(event) {
	buildDesktopNav();
	buildMobileNav();
});

function buildMobileNav() {
	/*
	 * Build top level dropdown menus for each category
	 */
	var $arts = $("<li>", {class: "dropdown"}).append("<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Art <span class='caret'></span></a>");
	var $artsUL = $("<ul>", {class: "dropdown-menu"});

    var $designs = $("<li>", {class: "dropdown"}).append("<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Design <span class='caret'></span></a>");
    var $designsUL = $("<ul>", {class: "dropdown-menu"});

    var $illusts = $("<li>", {class: "dropdown"}).append("<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Illustration <span class='caret'></span></a>");
    var $illustsUL = $("<ul>", {class: "dropdown-menu"});

    var $comms = $("<li>", {class: "dropdown"}).append("<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Commissions <span class='caret'></span></a>");
    var $commsUL = $("<ul>", {class: "dropdown-menu"});

    //Iterate through projects to append
	jQuery.each(portfolio.arts, function (proj, props) {
        var link = $("<a>", {href: "portfolio/" + props.url, text: props.title});
        var li = $("<li>").append(link);
        $artsUL.append(li);
    });
	//append to category
	$arts.append($artsUL);
	$("#mobile-nav").append($arts);

    jQuery.each(portfolio.designs, function (proj, props) {
        var link = $("<a>", {href: "portfolio/" + props.url, text: props.title});
        var li = $("<li>").append(link);
        $designsUL.append(li);
    });
    $designs.append($designsUL);
    $("#mobile-nav").append($designs);

    jQuery.each(portfolio.illusts, function (proj, props) {
        var link = $("<a>", {href: "portfolio/" + props.url, text: props.title});
        var li = $("<li>").append(link);
        $illustsUL.append(li);
    });
    $illusts.append($illustsUL);
    $("#mobile-nav").append($illusts);

    jQuery.each(portfolio.comms, function (proj, props) {
        var link = $("<a>", {href: "portfolio/" + props.url, text: props.title});
        var li = $("<li>").append(link);
        $commsUL.append(li);
    });
    $comms.append($commsUL);
    $("#mobile-nav").append($comms);

    //append Etsy shop, CV, and contact info
    $("#mobile-nav").append("<li><a href='https://www.etsy.com/shop/ghostcaptaincreative' target='_blank'>Etsy Shop</a></li>");
    $("#mobile-nav").append("<li><a href='daniellanapolitano_resume.pdf' target='_blank'>CV</a></li>");
    $("#mobile-nav").append("<li><a href='mailto:daniellanapolitano@gmail.com'>Contact</a></li>");
}

function buildDesktopNav() {
     var nav = document.getElementsByClassName("nav-desktop")[0].getElementsByTagName("ul");

     //art
     var topLi = true;
     for(var piece in portfolio.arts)
     {
         var link = document.createElement("a");
         link.setAttribute("href", "portfolio/" + portfolio.arts[piece].url);
         link.innerHTML = portfolio.arts[piece].title;

         var list = document.createElement("li");

         if(topLi)
         {
             list.setAttribute("class", "topLi");
             topLi = false;
         }

         list.appendChild(link);
         nav[1].appendChild(list);
     }

     //design
     topLi = true;
     for(var piece in portfolio.designs)
     {
         var link = document.createElement("a");
         link.setAttribute("href", "portfolio/" + portfolio.designs[piece].url);
         link.innerHTML = portfolio.designs[piece].title;

         var list = document.createElement("li");

         if(topLi)
         {
             list.setAttribute("class", "topLi");
             topLi = false;
         }

         list.appendChild(link);
         nav[2].appendChild(list);
     }

     //illustrations
     topLi = true;
     for(var piece in portfolio.illusts)
     {
         var link = document.createElement("a");
         link.setAttribute("href", "portfolio/" + portfolio.illusts[piece].url);
         link.innerHTML = portfolio.illusts[piece].title;

         var list = document.createElement("li");

         if(topLi)
         {
             list.setAttribute("class", "topLi");
             topLi = false;
         }

         list.appendChild(link);
         nav[3].appendChild(list);
     }

     //commissions
     topLi = true;
     for(var piece in portfolio.comms)
     {
         var link = document.createElement("a");
         link.setAttribute("href", "portfolio/" + portfolio.comms[piece].url);
         link.innerHTML = portfolio.comms[piece].title;

         var list = document.createElement("li");

         if(topLi)
         {
             list.setAttribute("class", "topLi");
             topLi = false;
         }

         list.appendChild(link);
         nav[4].appendChild(list);
     }
}