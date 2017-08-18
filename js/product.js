function createProduct(product){
	created_product = document.createElement('div');
	created_product.classList.add('product');

	// image
	created_product_img = document.createElement('img');
	created_product_img.setAttribute('src', product.imageName);
	created_product_img.setAttribute('onerror', 'javascript:this.src="dist/img/default.jpg"');
	created_product.appendChild(created_product_img);

	// paragraphs
	created_product_p_name = document.createElement('p');
	created_product_p_name.classList.add('name');

	if(product.name.length > 80){
		product_name = product.name.substr(0, 80) + '...';
	}else{
		product_name = product.name;
	}

	created_product_p_name.textContent = product_name;
	created_product.appendChild(created_product_p_name);

	created_product_p_price = document.createElement('p');
	created_product_p_price.classList.add('price');

	created_product_p_price.innerHTML = 'Por: <span>' + product.price + '</span>';
	created_product.appendChild(created_product_p_price);

	created_product_p_conditions = document.createElement('p');
	created_product_p_conditions.classList.add('conditions');
	created_product_p_conditions.innerHTML = 'ou até <span>' + product.productInfo.paymentConditions.replace('ou até ','').replace(' sem juros','') + '</span> sem juros';
	created_product.appendChild(created_product_p_conditions);

	// button
	created_product_button = document.createElement('button');
	created_product_button.classList.add('cart-button');

	created_product_button_span = document.createElement('span');
	created_product_button_span.textContent = 'adicionar ao carrinho';
	created_product_button.appendChild(created_product_button_span);

	created_product_button_icon = document.createElement('i');
	created_product_button_icon.classList.add('material-icons');
	created_product_button_icon.textContent = 'add_shopping_cart';
	created_product_button.appendChild(created_product_button_icon);

	created_product.appendChild(created_product_button);

	created_product.addEventListener("click", addClickClass);

	return created_product;
}

function addClickClass(){
	var clicked = document.querySelector('.clicked');
	if(clicked){
		clicked.classList.remove('clicked');
	}
	this.classList.add('clicked');
}