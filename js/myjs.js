
// Whole-script strict mode syntax
'use strict'




let selectCate = document.getElementById("selectCategories");
let subMenu = document.getElementById('subMenu');
subMenu.style.display = 'none';
selectCate.addEventListener('click', function(){
	if(subMenu.style.display === 'none'){
		subMenu.style.display ='block';
	}else{
		subMenu.style.display = 'none';
	}
})


let containersMenu = document.getElementsByClassName('containerMenu');
let containersData = [{
	menu: "Accessories",
	menuList: ["All computers & Accessories", "Power Protection","Bags","Cables",
	"Vehicle Electronics", "Audio & Video Accessories", "Battleries", "Chargers & Accessories"],
	image: "./photos/banner-accessories.jpg"
},
	{
	menu: "Computers",
	menuList: ["All computers & Accessories", "Laptops", "Computer Cases", "Servers",
	"Computer Components", "Desktops", "Mouses", "Keyboards"],
	image: "./photos/banner-computer.jpg"
},
	{
	menu: "Cameras & Photos",
	menuList: ["All Cameras & Photos", "Action Video Cameras", "Camera Cases", "DSLR Cameras",
	"Microphones", "Lenses", "Digital Cameras", "Reflectors"],
	image: "./photos/banner-camera.jpg"
},
	{
	menu: "Mobiles & Tables",
	menuList: ["All Mobiles & Tables", "Micro SD Memory Cards", "Smartphones",
	"Landline Phones", "Tables", "Cell Phone Chargers", "Cases & Covers", "Selfie Sticks"],
	image: "./photos/banner-mobile.jpg",
},
	{
	menu: "Tv's & Audio",
	menuList: ["All Tv's & Audio", "DVD Players & Recorders", "LED & LCD TVs",
	"Media Players", "OLED TV's", "Projection Screen", "Remote Controls", "Speakers"],
	image: "./photos/banner-TV.jpg"
},
	{
	menu: "Consoles & Games",
	menuList: ["All Game consoles", "Virtual Reallity", "Joysticks", "Game Controllers",
	"Video Game", "Racing Wheels", "Digital Games & DLC", "Gamepads"],
	image: "./photos/banner-console.jpg"
},
	{
	menu: "Gadgets",
	menuList: ["All Gadgets", "Smart Home Appliances", "Smart Remote Controls",
	"Watches", "Alarm & Sensor", "MP3 Players", "Wearable Devices", "Headphone"],
	image: "./photos/banner-gadgets.jpg"
}
];


