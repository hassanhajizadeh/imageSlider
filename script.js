const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
    loop:true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach((slide)=>{
    slide.style.background = `url(images/img${slide.id.split('-')[1]}.jpg) center center / cover no-repeat`;
});

