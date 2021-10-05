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

    // about us

    const aboutUsList= [
        {
            img:'./../img/avatar.png',
            content:'"Good services. i bought a bicycle with a wrong but they accepted free return for me and exchange a new product for me',
            name:'LiNa'
        },
        {
            img:'https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=',
            content:'Great services. i bought a bicycle with a wrong but they accepted free return for me and exchange a new product for me',
            name:'Rose'
        },
        {
            img:'https://img.freepik.com/free-photo/portrait-charming-middle-aged-attractive-woman-with-blonde-hair_273609-48347.jpg?size=626&ext=jpg',
            content:'standed services. i bought a bicycle with a wrong but they accepted free return for me and exchange a new product for me',
            name:'Jenny'
        },


    ];
    let number=0;
    setInterval(()=>{
        if(number>2){
            number=-1;
        }
        data= aboutUsList[++number];
        $('#about-us-id').html(`
            <div class="about-us__title">
                <h3>
                    <a href="">See what they said about us</a>
                </h3>
            </div>
            <div class="about-us__avatar">
                <img src=${data.img} alt="">
            </div>
            <div class="about-us__description">
                <p>${data.content}</p>
            </div>
            <div class="about-us__name">
                <h3>${data.name}</h3>
                <span>Happy clients</span>
                <p class="about-us__control">
                    <span class=${number==0?"about-us__control--active":""}></span>
                    <span class=${number==1?"about-us__control--active":""}></span>
                    <span class=${number==2?"about-us__control--active":""}></span>
                </p>
            </div>
    `)
    }
        
        ,2000
    )

    
});