function containerMenu(){

	for(let i = 0; i < containersMenu.length; i++){
	let menuHTML = '';
	let containerMenu = containersMenu[i];
	let containerHTML = containersMenu[i].innerHTML;
	let containerText = containersMenu[i].innerText;
	for(let k = 0; k < containersData.length; k++){
		let containerData = containersData[k];
		if(containerText === containerData.menu){
			menuHTML += '<div class="subContainer">';
			menuHTML += '<span>'+ containerData.menu + '</span>';
			menuHTML += '<ul>';
			let menusList = containerData.menuList;
				for(let j = 0; j < menusList.length; j++){
					
					let nav = menusList[j];
					menuHTML += '<li>'+nav+'</li>'
				}
			menuHTML += '</ul>';
			menuHTML += '<div class="img-banners"><div class="infoBanners">';
			menuHTML += '<span>Looking for more?</span>';
			menuHTML += '<h4><strong>Get 100$</strong></h4><h4>Voucher for</4>';
			menuHTML += '<h4>'+containerData.menu+'</h4></div>';
			menuHTML += '<img src="'+containerData.image+'"';
			menuHTML += '</div></div>';

			
		}
	}
	
	let concat = containerHTML.concat(menuHTML);
	containerMenu.innerHTML = concat;
	}
}


	let latestProducts = [{
		imagesF : './photos/products/laptop1.png',
		imagesS : './photos/products/laptop2.png',
		brand : 'Asus',
		name : 'AA Laptop air',
		oldPrice : '899',
		newPrice : '739',
		static : 'sale'
		},

		{
		imagesF : './photos/products/mobile1.png',
		imagesS : './photos/products/mobile2.png',
		brand : 'Apple',
		name : 'AA Smartphone XS',
		oldPrice : '1,100',
		newPrice : '1,059',
		static : 'sale'
		},

		{
		imagesF : './photos/products/TV1.png',
		imagesS : './photos/products/TV2.jpg',
		brand : 'Samsung',
		name : 'AA Qled TV UltraHD Curved',
		oldPrice : '',
		newPrice : '2,199',
		static : 'out of stock'
		},

		{
		imagesF : './photos/products/watch1.png',
		imagesS : './photos/products/watch2.png',
		brand : 'Samsung',
		name : 'Amazfit SmartWatch',
		oldPrice : '174',
		newPrice : '139',
		static : 'sale'
		},
		{
			imagesF: './photos/products/console1.png',
			imagesS: './photos/products/console2.jpg',
			name: 'Game Console Controller',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: '-20%'
		},
		{
			imagesF: './photos/products/headphone1.png',
			imagesS: './photos/products/headphone2.png',
			name: 'White Solo 2 Wireless',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: 'HOT'
		}
	]


	function showLatest(){
		let products = document.getElementsByClassName('rowProducts')[0];
		let productsHTML = '';

		for(let i = 0; i < 4; i++){
			let product = latestProducts[i];
			productsHTML += `<div class="boxProduct ">
								<div class="product flex-row">
									<img class="imgF" src="${product.imagesF}">
									<img class="imgS" src="${product.imagesS}">
									<div class="infoProduct flex-column">
										<i>${product.brand}</i>
										<b>${product.name}</b>
										<div class="price">
											<span class="old">$${product.oldPrice}.00</span>
											<span class="new">$${product.newPrice}.00</span>
										</div>
									</div>
									<div class="static">${product.static}</div>
									<div class="iconsProduct">
										<i class="fas fa-cart-arrow-down"></i>
										<i class="far fa-heart"></i>
										<i class="fas fa-random"></i>
										<i class="far fa-eye"></i>
									</div>
								</div>	
							</div>`;
		}

		products.innerHTML = productsHTML;
	}

	let bestProducts = [{
			imagesF: './photos/products/mobile1.png',
			imagesS: './photos/products/mobile2.png',
			name: 'AA Smartphone XS',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: '-3%'
		},
		{
			imagesF: './photos/products/console1.png',
			imagesS: './photos/products/console2.jpg',
			name: 'Game Console Controller',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: '-20%'
		},
		{
			imagesF: './photos/products/TV1.png',
			imagesS: './photos/products/TV2.jpg',
			name: 'AD QLed TV UltraHDn Curved',
			oldPrice: '',
			newPrice: '2,199',
			static: 'OUT OF STOCK'
		},
		{
			imagesF: './photos/products/headphone1.png',
			imagesS: './photos/products/headphone2.png',
			name: 'White Solo 2 Wireless',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: 'HOT'
		},
		{
			imagesF: './photos/products/watch1.png',
			imagesS: './photos/products/watch2.png',
			name: 'Amazfit SmartWatch',
			oldPrice: '174',
			newPrice: '139',
			static: '-20%'
		},
		{
			imagesF: './photos/products/note1.jpg',
			imagesS: './photos/products/note2.jpg',
			name: 'Smartphone Note 7',
			oldPrice: '',
			newPrice: '199',
			static: 'HOT'
		}
	]

	let bestSeller = [{
		imagesF : './photos/products/laptop3.png',
		imagesS : './photos/products/laptop2.png',
		brand : 'Asus',
		name : 'AA Laptop air',
		oldPrice : '899',
		newPrice : '739',
		static : 'sale',
		value: 'recomment'
	},
	{
		images: './photos/products/iphone11.png',
		name: 'Iphone 11 Pro Max',
		oldPrice: '1,200',
		newPrice: '1,159',
		static: '-3%',
		brand : 'Apple',
		value: 'hot'
	}
	]
	

	function showBestProducts(){
		let leftProducts = document.getElementsByClassName('leftProducts')[0];
		let rightProducts = document.getElementsByClassName('rightProducts')[0];
		let productsHTML = '';
		let bestSellerHTML = '';
		bestProducts.map( (product) => {
			productsHTML += `<div class="boxProduct ">
								<div class="product flex-row">
									<img class="imgF" src="${product.imagesF}">
									<img class="imgS" src="${product.imagesS}">
									<div class="infoProduct flex-column">
										<b>${product.name}</b>
										<div class="price">
											<span class="old">$${product.oldPrice}.00</span>
											<span class="new">$${product.newPrice}.00</span>
										</div>
									</div>
									<div class="static">${product.static}</div>
									<div class="iconsProduct">
										<i class="fas fa-cart-arrow-down"></i>
										<i class="far fa-heart"></i>
										<i class="fas fa-random"></i>
										<i class="far fa-eye"></i>
									</div>
								</div>	
							</div>`;
		});

		bestSeller.map( (product) => {
			if( product.value === 'recomment'){
				bestSellerHTML += `<div class="boxProduct ">
								<div class="product flex-column">
									<img src="${product.imagesF}">
									<div class="infoProduct flex-column">
										<b>${product.name}</b>
										<div class="price">
											<span class="old">$${product.oldPrice}.00</span>
											<span class="new">$${product.newPrice}.00</span>
										</div>
									</div>
									<div class="static">${product.static}</div>
									<div class="iconsProduct">
										<i class="fas fa-cart-arrow-down"></i>
										<i class="far fa-heart"></i>
										<i class="fas fa-random"></i>
										<i class="far fa-eye"></i>
									</div>
								</div>	
							</div>`;
			}
			
		})

		leftProducts.innerHTML = productsHTML;
		rightProducts.innerHTML = bestSellerHTML;
	};
	
	let fixMenu = document.getElementsByClassName('fixMenu')[0];
	let fixLeft = document.getElementsByClassName('fixLeft')[0];
	let fixMenuRight = document.getElementsByClassName('fixMenuRight')[0];
	let fixRight = document.getElementsByClassName('fixRight')[0];

	let menuBtn = document.getElementsByClassName('menuBtn')[0];
	let menuBtn1 = document.getElementsByClassName('menuBtn')[1];


	function clicked(x){
			x.classList.toggle("change");
			fixMenu.style.opacity = '1';
			fixLeft.style.transform = 'translateX(0px)';
			fixMenu.style.width = '100vw';
			fixLeft.style.width = '40vw';
	}

	function clickedRight(x){
			x.classList.toggle("change");
			fixMenuRight.style.opacity = '1';
			fixRight.style.transform = 'translateX(0)';
			fixMenuRight.style.width = '100vw';
			fixRight.style.width = '40vw';
	}

	fixMenu.addEventListener('click', function(){
		this.style.opacity = '0';
		this.style.width = '1vw';
		fixLeft.style.width = '1vw';
		fixLeft.style.transform = 'translateX(-200px)';
		menuBtn.classList.remove('change');
	})

	fixMenuRight.addEventListener('click', function(){
		this.style.opacity = '0';
		this.style.width = '1vw';
		fixLeft.style.width = '1vw';
		fixRight.style.transform = 'translateX(200px)';
		menuBtn1.classList.remove('change');
	})




	let listMenu = [
		{ name:'Accessories', icon: '<i class="fas fa-braille"></i>' },
		{ name:'Computers', icon: '<i class="fas fa-laptop"></i>'},
		{ name:'Cameras & Photos', icon:'<i class="fas fa-camera"></i>' },
		{ name:'Mobiles & Tables' ,icon:'<i class="fas fa-mobile-alt"></i>'},
		{ name:"Tv's & Audio" ,icon:'<i class="fas fa-tv"></i></i>'},
		{ name:'Consoles & games' ,icon:'<i class="fas fa-gamepad"></i>'},
		{ name:'Gadgets' ,icon:'<i class="fas fa-headphones-alt"></i>'},
		{ name:'Tools & storage' ,icon:'<i class="fas fa-tools"></i>'}, 
		{ name:'Watches' ,icon:'<i class="far fa-clock"></i>'}, 
		{ name:'Headphone' ,icon:'<i class="fas fa-headphones"></i>'},
		{ name:'Speakers' ,icon:'<i class="fas fa-volume-up"></i>'},
		{ name:'Tables' ,icon:'<i class="fas fa-tablet-alt"></i>'},
		{ name:'Laptops' ,icon:'<i class="fas fa-laptop"></i>'}
	];

	function showListMenu(){
		let listMenuHTML = '';
		let containerFix = document.getElementsByClassName('containerFix')[0];
		listMenu.map( (menu) => {
			listMenuHTML += 	`<li class="containerMenu">${menu.icon}<a href="#">${menu.name}</a>`
		})

		containerFix.innerHTML = listMenuHTML;
		
	}


	let navs = ['Home', 'shop', 'about us', 'contact us', 'coming soon', 
	'pages', 'elements'];

	function writeFlexNav(){
		const flexNav = document.getElementById('flexNav');
		let flexNavHTML = '';
		navs.map( (nav) => {

			flexNavHTML += `<li><a href="#">${nav.toUpperCase()}</a></li>`;
		})
		flexNav.innerHTML = flexNavHTML;
	}



	let latesProductsBox = [

		{
			imagesF: './photos/products/note1.jpg',
			imagesS: './photos/products/note2.jpg',
			name: 'Smartphone Note 7',
			oldPrice: '',
			newPrice: '199',
			static: 'HOT',
			brand: 'Xiaomi'
		},

		{
			imagesF: './photos/products/smartWatch1.jpg',
			imagesS: './photos/products/smartWatch2.jpg',
			name: 'Smartwatch Fronier',
			oldPrice: '239',
			newPrice: '219',
			static: 'SALE',
			brand: 'Xiaomi'
		}
	]

	latestProducts.map( (x) => {
		latesProductsBox.unshift(x);
	})

	
	function writeLatesProducts(){ // Write with HTML to display Lates Products on Screen !
		const boxProducts = document.getElementsByClassName('boxProducts')[0];
		const boxProductLeft = document.getElementsByClassName('boxProductLeft')[0];
		let boxProductsHTML = '';
		let leftProductHTML = '';
		latesProductsBox.map( (product) => {
			boxProductsHTML += `<div class="boxProduct ">
								<div class="product flex-column">
									<img class="imgF" src="${product.imagesF}">
									<img class="imgS" src="${product.imagesS}">
									
									<div class="infoProduct flex-column">
										<i>${product.brand}</i>
										<b>${product.name}</b>
										<div class="price">
											<span class="old">$${product.oldPrice}.00</span>
											<span class="new">$${product.newPrice}.00</span>
										</div>
									</div>
									<div class="static">${product.static}</div>
									<div class="iconsProduct">
										<i class="fas fa-cart-arrow-down"></i>
										<i class="far fa-heart"></i>
										<i class="fas fa-random"></i>
										<i class="far fa-eye"></i>
									</div>
								</div>	
							</div>`;
		})

		bestSeller.map( (product) => {
			if(product.value === 'hot'){
				leftProductHTML += `<div class="boxProduct ">
								<div class="product flex-column">
									<img src="${product.images || product.imagesS}">
									<div class="infoProduct flex-column">
										<i>${product.brand}</i>
										<b>${product.name}</b>
										<div class="price">
											<span class="old">$${product.oldPrice}.00</span>
											<span class="new">$${product.newPrice}.00</span>
										</div>
									</div>	
								</div>	
							</div>`;
			}
		})
		boxProductLeft.innerHTML = leftProductHTML;
		boxProducts.innerHTML = boxProductsHTML;
	}

 function pushArr(arr1, arr2){
 	let arr3 = arr2.map( (x) => {
 		arr1.push(x);
 	})
 	return arr3;
 }

 let latestList = [];

 pushArr(latestList, latestProducts);


