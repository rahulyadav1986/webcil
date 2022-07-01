
$('.mobile-menu').slicknav({
    label: '',
    prependTo: 'header .bottom .container',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#banner-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
	dots:true,
    autoplay:true,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery('#chemical-slider').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],	
	dots:true,
    autoplay:true,	
    responsive:{
        0:{
            items:1,
            dots: false,
            nav: true
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


jQuery('.tab-slider').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
	dots:true,
    autoplay:true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],	
    responsive:{
        0:{
            items:1,
            dots: false,
            nav: true
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



jQuery(document).ready(function(){

    /*first group*/
    jQuery('.cus-btn').click(function(){
        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.button_active').removeClass('button_active')
        jQuery('.carousel_active').removeClass('carousel_active')
        jQuery(this).addClass('button_active')
        jQuery(click_id).click()
    })

    jQuery('.box').click(function(){

        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.carousel_active').removeClass('carousel_active')
        jQuery(click_id).click()

        jQuery('.tabs').find('.button_active').removeClass('button_active')
        jQuery(this).addClass('button_active')
        var data_id = jQuery(this).attr('id')
        jQuery('.'+data_id).addClass('carousel_active')
    })
     /*first group*/

     /*second group*/
    jQuery('.cus-btn2').click(function(){
        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.button_active2').removeClass('button_active2')
        jQuery('.des_active').removeClass('des_active')
        jQuery(this).addClass('button_active2')
        jQuery(click_id).click()
    })

    jQuery('.box2').click(function(){

        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.des_active').removeClass('des_active')
        jQuery(click_id).click()

        jQuery('.one').find('.button_active2').removeClass('button_active2')
        jQuery(this).addClass('button_active2')
        var data_id = jQuery(this).attr('id')
        jQuery('.'+data_id).addClass('des_active')
    })
    /*second group*/

    /*third group*/
    jQuery('.cus-btn3').click(function(){
        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.button_active3').removeClass('button_active3')
        jQuery('.des_active2').removeClass('des_active2')
        jQuery(this).addClass('button_active3')
        jQuery(click_id).click()
    })

    jQuery('.box3').click(function(){

        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.des_active2').removeClass('des_active2')
        jQuery(click_id).click()

        jQuery('.two').find('.button_active3').removeClass('button_active3')
        jQuery(this).addClass('button_active3')
        var data_id = jQuery(this).attr('id')
        jQuery('.'+data_id).addClass('des_active2')
    })
    /*third group*/


    /*fourth group*/
    jQuery('.cus-btn4').click(function(){
        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.button_active4').removeClass('button_active4')
        jQuery('.des_active3').removeClass('des_active3')
        jQuery(this).addClass('button_active4')
        jQuery(click_id).click()
    })

    jQuery('.box4').click(function(){
        var data_id = jQuery(this).attr('data-id')
        var data_index = jQuery(this).attr('data-index')
        var click_id = '#'+data_id+'-'+data_index
        jQuery('.des_active3').removeClass('des_active3')
        jQuery(click_id).click()
        
        jQuery('.three').find('.button_active4').removeClass('button_active4')
        jQuery(this).addClass('button_active4')
        var data_id = jQuery(this).attr('id')
        jQuery('.'+data_id).addClass('des_active3')
    })
    /*fourth group*/
    

})











  


