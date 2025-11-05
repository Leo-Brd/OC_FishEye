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

    // Focus on the first field when modal opens
    const firstInput = modal.querySelector('input, textarea, button');
    if (firstInput) firstInput.focus();
    // Store the currently focused element before opening
    window._lastFocused = document.activeElement;

    // Close the modal with Escape
    function handleKey(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
        }
        document.addEventListener('keydown', handleKey);
        modal._escListener = handleKey;
    
        // Make the close button accessible via keyboard
        const closeBtn = modal.querySelector('header img');
        if (closeBtn && !closeBtn.dataset.listenerAdded) {
            closeBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeModal();
                }
            });
            closeBtn.dataset.listenerAdded = 'true';
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
    // Restore focus to the previously focused element
    if (window._lastFocused) {
        window._lastFocused.focus();
        window._lastFocused = null;
    }
    // Remove Escape listener
        if (modal._escListener) {
            document.removeEventListener('keydown', modal._escListener);
            modal._escListener = null;
        }
}
