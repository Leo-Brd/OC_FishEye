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

// Display photographer info and media
async function displayPhotographer() {
    const id = getPhotographerId();
    const data = await getData();
    const photographer = data.photographers.find(p => p.id == id);
    const medias = data.media.filter(m => m.photographerId == id);
    if (photographer) {
        fillPhotographerHeader(photographer);
        fillPhotographInfoBar(400, photographer.price);
        fillPhotographGallery(medias, photographer.id);
        setupLikes();
    } else {
        console.log('Photographe non trouvé');
    }
}

displayPhotographer();