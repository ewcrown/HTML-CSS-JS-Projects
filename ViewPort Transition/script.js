console.warn("Don't increase the size of image more than 600px If you do you've to change the width and height in rect.bottom & rect.right accordionly otherwise you can't see the result")

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Function to handle the scroll event
const handleScroll = () => {
    const imagesToFadeIn = document.querySelectorAll('.gallery-wrap .gallery-item .gallery-img');

    imagesToFadeIn.forEach((image) => {
        if (isElementInViewport(image) && !image.classList.contains('faded-in')) {
            image.style.opacity = 1;
            image.classList.add('faded-in'); // Add a class to mark the image as faded in
        }
    });
};

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', handleScroll);