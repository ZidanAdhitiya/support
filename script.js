const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;
const slideDuration = 30000; // Durasi 20 detik

function showSlide(index) {
    slides.forEach((slide, i) => {
        const timerFill = slide.querySelector('.timer-fill');

        if (i === index) {
            slide.classList.add('active');
            slide.style.display = 'flex'; // Make sure the slide is flex
            timerFill.style.width = '100%'; // Set width to 100% saat slide ditampilkan

            // Mulai pengisian
            setTimeout(() => {
                timerFill.style.width = '0'; // Mengisi dari penuh ke kosong
            }, 0);
        } else {
            slide.classList.remove('active');
            slide.style.display = 'none'; // Hide other slides
        }
    });
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length; // Looping kembali ke slide pertama
        showSlide(currentSlide);
    }, slideDuration);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Menangani klik pada tombol
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        stopSlideShow(); // Hentikan slideshow saat tombol ditekan
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
        startSlideShow(); // Mulai lagi slideshow setelah beralih
    });
});

// Mulai slideshow saat pertama kali dimuat
showSlide(0);
startSlideShow();

function resetToHome() {
    currentSlide = 0; // Kembali ke slide pertama
    showSlide(currentSlide); // Tampilkan slide pertama
    startSlideShow(); // Mulai kembali slideshow
}
