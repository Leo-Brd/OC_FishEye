function fillPhotographerHeader(photographer) {
    const header = document.querySelector('.photograph-header');
    if (!header) return;
    // On garde le bouton existant
    const contactBtn = header.querySelector('.contact_button');
    header.innerHTML = '';

    // Colonne gauche : infos
    const left = document.createElement('div');
    left.className = 'photograph-header-left';

    const nameElem = document.createElement('h2');
    nameElem.textContent = photographer.name;
    left.appendChild(nameElem);

    const locationElem = document.createElement('p');
    locationElem.className = 'photographer-header-location';
    locationElem.textContent = `${photographer.city}, ${photographer.country}`;
    left.appendChild(locationElem);

    const taglineElem = document.createElement('p');
    taglineElem.className = 'photographer-header-tagline';
    taglineElem.textContent = photographer.tagline;
    left.appendChild(taglineElem);

    // Colonne droite : photo
    const right = document.createElement('div');
    right.className = 'photograph-header-right';
    const img = document.createElement('img');
    img.src = `assets/photographers/${photographer.portrait}`;
    img.alt = photographer.name;
    img.className = 'photograph-header-img';
    right.appendChild(img);

    // Ajout dans le header (gauche, bouton, droite)
    header.appendChild(left);
    if (contactBtn) header.appendChild(contactBtn);
    header.appendChild(right);
}