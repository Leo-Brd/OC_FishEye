// Likes management for each media and the info bar

function setupLikes() {
    const likeButtons = document.querySelectorAll('.media-likes img');
    const likesElems = document.querySelectorAll('.media-likes');
    const infoBarLikes = document.getElementById('photograph-likes');

    // Get initial total likes
    let totalLikes = 0;
    likesElems.forEach(el => {
        const n = parseInt(el.textContent, 10);
        if (!isNaN(n)) totalLikes += n;
    });

    // Update info bar likes
    function updateInfoBar() {
        if (infoBarLikes) {
            infoBarLikes.innerHTML = `${totalLikes} <img src="assets/icons/dark_heart.svg" alt="likes icon" aria-hidden="true">`;
        }
    }

    // Setup click listeners for like buttons
    likeButtons.forEach((btn, i) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = btn.closest('.media-likes');
            let countSpan = parent.childNodes[0];
            let count = parseInt(countSpan.textContent, 10);
            if (isNaN(count)) count = 0;
            count++;
            countSpan.textContent = count;
            totalLikes++;
            updateInfoBar();
            btn.setAttribute('aria-pressed', 'true');
            btn.style.filter = 'grayscale(1)';
            btn.style.pointerEvents = 'none';
        });
    });
    updateInfoBar();
}
