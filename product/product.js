// let pageArr = [1, 2, 3]
// const listPage = document.querySelector('#list-page')
// for (let i = 0; i < pageArr.length; i++) {
// 	listPage.innerHTML += `<span>${pageArr[i]}</span>`
// }





let detailBtn = document.querySelectorAll('#product')






let textProduct = [
	'text-products-1',
	'text-products-2',
	'text-products-3',
	'text-products-4',
	'text-products-5',
	'text-products-6',
	'text-products-7',
	'text-products-8',
	'text-products-9',
];

let textProduct2 = [
	'Galactus la parde-1',
	'Galactus la parde-2',
	'Galactus la parde-3',
	'Galactus la parde-4',
	'Galactus la parde-5',
	'Galactus la parde-6',
	'Galactus la parde-7',
	'Galactus la parde-8',
	'Galactus la parde-9',
];

let boxProduct = document.querySelector('#product')

const pageProduct1 = () => {
	for (let i = 0; i < textProduct.length; i++) {
		boxProduct.innerHTML += `
	<div class="item-product" data-id="product-id-${i + 1}">
		<div class="box-image">
			<img src="../assets/products/images-products-${i + 1}.png"/>
		</div>
		<div class="box-title">
			<p>${textProduct[i]}</p>
		</div>
		<a href="">Detail</a>
	</div>`
	}
};

const pageProduct2 = () => {
	for (let i = 0; i < textProduct2.length; i++) {
		boxProduct.innerHTML += `
	<div class="item-product">
		<div class="box-image">
			<img src="../assets/products/page2/Galactus la parde-${i + 1}.png"/>
		</div>
		<div class="box-title">
			<p>${textProduct2[i]}</p>
		</div>
	</div>`
	}
};

const pageProduct3 = () => {
	for (let i = 0; i < textProduct2.length; i++) {
		boxProduct.innerHTML += `
	<div class="item-product">
		<div class="box-image">
			<img src="../assets/products/images-products-${i + 1}.png"/>
		</div>
		<div class="box-title">
			<p>${textProduct[i]}</p>
		</div>
	</div>`
	}
};

const page = () => {
	const pageSelect = document.querySelectorAll('#list-page span');
	const pageSelect1 = document.querySelector('#page1');
	const pageSelect2 = document.querySelector('#page2');
	const pageSelect3 = document.querySelector('#page3');

	pageSelect.forEach(selected => {
		selected.addEventListener('click', function () {
			const pageSelected = selected.getAttribute('id');
			console.log(pageSelected)
			if (pageSelected === 'page1') {
				boxProduct.innerHTML = '';
				pageProduct1();
				pageSelect1.classList.add('active');
				pageSelect2.classList.remove('active');
				pageSelect3.classList.remove('active');
			} else if (pageSelected === 'page2') {
				boxProduct.innerHTML = '';
				pageProduct2();
				pageSelect2.classList.add('active');
				pageSelect1.classList.remove('active');
				pageSelect3.classList.remove('active');
			} else {
				boxProduct.innerHTML = '';
				pageProduct3();
				pageSelect3.classList.add('active');
				pageSelect1.classList.remove('active');
				pageSelect2.classList.remove('active');
			}
		});
	});
};




pageProduct1();

page();

