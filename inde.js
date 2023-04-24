     <script>
          // Change this id to your bootstrap carousel id 
const myCarousel = document.getElementById('carouselExampleIndicators');

myCarousel.addEventListener('slide.bs.carousel', event => {
  // Prevent the default carousel behavior
//   event.preventDefault();

  // Determine the current slide index
  const currentSlideIndex = Array.from(myCarousel.querySelectorAll('.carousel-item')).indexOf(event.relatedTarget);


  // Perform custom actions based on the current slide index
  if (currentSlideIndex ===  2) {
    window.location.href = history.back();
  } 
});
      </script>
