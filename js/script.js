var btn = $('.back-to-top');
var header = $('.header');

$(window).scroll(function() {
    fadeIn();
    if ($(window).scrollTop() > 1000) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }

});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


$('.center').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500000,
    asNavFor: '.center-nav',
    arrows: false,
    fade: true,
});

$('.elliy-series-slide').slick({
   dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ],
 });

$('.elliy-products-slide').slick({
   dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
 });

$('.center-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.center',
   dots: false,
   focusOnSelect: true,
   centerMode: true,
   centerPadding: '0',
  pauseOnHover:false,

 });

$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
   letteranimation();
});

/* tab event*/
$(function() {
  $('.tabs-nav a').click(function() {

    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content div').hide();
    $(currentTab).show();

    return false;
  });
});



var i = 1;

function openNav(x) {
    i++;
    x.classList.toggle("change");
    if (i % 2 != 1) {
        $('#myNav').fadeIn();
        document.getElementById("myNav").style.width = "80%";
        $('body').css('overflow', 'hidden');
    } else {
        $('#myNav').fadeOut();
        document.getElementById("myNav").style.width = "0%";
        $('body').css('overflow', 'auto');
        $('.menu_fadeIn').removeClass('animate__animated animate__fadeInLeft');
    }
}
$("#nav_search_link").on('click', function(event) {
    document.getElementById("myNav").style.width = "0%";
    $(".menu_btn .container").removeClass("change");
    i++;
});

function fadeIn() {
    $('.title-animation-wrapper').each(function() {

        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('title-animated');
        } else {}
    });
    $('.img-animation-wrapper').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('img-animated');
        } else {}
    });

}

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
    tablinks = document.getElementsByClassName("tablink");
}

// document.getElementById("defaultOpen").click();

