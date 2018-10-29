var cardContainer = document.getElementById('cardContainer');
var searchButton = document.getElementById('searchButton');

// array
var cards = [
{
	product:'smartphone',
	price:144.990,
	img:'https://www.epli.is/media/catalog/product/cache/1/image/800x600/17f82f742ffe127f42dca9de82fb58b1/i/p/iphone_xr_black-back_09122018_1.jpg',
	brand:'apple',
	names:'iPhone xr'
},{
	product:'watch',
	price:49.990,
	img:'https://www.epli.is/media/catalog/product/cache/1/image/800x600/040ec09b1e35df139433887a97daa66f/4/2/42-alu-space-sport-black-gallery2_geo_us_4.jpeg',
	brand:'apple',
	names:'series 3'
},{
	product:'headphones',
	price:100000,
	img:'https://elko.is/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/8/7895640020.jpg',
	brand:'bose',
	names:'quietComfort 35 ii'
},{
	product:'camera',
	price:129.990,
	img:'https://www.netverslun.is/images/prod/C/A/A/7//CAA74F24-9F15-4E31-922C-7CF901373003_1_big.jpg',
	brand:'canon',
	names:'eos m6'
},{
	product:'camera',
	price:359.990,
	img:'https://www.netverslun.is/images/prod/6/8/E/B//68EB000D-B4F3-4A00-AB99-9A68A86F9473_1_big.jpg',
	brand:'sony',
	names:'alpha A7III'
},{
	product:'speaker',
	price:24.990,
	img:'https://elko.is/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/actonbtbl.jpg',
	brand:'marshall',
	names:'acton'
},{
	product:'headphones',
	price:24.490,
	img:'https://cdn.shopify.com/s/files/1/1956/9041/products/earpods_x500.png?v=1503052569',
	brand:'apple',
	names:'Airpods'
},{
	product:'apple tv',
	price:19.990,
	img:'https://cdn.shopify.com/s/files/1/1956/9041/products/getfile_0c83673f-3a35-423a-8a87-f91f198dee1c_x500.png?v=1500596210',
	brand:'apple',
	names:'apple tv 4k'
},{
	product:'speaker',
	price:57.990,
	img:'https://elko.is/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/v/l/vl551_2.jpg',
	brand:'samsung',
	names:'vl550/xe '
},{
	product:'watch',
	price:99.990,
	img:'https://elko.is/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/0100168821.jpg',
	brand:'garmin',
	names:'fenix 5'
},
]
// loopar í gegnum array og rúllar í hverju load
for(var i = 0; i < cards.length; i++){

	cardContainer.innerHTML +=`
		<div class="card">
			<img src="${cards[i].img}">
			<h3>${cards[i].names} <span>${cards[i].brand}</span></h3>
			<p>${cards[i].product} <span>${cards[i].price} kr</span></p>
		</div>
	`
}
// Onclick 
searchButton.onclick = function(){
	cardContainer.innerHTML =""
	var searchInput = document.getElementById('searchInput').value;
	//looopa til þess að fara í gegnum array og leita	
	for(var i = 0; i < cards.length; i++){
		var index = cards[i].brand.indexOf(searchInput.toLowerCase());
		var index2 = cards[i].names.indexOf(searchInput.toLowerCase());
		var index3 = cards[i].product.indexOf(searchInput.toLowerCase());	
	
	if(index !== -1){
	
	cardContainer.innerHTML +=`
		<div class="card">
			<img src="${cards[i].img}">
			<h3>${cards[i].names} <span>${cards[i].brand}</span></h3>
			<p>${cards[i].product} <span>${cards[i].price} kr</span></p>
		</div>
	`
	}
	else if(index2 !== -1){

		cardContainer.innerHTML +=`
		<div class="card">
			<img src="${cards[i].img}">
			<h3>${cards[i].names} <span>${cards[i].brand}</span></h3>
			<p>${cards[i].product} <span>${cards[i].price} kr</span></p>
		</div>
	`
	}
	else if(index3 !== -1){

		cardContainer.innerHTML +=`
		<div class="card">
			<img src="${cards[i].img}">
			<h3>${cards[i].names} <span>${cards[i].brand}</span></h3>
			<p>${cards[i].product} <span>${cards[i].price} kr</span></p>
		</div>
	`
	}
	else{
		console.log('no match')
	}

}	
}