let trendingList = [
	{

		imagesF : './photos/products/laptop1.png',
		imagesS : './photos/products/laptop2.png',
		brand : 'Asus',
		name : 'AA Laptop air',
		oldPrice : '899',
		newPrice : '739',
		static : 'sale'
		
	},

	{

		imagesF : './photos/products/mobile1.png',
		imagesS : './photos/products/mobile2.png',
		brand : 'Apple',
		name : 'AA Smartphone XS',
		oldPrice : '1,100',
		newPrice : '1,059',
		static : 'sale'
	},

	{

		imagesF : './photos/products/tabletPro1.png',
		imagesS : './photos/products/tabletPro2.png',
		brand : 'Apple',
		name : 'BA Tablet Pro',
		oldPrice : '',
		newPrice : '999',
		static : 'sale'
	},

	{

		imagesF : './photos/products/headphoneSolo3-1.png',
		imagesS : './photos/products/headphoneSolo3-2.png',
		brand : 'Beat',
		name : 'Headphone Solo 3',
		oldPrice : '219',
		newPrice : '189',
		static : 'sale'
	},
	{

		imagesF : './photos/products/headphoneSolo2-1.png',
		imagesS : './photos/products/headphoneSolo2-2.png',
		brand : 'Beat',
		name : 'Headphone solo 2',
		oldPrice : '',
		newPrice : '190',
		static : 'sale'
	},
	{

		imagesF : './photos/products/fronier-1.jpg',
		imagesS : './photos/products/fronier-2.jpg',
		brand : 'Fronier',
		name : 'Smartwatch Fronier',
		oldPrice : '239',
		newPrice : '219',
		static : 'sale'
	},

];


