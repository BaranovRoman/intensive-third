window.addEventListener('DOMContentLoaded', function() {
	//Получили информацию для работы, объявили нужные переменные
	let products = document.querySelectorAll('.products'),
			buttons = document.getElementsByTagName("button"),
			open = document.getElementsByClassName("open")[0];
	//функция для создания корзины
	function createCart() {
	//создал элементы для корзины
		let cart = document.createElement("div"),
				field = document.createElement("div"),
				heading = document.createElement("h2"),
				close = document.createElement("button");
	//добавил классы элементам
			cart.classList.add("cart");
			field.classList.add("cart-field");
			close.classList.add("close");
	//добавил текст элементам
			close.textContent = "Закрыть";
			heading.textContent = "В нашей корзине:";
	//вставил элементы на страницу
			document.body.appendChild(cart);
			cart.appendChild(heading);
			cart.appendChild(field);		
			cart.appendChild(close);				
	}

	createCart();

	let field = document.querySelector(".cart-field"),
			cart = document.querySelector(".cart"),
			close = document.querySelectorAll(".close")[0];

	for (let i = 0; i < buttons.length; i++) {
		//вешаем обработчик события клик на каждую из кнопок
			buttons[i].addEventListener('click', function() {
		//создал копию элемента
				let item = products[i].cloneNode(true);
						btn = item.querySelector('button');

				btn.remove();
				field.appendChild(item);
				products[i].remove();
			})
	}

	function openCart() {
		cart.style.display = "block"
	};

	function closeCart() {
		cart.style.display = "none"
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);


})