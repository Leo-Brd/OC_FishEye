async function getPhotographers() {
    // On récupère les données depuis le fichier JSON
    const response = await fetch('data/photographers.json');
    if (!response.ok) {
        throw new Error('Erreur lors du chargement des photographes');
    }
    const data = await response.json();
    console.log(data);
    // On retourne le tableau photographers du JSON
    return { photographers: data.photographers };
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

