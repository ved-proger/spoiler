document.addEventListener('DOMContentLoaded', function(){

	let spoilers = document.querySelector(".spoilers");

	if(spoilers){
		let title = spoilers.querySelectorAll(".spoiler__title");

		title.forEach((item, index) =>{
			item.addEventListener("click", function(e){

				if(spoilers.classList.contains("one")){
					title.forEach((el, i) => {
						if(index != i){
							el.classList.remove("_active");
							_slideUp(el.nextElementSibling, 500);
						}
					});
				}

				item.classList.toggle("_active");
				if(item.classList.contains("_active")){
					_slideDown(item.nextElementSibling, 500)
				}else{
					_slideUp(item.nextElementSibling, 500)
				}
			})
		});
	}

});

let _slideUp = (element, duration = 500) =>{
	element.style.transitionProperty = "height, margin, padding";
	element.style.transitionDuration = duration + "ms";
	element.style.height = element.offsetHeight + "px";
	element.offsetHeight;
	element.style.overflow = "hidden";
	element.style.height = 0;
	element.style.paddingTop = 0;
	element.style.paddingBottom = 0;
	element.style.marginTop = 0;
	element.style.marginBottom = 0;

	window.setTimeout(() => {
		element.style.display = 'none';
		element.style.removeProperty('height');
		element.style.removeProperty('padding-top');
		element.style.removeProperty('padding-bottom');
		element.style.removeProperty('margin-top');
		element.style.removeProperty('margin-bottom');
		element.style.removeProperty('overflow');
		element.style.removeProperty('transition-duration');
		element.style.removeProperty('transition-property');
		element.classList.remove("_slide");
	}, duration)
}

let _slideDown = (element, duration = 500) => {

	element.style.removeProperty('display');
	let display = window.getComputedStyle(element).display;

	if(display === "none")
	display = "block";

	element.style.display = display;
	let height = element.offsetHeight;
	element.style.overflow = 'hidden';
	element.style.height = 0;
	element.style.paddingTop = 0;
	element.style.paddingBottom = 0;
	element.style.marginTop = 0;
	element.style.marginBottom = 0;
	element.offsetHeight;
	element.style.transitionProperty = `height, margin, padding` ;
	element.style.transitionDuration = duration + 'ms';
	element.style.height = height + 'px';
	element.style.removeProperty('padding-top');
	element.style.removeProperty('padding-bottom');
	element.style.removeProperty('margin-top');
	element.style.removeProperty('margin-bottom');
	window.setTimeout(()=>{
		element.style.removeProperty('height');
		element.style.removeProperty('overflow');
		element.style.removeProperty('transition-duration');
		element.style.removeProperty('transition-property');
		element.classList.remove("_slide");
	},duration)
	
}

let _slideToggle = (element, duration = 500) =>{
	if(!element.classList.contains("_slide")){
		element.classList.add("_slide");
		let display = window.getComputedStyle(element).display;
		if(display === 'none'){
			return _slideDown(element, duration)
		}else{
			return _slideUp(element, duration)
		}
	}
}