// Manage a custom dropdown sort menu
function setupCustomSortMenu() {
    const customSelect = document.getElementById('custom-sort');
    if (!customSelect) return;
    const options = customSelect.querySelector('.custom-select-options');
    const selected = customSelect.querySelector('.custom-select-selected');
    const optionElements = Array.from(options.querySelectorAll('.custom-select-option'));

    // Open/close menu functions
    function openMenu() {
        customSelect.setAttribute('aria-expanded', 'true');
        options.style.display = 'block';
        optionElements.forEach(opt => {
            opt.style.display = (opt.textContent.trim() === selected.textContent.trim()) ? 'none' : '';
        });
        // Add aria-activedescendant to the first visible option
        const firstVisible = optionElements.find(opt => opt.style.display !== 'none');
        if (firstVisible) {
            options.setAttribute('aria-activedescendant', firstVisible.id);
        }
    }

    function closeMenu() {
        options.style.display = 'none';
        customSelect.setAttribute('aria-expanded', 'false');
        optionElements.forEach(opt => opt.style.display = '');
    }

    // Toggle menu on click or keydown
    customSelect.addEventListener('click', () => {
        customSelect.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });

    // Keyboard accessibility
    customSelect.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            customSelect.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
        } else if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Handle option selection
    optionElements.forEach(opt => {
        opt.addEventListener('mousedown', (e) => {
            e.preventDefault();
            selected.textContent = opt.textContent;
            optionElements.forEach(o => {
                o.classList.remove('selected');
                o.setAttribute('aria-selected', 'false');
            });
            opt.classList.add('selected');
            opt.setAttribute('aria-selected', 'true');
            options.setAttribute('aria-activedescendant', opt.id);
            closeMenu();
        });
    });

    // Close menu if clicking outside
    document.addEventListener('click', e => {
        if (!customSelect.contains(e.target)) closeMenu();
    });
}

// Initialize the custom sort menu when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', setupCustomSortMenu);