let topSellingList = [


	{

		imagesF : './photos/products/mobile1.png',
		imagesS : './photos/products/mobile2.png',
		brand : 'Apple',
		name : 'AA Smartphone XS',
		oldPrice : '1,100',
		newPrice : '1,059',
		static : 'sale'
	},

	{

		imagesF : './photos/products/HeadphonePods-1.png',
		imagesS : './photos/products/headphonePods-2.jpg',
		brand : 'Apple',
		name : 'Headphone Pods',
		oldPrice : '175',
		newPrice : '149',
		static : 'sale'
		
	},

	{

		imagesF : './photos/products/headphoneSolo2-1.png',
		imagesS : './photos/products/headphoneSolo2-2.png',
		brand : 'Beat',
		name : 'Headphone solo 2',
		oldPrice : '',
		newPrice : '190',
		static : 'sale'
	},

	{

		imagesF : './photos/products/headphone1.png',
		imagesS : './photos/products/headphone2.png',
		brand : 'Beat',
		name : 'White Solo 2 Wireless',
		oldPrice : '',
		newPrice : '129',
		static : 'sale'
	},
	{

		imagesF : './photos/products/smartphoneXR-1.png',
		imagesS : './photos/products/smartphoneXR-2.png',
		brand : 'Apple',
		name : 'AB Smartphone XR',
		oldPrice : '799',
		newPrice : '749',
		static : 'sale'
	},
	{

		imagesF : './photos/products/smartWatch1.jpg',
		imagesS : './photos/products/smartWatch2.jpg',
		brand : 'Fronier',
		name : 'Amazfit SmartWatch',
		oldPrice : '174',
		newPrice : '139',
		static : 'sale'
	},

];