$(".restaurant_introduction_grid_content .grid_item a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});
$(".header_content li a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("check_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




var j = 0;
    $('.service-sp-arrow p').click(function(){
        if( j == 0 ){
            $('.service-content-nav-sp').css({"height":"46vw", "display":"grid", "margin": "5% 0 -5%"});
            $('.down').hide();
            $('.up').show();
            $('.service-sp-arrow p').css('background-color', '#00466d');
            j = 1;
        }

        else if( j == 1){
            $('.service-content-nav-sp').css({"height":"0px", "display":"none"});
            $('.down').show();
            $('.up').hide();
            $('.service-sp-arrow p').css('background-color', '#006f9b');
            j = 0;    
        }   
    });
//header customize

$( window ).scroll(function() {
    // alert('d');
    console.log($(window).scrollTop());
    if($(window).scrollTop() > 10){
        $('.logo-white').hide();
        $('.logo-black').show();
        $('.header .header_content .navgation ul li a').css('color', 'black');
        $('header').css('background-color', 'white');
    }else{
        $('.logo-white').show();
        $('.logo-black').hide();
        $('.header .header_content .navgation ul li a').css('color', 'white');
        $('header').css('background-color', 'transparent');
    }
});






//header nav
$('.service-nav').hover(function() {
    $('.nav-service').css('display','flex');}, function() {
        $('.nav-service').css('display','none');
});


$('.service-content-nav .consulting').hover(function(){
    $(this).css('background-color','rgba(0,73,104,.7)');
    $(this).find('.service-box').css({'bottom':'0'});
    $(this).find('.service-box h4').addClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-1.png")'); 
    $('.service-content-nav').css('background-size', 'cover'); 
    $('.service-content-nav').addClass('nav-animation'); }, 

    function(){
    $(this).css('background-color','transparent');
    $(this).find('.service-box').css({'bottom': '-10px', 'height': 'auto'});
    $(this).find('.service-box h4').removeClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-1.png")'); 
    $('.service-content-nav').css('background-size', 'cover'); 
    $('.service-content-nav').removeClass('nav-animation');  

});

$('.service-content-nav .ev').hover(function(){
    $(this).css('background-color','rgba(0,73,104,.7)');
    $(this).find('.service-box').css({'bottom':'0'});
    $(this).find('.service-box h4').addClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-2.png")'); 
    $('.service-content-nav').css('background-size', 'cover');
    $('.service-content-nav').addClass('nav-animation'); },

    function(){
    $(this).css('background-color','transparent');
    $(this).find('.service-box').css({'bottom': '-10px', 'height':'auto'});
    $(this).find('.service-box h4').removeClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-1.png") no-repeat');   
    $('.service-content-nav').css('background-size', 'cover'); 
    $('.service-content-nav').removeClass('nav-animation'); 

});

$('.service-content-nav .estate').hover(function(){
    $(this).css('background-color','rgba(0,73,104,.7)');
    $(this).find('.service-box').css({'bottom':'0'});
    $(this).find('.service-box h4').addClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-3.png")'); 
    $('.service-content-nav').css('background-size', 'cover');
    $('.service-content-nav').addClass('nav-animation'); },

    function(){
    $(this).css('background-color','transparent');
    $(this).find('.service-box').css({'bottom': '-10px', 'height': 'auto'});
    $(this).find('.service-box h4').removeClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-1.png")');   
    $('.service-content-nav').css('background-size', 'cover'); 
    $('.service-content-nav').removeClass('nav-animation'); 

});

$('.service-content-nav .solution').hover(function(){
    $(this).css('background-color','rgba(0,73,104,.7)');
    $(this).find('.service-box').css({'bottom':'0'});
    $(this).find('.service-box h4').addClass('h4-animation');
    $('.service-content-nav').css({'animation': 'bk-anim 1s ease-in-out  forwards)', 'background-image': 'url("./wp-content/themes/grant/assets/img/service-4.png")' }); 
    $('.service-content-nav').css('background-size', 'cover');
    $('.service-content-nav').addClass('nav-animation'); },

    function(){
    $(this).css('background-color','transparent');
    $(this).find('.service-box').css({'bottom': '-10px', 'height':'auto'});
    $(this).find('.service-box h4').removeClass('h4-animation');
    $('.service-content-nav').css('background-image', 'url("./wp-content/themes/grant/assets/img/service-1.png") no-repeat');   
    $('.service-content-nav').css('background-size', 'cover'); 
    $('.service-content-nav').removeClass('nav-animation'); 

});




function letteranimation(){
var spanText = function spanText(text) {
  var string = text.innerText;

  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }

  $(".slick-current .banner-text h2.animation1").html(spaned);


}


var spanText1 = function spanText1(text) {
  var string = text.innerText;

  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  $(".slick-current .banner-text h2.animation2").html(spaned);
}





var spanText2 = function spanText2(text) {
  var string = text.innerText;

  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  $(".slick-current .banner-text h3.animation3").html(spaned);
}

var headline = document.querySelector(".slick-current .banner-text h2.animation1");
var headline1 = document.querySelector(".slick-current .banner-text h2.animation2");
var headline2 = document.querySelector(".slick-current .banner-text h3.animation3");


spanText(headline);
spanText1(headline1);
spanText2(headline2);

let animations = document.querySelectorAll('.slick-current .banner-text h2.animation1');

let animations1 = document.querySelectorAll('.slick-current .banner-text h2.animation2');
let animations2 = document.querySelectorAll('.slick-current .banner-text h3.animation3');

animations.forEach(animation => {
  let letters = animation.querySelectorAll(' span');
  letters.forEach((letter, i) => {
    letter.style.animationDelay = (0.5 + i * 0.1) + 's';
  })
});


animations1.forEach(animation => {
  let letters = animation.querySelectorAll(' span');
  letters.forEach((letter, i) => {
    letter.style.animationDelay = (1 + i * 0.1) + 's';
  })
});


animations2.forEach(animation => {
  let letters = animation.querySelectorAll(' span');
  letters.forEach((letter, i) => {
    letter.style.animationDelay = (2 + i * 0.05) + 's';
  })
});

}



$('.center-nav a.slick-slide').hover(function(){
    if(!$(this).hasClass('slick-current')){
        $(this).find('img').css('position', 'absolute');
        $(this).find('.banner-text-nav').show();
        $(this).find('.banner-text-nav').addClass('navanim');
    }
});
$('.center-nav a.slick-slide').mouseleave(function(){
    if(!$(this).hasClass('slick-current')){
        $(this).find('img').show();
        $(this).find('.banner-text-nav').hide();
        $(this).removeClass('navanim');
    }
    
});
$('.slick-current .banner-text').show();

letteranimation();


$('.center').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.banner-text').hide();
    $('.slick-current .banner-text').show();
   letteranimation();

});

//service hover event

var aheight = $('.service-content').height() - 50;

