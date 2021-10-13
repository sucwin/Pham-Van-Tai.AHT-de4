$(document).ready(function () {

   let flag=0;
    // nav menu
    $('#menu-id').click(function (e) { 
        $('.mobile-nav').removeClass('close')
        setTimeout(()=>{
            flag =1
        },1000)
       
        
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
    
    $(document).click(function (e)
    {
        var container = $(".mobile-nav");
        if(flag==1)
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $('.mobile-nav').addClass('close')
            flag=0;
        }
    });

});