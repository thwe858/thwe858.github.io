window.onscroll = function() {
    let scrollPosition = window.scrollY; // Get the scroll position
    let image = document.getElementById('resizableImage');

    // Calculate new width based on scroll position
    let newWidth = 80 + scrollPosition / 10; // Adjust this value to change the speed of resizing

    // Set the new width of the image
    image.style.width = newWidth + '%'; 
  };



  // logo slider 
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});