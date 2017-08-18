function createDots(items, visible_items){
	carousel_nav.innerHTML = '';
	var dots = Math.ceil(items/visible_items);
	var nav_id = 1;

	for(i = 0; i < dots; i++){
		dot_element = document.createElement('button');		
		dot_element.classList.add('recommendations-carousel-dot');

		if(i == 0){			
			dot_element.classList.add('recommendations-carousel-dot-active');
		}

		dot_element.setAttribute('id', 'recommendations-carousel-dot-'+ (nav_id));
		nav_id = nav_id + visible_items;

		carousel_nav.appendChild(dot_element);
	}

	addListenerDots();
}

function addListenerDots(){
	var dots = document.querySelectorAll('.recommendations-carousel-dot');
	for(var i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", carouselNav);
	}
}

function carouselNav(){
	var dot_id = this.id;
	dot_id = dot_id.replace("recommendations-carousel-dot-", "");

	var active_dot = document.querySelector('.recommendations-carousel-dot-active');
	active_dot.classList.remove('recommendations-carousel-dot-active');

	this.classList.add('recommendations-carousel-dot-active');

	slideTo(dot_id);
}

function slideTo(slide){
	items_width = carousel_inner.children[0].offsetWidth;
	carousel_inner.style.marginLeft = '-' + (items_width * (slide - 1)) + 'px';
}

function defineContainerWidth(carousel_items, item_width){
	carousel_inner.style.width = (item_width * carousel_items.length) + 'px';
	for(i = 0; i < carousel_items.length; i++){
		carousel_items[i].style.width = item_width + 'px';
	}
}

function carouselInitialize(item_width, carousel_items, visible_items){
	defineContainerWidth(carousel_items, item_width);
	createDots(carousel_items.length, visible_items);
	slideTo(1);
}