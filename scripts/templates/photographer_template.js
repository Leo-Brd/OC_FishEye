
// FILL THE PHOTOGRAPHER HEADER
function fillPhotographerHeader(photographer) {
    const header = document.querySelector('.photograph-header');
    if (!header) return;

    // We keep the contact button if it exists
    const contactBtn = header.querySelector('.contact_button');
    header.innerHTML = '';

    // Left column: info
    const left = document.createElement('div');
    left.className = 'photograph-header-left';
    left.setAttribute('role', 'region');
    left.setAttribute('aria-label', `Informations sur le photographe ${photographer.name}`);

    const nameElem = document.createElement('h1');
    nameElem.textContent = photographer.name;
    nameElem.setAttribute('id', 'photographer-name');
    left.appendChild(nameElem);

    const locationElem = document.createElement('p');
    locationElem.className = 'photographer-header-location';
    locationElem.textContent = `${photographer.city}, ${photographer.country}`;
    locationElem.setAttribute('aria-label', `Localisation : ${photographer.city}, ${photographer.country}`);
    left.appendChild(locationElem);

    const taglineElem = document.createElement('p');
    taglineElem.className = 'photographer-header-tagline';
    taglineElem.textContent = photographer.tagline;
    taglineElem.setAttribute('aria-label', `Slogan : ${photographer.tagline}`);
    left.appendChild(taglineElem);

    // Right column: photo
    const right = document.createElement('div');
    right.className = 'photograph-header-right';
    right.setAttribute('role', 'region');
    right.setAttribute('aria-label', `Portrait de ${photographer.name}`);
    const img = document.createElement('img');
    img.src = `assets/photographers/${photographer.portrait}`;
    img.alt = photographer.name || '';
    right.appendChild(img);

    // Add to header (left, button, right)
    header.setAttribute('role', 'region');
    header.setAttribute('aria-labelledby', 'photographer-name');
    header.appendChild(left);
    if (contactBtn) header.appendChild(contactBtn);
    header.appendChild(right);
}

// FILL THE PHOTOGRAPHER INFO BAR
function fillPhotographInfoBar(likes, price) {
    const likesElem = document.getElementById('photograph-likes');
    const priceElem = document.getElementById('photograph-price');
    if (likesElem) {
        likesElem.innerHTML = `${likes} <img src=\"assets/icons/dark_heart.svg\" alt=\"likes icon\" aria-hidden=\"true\">`;
    }
    if (priceElem) priceElem.innerHTML = `${price}€ / jour`;
}

// FILL THE PHOTOGRAPHER GALLERY
function fillPhotographGallery(medias, photographerId) {
    const gallerySection = document.createElement('section');
    gallerySection.className = 'photograph-gallery';
    gallerySection.setAttribute('aria-label', 'Galerie photos du photographe');

    medias.forEach(m => {
        const card = media(m, photographerId);
        gallerySection.appendChild(card);
    });

    // Insert the gallery after the info bar
    const main = document.getElementById('main');
    const infoBar = document.getElementById('photograph-info-bar');
    if (main && infoBar) {
        main.insertBefore(gallerySection, infoBar.nextSibling);
    }
}


// Factory function for media cards
function media(m, photographerId) {
    const card = document.createElement('article');
    card.className = 'media-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${m.title}, ${m.likes} likes`);

    let mediaElem;
    let mediaUrl = '';
    if (m.image) {
        mediaElem = document.createElement('img');
        mediaElem.src = `assets/images/${photographerId}/${m.image}`;
        mediaElem.alt = m.title;
        mediaElem.className = 'media-img';
        mediaUrl = mediaElem.src;
    } else if (m.video) {
        mediaElem = document.createElement('video');
        mediaElem.src = `assets/images/${m.video}`;
        mediaElem.setAttribute('controls', '');
        mediaElem.className = 'media-video';
        mediaElem.setAttribute('aria-label', m.title);
        mediaUrl = mediaElem.src;
    }
    if (mediaElem) {
        const link = document.createElement('a');
        link.href = mediaUrl;
        link.setAttribute('aria-label', `Voir ${m.title}`);
        link.appendChild(mediaElem);
        card.appendChild(link);
    }

    const info = document.createElement('div');
    info.className = 'media-info';

    const title = document.createElement('h3');
    title.className = 'media-title';
    title.textContent = m.title;
    info.appendChild(title);

    const likes = document.createElement('span');
    likes.className = 'media-likes';
    likes.innerHTML = `${m.likes} <img src="assets/icons/brown_heart.svg" alt="likes" aria-hidden="true">`;
    info.appendChild(likes);

    card.appendChild(info);
    return card;
}