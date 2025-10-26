function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        // Create link to photographer's page
        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${id}`);
        link.setAttribute('class', 'photographer-link');
        link.setAttribute('aria-label', name);

        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', name);
        link.appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = name;
        link.appendChild(h2);

        // Add link to card
        article.appendChild(link);

        // City, country
        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.className = 'photographer-location';
        article.appendChild(location);

        // Tagline
        const taglineElem = document.createElement('p');
        taglineElem.textContent = tagline;
        taglineElem.className = 'photographer-tagline';
        article.appendChild(taglineElem);

        // Price per day
        const priceElem = document.createElement('p');
        priceElem.textContent = `${price}€/jour`;
        priceElem.className = 'photographer-price';
        article.appendChild(priceElem);

        return article;
    }
    return { name, picture, getUserCardDOM };
}