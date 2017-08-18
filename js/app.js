var carousel = document.querySelector('.recommendations-carousel');
var carousel_inner = carousel.querySelector('.recommendations-carousel-inner');
var carousel_nav = carousel.querySelector('.recommendations-carousel-nav');

window.onresize = function() {
	var carousel_items = carousel_inner.children;
	if(carousel_items.length != 0){
		if(window.innerWidth < 620){
			var item_width = carousel.offsetWidth / 1;
			carouselInitialize(item_width, carousel_items, 1);
		}else if(window.innerWidth < 1040){
			var item_width = carousel.offsetWidth / 2;
			carouselInitialize(item_width, carousel_items, 2);
		}else{
			var item_width = carousel.offsetWidth / 3;
			carouselInitialize(item_width, carousel_items, 3);
		}
	}
};

window.onresize();