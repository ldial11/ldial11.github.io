const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');
const imageWidth = gallery.offsetWidth;
let currentIndex = 0;

// Scroll buttons
document.getElementById('scrollLeft').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToImage(currentIndex);
  }
});

document.getElementById('scrollRight').addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    scrollToImage(currentIndex);
  }
});

function scrollToImage(index) {
  const scrollX = gallery.offsetWidth * index;
  gallery.scrollTo({ left: scrollX, behavior: 'smooth' });
}

  
