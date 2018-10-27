var cardContainer = document.getElementById('cardContainer');
var searchButton = document.getElementById('searchButton');

// array
var cards = [
{
	product:'smartphone',
	price:100000,
	img:'https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6s-plus/space-gray/device-front.png.transform/pdpCarousel/image.jpg',
	brand:'apple',
	names:'iphone X'
},
{
	product:'Computer',
	price:100000,
	img:'https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6s-plus/space-gray/device-front.png.transform/pdpCarousel/image.jpg',
	brand:'apple',
	names:'iphone X'
},
{
	product:'Computer',
	price:100000,
	img:'https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6s-plus/space-gray/device-front.png.transform/pdpCarousel/image.jpg',
	brand:'wawe',
	names:'iphone X'
},
]
// loopar í gegnum array og rúllar í hverju load
for(var i = 0; i < cards.length; i++){

	cardContainer.innerHTML +=`
		<div class="card">
			<img src="${cards[i].img}">
			<h3>${cards[i].names}<span>${cards[i].brand}</span></h3>
			<p>${cards[i].product}<span>${cards[i].price} kr</span></p>
		</div>
	`
}
// Onclick 
searchButton.onclick = function(){
	cardContainer.innerHTML =""
	var searchInput = document.getElementById('searchInput').value;
	//looopa til þess að fara í gegnum array og leita	
	for(var i = 0; i < cards.length; i++){
		var index = cards[i].brand.indexOf(searchInput);
		var index2 = cards[i].names.indexOf(searchInput);
	// ef í input er ekki -1 (false) þá fartar út card sem stemmir 	
	if(index !== -1){
	
	cardContainer.innerHTML +=`
		<div class="card">
			<img src="${cards[i].img}">
			<h3>${cards[i].names}<span>${cards[i].brand}</span></h3>
			<p>${cards[i].product}<span>${cards[i].price} kr</span></p>
		</div>
	`
	}
	else if(index2 !== -1){
		alert('exist')
	}
	else{
		alert('not')
	}

	}
	
}
