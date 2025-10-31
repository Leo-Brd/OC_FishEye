
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
    locationElem.textContent = `${photographer.city}, ${photographer.country}`;
    locationElem.setAttribute('aria-label', `Localisation : ${photographer.city}, ${photographer.country}`);
    left.appendChild(locationElem);

    const taglineElem = document.createElement('p');
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