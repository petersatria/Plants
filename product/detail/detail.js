let titleArticle = [
	'The Articles'
]

let heroContent = document.querySelector('#heroContent')

let arrHeroContent = [
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
]

arrHeroContent.forEach(element => {
	heroContent.innerHTML += `
	<h1>${titleArticle}</h1>
	<article>${element}<article/>`
});

let imageContent = document.querySelector('#imageContent')

let arrImages = [
	'../../assets/articles/article-2.jpg',
	'../../assets/articles/article-1.jpg',
	'../../assets/articles/article-2.jpg',
	'../../assets/articles/article-1.jpg'

]

arrImages.forEach(image => {
	imageContent.innerHTML += `
	<div class="box-image">
		<img src="${image}">
	</div>
	`
});


let about = document.querySelector('#aboutContent')

let arrAbout = [
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

arrAbout.forEach(element => {
	about.innerHTML += `
	<article>${element}<article/>`
});

let buyProduct = document.querySelector('#buyProduct')
let priceProduct = document.querySelector('#priceProduct')

let arrProductImage = [
	'../../assets/detail-product.png'
]

let arrProduct = [
	'1. Plant Bucket 1 So Awesome',
	'2. Sun Flower Bucket 2 Amaze'

]

let arrPrice = [
	'Rp. 340.000',
	'Rp. 340.000'
]

arrProductImage.forEach(image => {
	buyProduct.innerHTML += `
	<div class="product-image-box">
		<img src="${image}" alt="">
	</div>
	`
})

arrProduct.forEach(product => {
	arrPrice.forEach(price => {
		priceProduct.innerHTML += `
		<div class="price">
			<p>&nbsp;${product}</p>
			<p>${price}</p>
		</div>
	`
	})
})