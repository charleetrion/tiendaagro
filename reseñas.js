// reviews.js

// Función para cargar reseñas desde localStorage
function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    let reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    reviews.forEach(review => {
        let reviewElement = document.createElement('div');
        reviewElement.textContent = `Reseña: ${review.text}`; // Aquí deberías incluir más detalles sobre la reseña
        reviewList.appendChild(reviewElement);
    });
}

// Función para enviar una reseña
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let reviewText = document.getElementById('review-text').value;
    if (reviewText.trim() === '') {
        alert("Por favor, escribe una reseña.");
        return;
    }
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ text: reviewText });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    document.getElementById('review-text').value = ''; // Limpiar el campo de reseña
    loadReviews();
});

// Cargar las reseñas cuando la página se carga
window.onload = loadReviews;
