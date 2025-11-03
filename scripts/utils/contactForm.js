function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

    // Get photographer name from header
    let photographerName = "";
    const nameElem = document.getElementById("photographer-name");
    if (nameElem) {
        photographerName = nameElem.textContent;
    }

    // Display the name in the modal
    const modalNameElem = document.getElementById("modal-photographer-name");
    if (modalNameElem) {
        modalNameElem.textContent = photographerName;
    }

    // Add form submit listener only once
    const form = modal.querySelector('form');
    if (form && !form.dataset.listenerAdded) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const prenom = form.elements['prenom'].value;
            const nom = form.elements['nom'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;
            console.log({ prenom, nom, email, message });
            form.reset();
            closeModal();
        });
        form.dataset.listenerAdded = 'true';
    }
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
