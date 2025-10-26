async function getPhotographers() {
    // We fetch the photographers data from the JSON file
    const response = await fetch('data/photographers.json');
    if (!response.ok) {
        throw new Error('Error loading photographers');
    }
    const data = await response.json();
    console.log(data);
    // We return the photographers array from the JSON
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
    // We fetch the photographers data
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

