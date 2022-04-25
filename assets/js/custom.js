$(document).ready(function(){
    $('.product-main-image').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       autoplay: true,
       autoplaySpeed: 2000,
       asNavFor: '.product-thumb-image'
    });
    $('.product-thumb-image').slick({
       slidesToShow: 6,
       slidesToScroll: 1,
       asNavFor: '.product-main-image',
       dots: false,
       centerMode: false,
       focusOnSelect: true
    });


    $('.hero-banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
          responsive: [
           {
             breakpoint: 700,
             settings: {
               arrows: false,
             }
           }
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
       ]
      });


      $(".cart_btn").click(function(){
        $(".add-to-cart-drawer").addClass("open-drawer");
        $("body").addClass('overflow-hidden');
        $(".modal-overlay").addClass('active-modal-overlay');
      });
      $(".close-icon, .modal-overlay").click(function(){
        $(".add-to-cart-drawer").removeClass("open-drawer");
        $("body").removeClass('overflow-hidden');
        $(".modal-overlay").removeClass('active-modal-overlay');
      });
 });


jQuery(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
                // Increment
                $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
                // Otherwise put a 0 there
                $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
                // Decrement one
                $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
                // Otherwise put a 0 there
                $('input[name='+fieldName+']').val(0);
        }
    });
});