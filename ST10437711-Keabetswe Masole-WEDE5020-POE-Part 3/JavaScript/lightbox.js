//Select all images with the class 'lightbox-trigger'.
const lightboxImages = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

//Open the lightbox when any image is clicked.
lightboxImages.forEach(image => {
    image.addEventListener('click', (event) => {
        event.preventDefault();
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
    });
});

//Close the lightbox when the close button is clicked.
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

//Close the lightbox when clicking outside the image.
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});