function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', name);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        // Ville, pays
        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.className = 'photographer-location';

        // Tagline
        const taglineElem = document.createElement('p');
        taglineElem.textContent = tagline;
        taglineElem.className = 'photographer-tagline';

        // Prix par jour
        const priceElem = document.createElement('p');
        priceElem.textContent = `${price}€/jour`;
        priceElem.className = 'photographer-price';

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineElem);
        article.appendChild(priceElem);

        return article;
    }
    return { name, picture, getUserCardDOM };
}