let popularList = [
	
	{
		imagesF : './photos/products/headphone1.png',
		imagesS : './photos/products/headphone2.png',
		brand : 'Beat',
		name : 'White Solo 2 Wireless',
		oldPrice : '',
		newPrice : '129',
		static : 'sale'
	},

	{

		imagesF : './photos/products/swWaterproof-1.png',
		imagesS : './photos/products/swWaterproof-2.png',
		brand : 'Apple',
		name : 'Smart Watches',
		oldPrice : '1,100',
		newPrice : '1,059',
		static : 'sale'
	},

	{

		imagesF : './photos/products/cameraNx201-1.png',
		imagesS : './photos/products/cameraNx201-2.png',
		brand : 'Rec',
		name : 'Camera Nx-201',
		oldPrice : '1,999',
		newPrice : '1,799',
		static : 'sale'
		
	},

	{

		imagesF : './photos/products/laptopG4556-1.png',
		imagesS : './photos/products/laptopG4556-2.png',
		brand : 'MSI',
		name : 'BA Laptop 15.6" Intel G4556',
		oldPrice : '599',
		newPrice : '499',
		static : 'sale'
	},

	{

		imagesF : './photos/products/WWflash-1.jpg',
		imagesS : './photos/products/WWflash-2.jpg',
		brand : 'USB',
		name : 'WW Flash 16GB USB 3.1',
		oldPrice : '',
		newPrice : '100',
		static : 'sale'
	},

	{

		imagesF : './photos/products/consoleEdition-1.png',
		imagesS : './photos/products/consoleEdition-2.png',
		brand : 'Sony',
		name : 'GameConsole Run Edition',
		oldPrice : '',
		newPrice : '299',
		static : 'sale'
	}
	

];


