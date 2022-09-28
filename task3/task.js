const products = document.getElementsByClassName('product');

for (const product of products){
	const decQuantity = product.getElementsByClassName('product__quantity-controls')[0].firstElementChild;
	const quantity = decQuantity.nextElementSibling;
	const incQuantity = decQuantity.nextElementSibling.nextElementSibling;
	decQuantity.onclick = () => {
		let q = Number(quantity.innerText);
		if (q > 1){
			quantity.innerText = q - 1;
		}
	}
	incQuantity.onclick = () => {
		let q = Number(quantity.innerText);
		quantity.innerText = q + 1;
	}
	
	const productAdd = product.getElementsByClassName('product__add')[0];
	
	productAdd.onclick = () => {
		const cart = document.getElementsByClassName('cart__products')[0];
		const cartContent = cart.getElementsByClassName('cart__product');
		
		let isExists = false;
		if (cartContent.length > 0){
			for (let i = 0; i < cartContent.length; i++){
				if (cartContent[i].getAttribute('data-id') == product.getAttribute('data-id')){
					cartContent[i].getElementsByClassName('cart__product-count')[0].innerText = Number(quantity.innerText) + Number(cartContent[i].getElementsByClassName('cart__product-count')[0].innerText);
					isExists= true;
					break;
				}
			}
		}
		
		if (isExists==false)
		{
			const elem = document.createElement('div');
			elem.setAttribute('class','cart__product');
			elem.setAttribute('data-id',product.getAttribute('data-id'));
						
			const productPicture = product.getElementsByClassName('product__image')[0];
			
			let html = `
			<img class="cart__product-image" src=`+productPicture.getAttribute('src')+`>
			<div class="cart__product-count">`+quantity.innerText+`</div>`;
				
			elem.insertAdjacentHTML('afterbegin',html);
			cart.insertAdjacentElement('beforeend', elem);
		}
	}
}
