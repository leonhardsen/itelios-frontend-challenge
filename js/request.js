function request(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'json/products.json');

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var json = JSON.parse(xhr.responseText);
				var item = json[0].data.item;
				var recommendations = json[0].data.recommendation;

				visited_product = createProduct(item);		
				document.querySelector('.visited').appendChild(visited_product);

				recommendations.map(function(recommendation){
				  	product = createProduct(recommendation);
				  	carousel_inner.appendChild(product);
				});

				var carousel_items = carousel_inner.children;
				var items_width = carousel_items[0].offsetWidth;

				if(window.innerWidth < 620){
					visible_items = 1;
				}else if(window.innerWidth < 1040){
					visible_items = 2;
				}else{
					visible_items = 3;
				}

				carouselInitialize(items_width, carousel_items, visible_items);

			}else{
				console.log('Erro ao obter os produtos.');
			}
		}
	};

	xhr.send();
}