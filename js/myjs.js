
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
		}
	]


	function showLatest(){
		let products = document.getElementsByClassName('rowProducts')[0];
		let productsHTML = '';
		latestProducts.map( (product) => {
			productsHTML += `<div class="boxProduct ">
								<div class="product flex-row">
									<img src="${product.imagesF}">
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
	
		products.innerHTML = productsHTML;
	}

	let bestProducts = [{
			images: './photos/products/mobile1.png',
			name: 'AA Smartphone XS',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: '-3%'
		},
		{
			images: './photos/products/console1.png',
			name: 'Game Console Controller',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: '-20%'
		},
		{
			images: './photos/products/TV1.png',
			name: 'AD QLed TV UltraHDn Curved',
			oldPrice: '',
			newPrice: '2,199',
			static: 'OUT OF STOCK'
		},
		{
			images: './photos/products/headphone1.png',
			name: 'White Solo 2 Wireless',
			oldPrice: '1,100',
			newPrice: '1,059',
			static: 'HOT'
		},
		{
			images: './photos/products/watch1.png',
			name: 'Amazfit SmartWatch',
			oldPrice: '174',
			newPrice: '139',
			static: '-20%'
		},
		{
			images: './photos/products/note1.jpg',
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
		static : 'sale'
	}]
	

	function showBestProducts(){
		let leftProducts = document.getElementsByClassName('leftProducts')[0];
		let rightProducts = document.getElementsByClassName('rightProducts')[0];
		let productsHTML = '';
		let bestSellerHTML = '';
		bestProducts.map( (product) => {
			productsHTML += `<div class="boxProduct ">
								<div class="product flex-row">
									<img src="${product.images}">
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

containerMenu();
showLatest();
showBestProducts();
showListMenu();
writeFlexNav();
