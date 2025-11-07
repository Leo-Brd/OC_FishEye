// Get photographer ID from URL
function getPhotographerId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Fetch photographer data from JSON
async function getData() {
    const response = await fetch('data/photographers.json');
    if (!response.ok) throw new Error('Erreur chargement JSON');
    return await response.json();
}

// Store medias and photographerId globally for sorting
let globalMedias = [];
let globalPhotographer = null;

// Display photographer info and media
async function displayPhotographer() {
    const id = getPhotographerId();
    const data = await getData();
    const photographer = data.photographers.find(p => p.id == id);
    const medias = data.media.filter(m => m.photographerId == id);
    if (photographer) {
        globalMedias = medias;
        globalPhotographer = photographer;
        fillPhotographerHeader(photographer);
        fillPhotographInfoBar(400, photographer.price);
        setDefaultSort();
        setupSortMenuIntegration();
    } else {
        console.log('Photographe non trouvé');
    }
}

// Set default sort to popularity and update menu UI
function setDefaultSort() {
    if (!globalMedias || !globalPhotographer) return;
    const sorted = sortMedias(globalMedias, 'popularity');
    fillPhotographGallery(sorted, globalPhotographer.id);
    setupLikes();
}

// Integrate sort menu with gallery re-render
function setupSortMenuIntegration() {
    const customSelect = document.getElementById('custom-sort');
    if (!customSelect) return;
    const options = customSelect.querySelectorAll('.custom-select-option');
    options.forEach(opt => {
        opt.addEventListener('mousedown', function() {
            const criterion = opt.getAttribute('data-value');
            if (!criterion || !globalPhotographer) return;
            
            // We sort the medias and re-fill the gallery
            const sorted = sortMedias(globalMedias, criterion);
            fillPhotographGallery(sorted, globalPhotographer.id);
            setupLikes();
        });
    });
}

displayPhotographer();