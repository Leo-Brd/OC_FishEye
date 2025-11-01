// Manage a custom dropdown sort menu
function setupCustomSortMenu() {
    const customSelect = document.getElementById('custom-sort');
    if (!customSelect) return;
    const options = customSelect.querySelector('.custom-select-options');
    const arrow = customSelect.querySelector('.custom-select-arrow');
    const selected = customSelect.querySelector('.custom-select-selected');

    // Open/close menu functions
    function openMenu() {
        customSelect.setAttribute('aria-expanded', 'true');
        options.style.display = 'block';

        const value = selected.textContent.trim();
        options.querySelectorAll('.custom-select-option').forEach(opt => {
            if (opt.textContent.trim() === value) {
                opt.style.display = 'none';
            } else {
                opt.style.display = '';
            }
        });
    }
    function closeMenu() {
        customSelect.setAttribute('aria-expanded', 'false');
        options.style.display = 'none';
        // Show all options again
        options.querySelectorAll('.custom-select-option').forEach(opt => {
            opt.style.display = '';
        });
    }

    // Toggle menu on click or keydown
    customSelect.addEventListener('click', function(e) {
        const expanded = customSelect.getAttribute('aria-expanded') === 'true';
        if (expanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Keyboard accessibility
    customSelect.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const expanded = customSelect.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                closeMenu();
            } else {
                openMenu();
            }
        } else if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!customSelect.contains(e.target)) {
            closeMenu();
        }
    });

    // Option selection
    options.querySelectorAll('.custom-select-option').forEach(opt => {
        opt.addEventListener('click', function() {
            selected.textContent = opt.textContent;
            options.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            closeMenu();
        });
    });
}

// Initialize the custom sort menu when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', setupCustomSortMenu);