function writeProducts(columnArr, box){
	let boxHTML = '';
	let boxProducts = document.getElementsByClassName(box)[0];
	columnArr.map( (product) => {
		boxHTML += `<div class="boxProduct ">
								<div class="product flex-row">
									<img class="imgF" src="${product.imagesF}">
									<img class="imgS" src="${product.imagesS}">
									
									<div class="infoProduct flex-column">
										<i>${product.brand}</i>
										<b>${product.name}</b>
										<div class="price">
											<span class="old">$${product.oldPrice}.00</span>
											<span class="new">$${product.newPrice}.00</span>
										</div>
									</div>
									<div class="static">${product.static}</div>
									<div class="iconsProduct">
										<i class="fas fa-cart-arrow-down"></i>
										<i class="far fa-heart"></i>
										<i class="fas fa-random"></i>
										<i class="far fa-eye"></i>
									</div>
								</div>	
							</div>`;

		boxProducts.innerHTML = boxHTML;
		
	})
}


function btnClick(){
	let next = document.getElementsByClassName('arrowRight');
	let prev = document.getElementsByClassName('arrowLeft');
	let recommentsBox = document.getElementsByClassName('recommentsBox')

	for(let i = 0; i < next.length; i++){

		let position = 0;

		next[i].addEventListener("click",function(){
			if( position < 1){
				recommentsBox[i].style.transform = "translateX(-100%)";
				position++;
			}
		})

		prev[i].addEventListener("click", function(){
			if(position = 1){
				recommentsBox[i].style.transform = "translateX(0%)";
				position--;
			}
		})
	}
}






containerMenu();
showLatest();
showBestProducts();
showListMenu();
writeFlexNav();
writeLatesProducts();
writeProducts(latestList, "boxLatest");
writeProducts(trendingList,"boxTrending");
writeProducts(topSellingList, "boxTopSelling");
writeProducts(popularList, "boxPopular");
btnClick();




let slidesBox = document.querySelector('.rowProducts');
let slidesProducts = slidesBox.querySelectorAll('.boxProduct');
let counter = 1;
const size = slidesProducts[0].clientWidth;
let slideWidth = slidesBox.style.width = size * ( slidesProducts.length - 1 );
let bodyWidth = document.body.clientWidth;

	if(bodyWidth <= 425){
			setInterval(function(){
			slidesBox.style.transform = `translateX(${-size * counter}px)`;
			console.log(size*counter)
			counter++;

			if( counter === slidesProducts.length){
				counter = 0;
			}
			}, 5000);
		}

/*window.addEventListener("resize",function(event){
	bodyWidth = document.body.clientWidth;
	console.log(bodyWidth)
})*/





/*let x = window.matchMedia("(max-width: 426px)");
myFunc(x);
x.addListener(myFunc);*/

