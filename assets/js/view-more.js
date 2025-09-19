
document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const hiddenCards = document.querySelectorAll('.hidden-card');
    let visibleCount = 0;
    const batchSize = 3;

    viewMoreBtn.addEventListener('click', function () {
        for (let i = visibleCount; i < visibleCount + batchSize; i++) {
            if (hiddenCards[i]) {
                hiddenCards[i].style.display = 'block';
            }
        }

        visibleCount += batchSize;

        if (visibleCount >= hiddenCards.length) {
            viewMoreBtn.style.display = 'none';
        }
    });
});
