document.addEventListener('DOMContentLoaded', () => {
    // Get the glow toggle checkbox and sidebar links
    const glowToggle = document.getElementById('glow-toggle');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const tables = document.querySelectorAll('.table-container');

    // Load previous setting from localStorage
    const glowSetting = localStorage.getItem('glowSetting') === 'true';
    glowToggle.checked = glowSetting;

    // Function to toggle the glow effect based on the checkbox
    const toggleGlow = () => {
        // Clear any existing glow effects
        tables.forEach(table => {
            table.classList.remove('glow-blue', 'glow-yellow');
        });
    };

    // Trigger glow effect when a sidebar link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const sectionId = link.getAttribute('href').substring(1); // Get the section ID from the href
            const targetTable = document.getElementById(sectionId).querySelector('.table-container');
            const glowClass = glowToggle.checked ? 'glow-yellow' : 'glow-blue';

            // Add the glow effect to the target table
            targetTable.classList.add(glowClass);

            // Remove the glow effect after 2 seconds
            setTimeout(() => {
                targetTable.classList.remove(glowClass);
            }, 2000); // 2 seconds
        });
    });

    // Update localStorage when the checkbox is changed
    glowToggle.addEventListener('change', () => {
        localStorage.setItem('glowSetting', glowToggle.checked);
        toggleGlow(); // Remove any existing glow immediately
    });

    // Apply the initial glow setting
    toggleGlow();
});
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default anchor link behavior
            event.preventDefault();

            // Get the target section from the link's href
            const targetId = link.getAttribute('href').substring(1); // Remove the '#' character
            const targetElement = document.getElementById(targetId);

            // Scroll to the section smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling
                    block: 'start'      // Align to the start of the section
                });
            }
        });
    });
});
