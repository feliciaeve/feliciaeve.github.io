// Contoh efek atau interaksi JavaScript
// Misalnya, animasi saat menggulir ke bagian tertentu dari halaman.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
