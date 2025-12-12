let get_Menu = document.querySelector(".mobile_menu_section");

$("#menu").toggle(view_Menu, hide_Menu);
function view_Menu(){
	$(":root").css({"overflow-y":"hidden"});
	$(".mobile_menu_section").css({"transform" : "translateY(0%)"});

}

function hide_Menu(){
	$(":root").css({"overflow-y":"visible"});
	$(".mobile_menu_section").css({"transform" : "translateY(-100%)"});
}





let slide_Index = 1;
show_Slides(slide_Index);


function plus_Slides(n){
	show_Slides(slide_Index += n);
}

function show_Slides(n){
	
	let get_Fourth_Section_Flex_Item = document.getElementsByClassName("fourth_section_flex_item");
	let i;
	if(n > get_Fourth_Section_Flex_Item.length){
		slide_Index = 1;
	}
	
	if(n < 1){
		slide_Index = get_Fourth_Section_Flex_Item.length;
	}	
	
	for(i = 0; i < get_Fourth_Section_Flex_Item.length; i++){
		get_Fourth_Section_Flex_Item[i].style.display = "none";
	}
	
	get_Fourth_Section_Flex_Item[slide_Index - 1].style.display = "inline";
	
}

const slide_Quotes = setInterval(plus_Slides, 10000, 1);


//SECOND SECTION ANIMATION
let get_Second_Section_Image = document.querySelector(".second_section_image");
function second_Section_Image_Animation(entries,target){
	entries.forEach( entry => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_second_section_image");
			entry.target.unobserve;
		}
	});
}

second_Section_Image_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}
second_Section_Image_Animation_Intersection_API = new IntersectionObserver(second_Section_Image_Animation, second_Section_Image_Animation_Root);
second_Section_Image_Animation_Intersection_API.observe(get_Second_Section_Image);




//EIGHT SECTION

let get_Convener_Image = document.querySelector(".convener_img");

function convener_Image_Animation(entries, target){
    entries.forEach( entry => {
		if(entry.isIntersecting){
		    entry.target.classList.add("animate_convener_image");
		}
	});
}

let convener_Image_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}

let convener_Image_Animation_Observer_API = new IntersectionObserver(convener_Image_Animation, convener_Image_Animation_Root);
convener_Image_Animation_Observer_API.observe(get_Convener_Image);



//HEADING ANIMATION
let get_Newsletter_Heading = document.querySelectorAll(".newsletter_heading, .seventh_section_heading, .fourth_section_heading, .third_section_heading");
function newsletter_Heading_Animation(entries, target){
	
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_newsletter_heading");
		}
		
	});
	
	
}

let newsletter_Heading_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}

let newsletter_Heading_Animation_Intersection_API = new IntersectionObserver(newsletter_Heading_Animation, newsletter_Heading_Animation_Root);


get_Newsletter_Heading.forEach( entry => {newsletter_Heading_Animation_Intersection_API.observe(entry)});



//TEXT ANIMATION


const ecotourism_Text = document.querySelectorAll(".second_section_left_flex_item, .eight_section_flex_right_item");



function animate_Ecotourism_Text(entries, target){
    entries.forEach(
	    (entry) => {
            if(entry.isIntersecting){
			    entry.target.classList.add("char_animated");
				observer.unobserve(target);
			}

		});
}


const animate_Ecotourism_Text_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.3,
	
}


const observe_Ecotourism_Text = new IntersectionObserver(animate_Ecotourism_Text, animate_Ecotourism_Text_Root);
ecotourism_Text.forEach((target) => observe_Ecotourism_Text.observe(target));






//COUNTER ANIMATION
function animateCounter(element, target, duration) {
  let start = 0;
  let startTime = null;

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (target - start) + start);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Stats section is in view — starting counters...");
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          animateCounter(counter, target, 2000);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById("stats"));
});


