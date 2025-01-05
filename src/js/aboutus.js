// Event listener për klikimin e ikonave
document.querySelectorAll('.contact-methods a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`You clicked on: ${link.href}`);
    });
});

// Opsionale: shto një mesazh për konfirmim kur përdoruesi klikon mbi email ose adresë
document.querySelector('a[href^="mailto:"]').addEventListener('click', () => {
    alert('Opening your email client...');
});

document.querySelector('a[href^="https://maps.google"]').addEventListener('click', () => {
    alert('Redirecting to Google Maps...');
});
