$(document).ready(function () {

    // nav menu
    $('#menu-id').click(function (e) { 
        $('.mobile-nav').removeClass('close')
    });

    $('#close-menu').click(function (e) { 
        $('.mobile-nav').addClass('close')
    });


    // nav products
    $('.product-item-nav').click(function (e) { 
        $(this).toggleClass('product-item-nav-active');
        $(this).siblings().removeClass('product-item-nav-active');
        

        for(let i=1; i<8;i++){
            k= Math.floor(Math.random() * 10) + 1
            $(`#product${k}`).insertBefore(  $(`#product${k}`).prev())
        }
        
    });
    
});