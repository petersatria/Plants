let titleArticle = [
	'Title Of Articles',
	'Title Of Articles',
	'Title Of Articles'
]

let textArticle = [
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
]

let boxArticle = document.querySelector('#articleContent');

for (let i = 0; i < titleArticle.length; i++) {
	boxArticle.innerHTML += `
	<div class="item-article">
		<div class="box-image">
			<img src="../assets/articles/article-${i + 1}.jpg"/>
		</div>
		<div class="box-title">
			<span class="border-3"></span>
			<h2>${titleArticle[i]}</h2>
			<p>${textArticle[i]}</p>
		</div>
	</div>`
}

let about = document.querySelector('#aboutContent')

let arrAbout = [
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

// for (let i = 0; i < arrAbout.length; i++) {
// 	about.innerHTML += `
// 	<article>${arrAbout[i]}<article/>`
// };

arrAbout.forEach(element => {
	about.innerHTML += `
	<article>${element}<article/>`
});