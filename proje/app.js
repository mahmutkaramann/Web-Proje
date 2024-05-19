document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carouselList = document.querySelector('.carousel .list');
    const items = carouselList.children;
    let currentIndex = 0;

    function updateSlider(index) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }
        items[index].classList.add('active');
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider(currentIndex);
    }

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Initial state
    updateSlider(currentIndex);
});