$('.service-content .consulting').hover(function(){
    $(this).find('.service-box').css({'bottom': '0px' , 'background-color': 'rgba(0,73,104,.7)', 'height':aheight});
    $(this).find('.service-box h5').show();
    $(this).find('.service-box h6').show();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-1.png")'); 
    $('.service-content').css('background-size', 'cover'); 
    $('.service-content').addClass('bk-animation'); },

    function(){
    $(this).find('.service-box').css({'bottom': '-10px' , 'background-color': 'transparent', 'height': 'auto'});
    $(this).find('.service-box h5').hide();
    $(this).find('.service-box h6').hide();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-1.png")'); 
    $('.service-content').css('background-size', 'cover'); 
    $('.service-content').removeClass('bk-animation');    
});

$('.service-content .ev').hover(function(){
    $(this).find('.service-box').css({'bottom': '0px' , 'background-color': 'rgba(0,73,104,.7)', 'height':aheight});
    $(this).find('.service-box h5').show();
    $(this).find('.service-box h6').show();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-2.png")'); 
    $('.service-content').css('background-size', 'cover');
    $('.service-content').addClass('bk-animation');},

    function(){
    $(this).find('.service-box').css({'bottom': '-10px' , 'background-color': 'transparent', 'height':'auto'});
    $(this).find('.service-box h5').hide();
    $(this).find('.service-box h6').hide();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-1.png") no-repeat');   
    $('.service-content').css('background-size', 'cover'); 
    $('.service-content').removeClass('bk-animation'); 
});
$('.service-content .estate').hover(function(){
    $(this).find('.service-box').css({'bottom': '0px' , 'background-color': 'rgba(0,73,104,.7)', 'height':aheight});
    $(this).find('.service-box h5').show();
    $(this).find('.service-box h6').show();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-3.png")'); 
    $('.service-content').css('background-size', 'cover');
    $('.service-content').addClass('bk-animation'); },

    function(){
    $(this).find('.service-box').css({'bottom': '-10px' , 'background-color': 'transparent', 'height': 'auto'});
    $(this).find('.service-box h5').hide();
    $(this).find('.service-box h6').hide();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-1.png") no-repeat');   
    $('.service-content').css('background-size', 'cover'); 
    $('.service-content').removeClass('bk-animation'); 
});

$('.service-content .solution').hover(function(){
    $(this).find('.service-box').css({'bottom': '0px' , 'background-color': 'rgba(0,73,104,.7)', 'height':aheight});
    $(this).find('.service-box h5').show();
    $(this).find('.service-box h6').show();
    $('.service-content').css({'animation': 'bk-anim 1s ease-in-out  forwards)', 'background': 'url("./wp-content/themes/grant/assets/img/service-4.png")' }); 
    $('.service-content').css('background-size', 'cover');
    $('.service-content').addClass('bk-animation'); },

    function(){
    $(this).find('.service-box').css({'bottom': '-10px' , 'background-color': 'transparent', 'height':'auto'});
    $(this).find('.service-box h5').hide();
    $(this).find('.service-box h6').hide();
    $('.service-content').css('background', 'url("./wp-content/themes/grant/assets/img/service-1.png") no-repeat');   
    $('.service-content').css('background-size', 'cover'); 
    $('.service-content').removeClass('bk-animation'); 
});






//new service animate
var w = window.innerWidth;


$('.cb_service_image_list .active').css('opacity', '1');
var a = 0;

$('.item').hover(function(r){

var active_id = $(this).attr('data-service-id');
if($('#'+active_id).css('opacity') == 0 ){
    $('#'+active_id).addClass('active');
} 

$(this).addClass('active');

$(this).find('.content').css('bottom', '0');
$('.cb_service_item_list .desc').css('opacity', '1');
$('.cb_service_item_list .bottom_title').css('opacity', '1');
$(this).css('background-color', 'rgba(0,73,104,.7)');
if($('#'+active_id).css('opacity') == 0 ){
$('.cb_service_image_list .active').css('opacity', '1');
$('.cb_service_image_list .image').not('.active').css('opacity', '0');} 
a = 1;


}, function(){


$(this).removeClass('active');
if(w > 1400){
    $(this).find('.content').css('bottom', '-290.953px');
} else{
    $(this).find('.content').css('bottom', '-23vw');
}

$('.cb_service_item_list .desc').css('opacity', '0');
$('.cb_service_item_list .bottom_title').css('opacity', '0');
$(this).css('background-color', 'transparent');
var active_id = $(this).attr('data-service-id');

$('#'+active_id).removeClass('active');
if(a==1){
    $('#'+active_id).css('opacity', '1');
}else{
$('#'+active_id).css('opacity', '0');

}

});









