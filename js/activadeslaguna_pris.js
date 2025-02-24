const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    simulateTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

const calculateHeight = () => {
    const swiperSlideElements = Array.from(document.querySelectorAll('.swiper .swiper-slide'));
    if (!swiperSlideElements.length) return;
    const width = swiperSlideElements[0].getBoundingClientRect().width;
    const height = Math.round(width / (16 / 9));
    swiperSlideElements.forEach(element => element.style.height = `${height}px`);
};

document.addEventListener("DOMContentLoaded", calculateHeight);
addEventListener('resize', calculateHeight);



function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var table = document.getElementsByTagName("table");
    var odd;
    for (var i = 0 ; i < table.length; i++) {
    	var rows = table[i].getElementsByTagName("tr");
    	for (var j = 0; j < rows.length; j++) {
    		if (odd == true) {
    			//rows[j].style.backgroundColor = "#CCCCFF";
    			addClass(rows[j], "odd");
    			
    			odd = false;
    		}
    		else {
    			odd = true;
    		}
    	}
    }
}
addLoadEvent(stripeTables);

function highlightRows() {
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].onmouseover = function() {
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function() {
			this.style.fontWeight = "normal";
		}
	}
}
addLoadEvent(highlightRows);
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof oldonload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	}
	else {
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}