/*
* Read the portfolio file and create the nav for the landing pageX
* TODO: find a way to combine this with the landing page script since
*	they essentially do the same thing.
*/

 document.addEventListener("DOMContentLoaded", function(event) {
	 
	 var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("ul");
	 
	 //art
	 var topLi = true;
	 for(var piece in portfolio.arts)
	 {
		 var link = document.createElement("a");
		 link.setAttribute("href", "../" + portfolio.arts[piece].url);
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
		 link.setAttribute("href", "../" + portfolio.designs[piece].url);
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
		 link.setAttribute("href", "../" + portfolio.illusts[piece].url);
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
		 link.setAttribute("href", "../" + portfolio.comms[piece].url);
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
	 
});