document.addEventListener('DOMContentLoaded', (event) => {
    // Review Carousel
    const carousel = document.querySelector('.review-carousel');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const reviews = carousel.querySelectorAll('.review');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });

    showReview(currentIndex);

    // Form Validation
    const form = document.querySelector('#contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form validation logic here
        
        // If form is valid, you can submit it
        // form.submit();
    });
});
