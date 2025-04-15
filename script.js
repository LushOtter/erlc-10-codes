document.addEventListener('DOMContentLoaded', () => {
    const glowToggle = document.getElementById('glow-toggle');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const tables = document.querySelectorAll('.table-container');

    const glowSetting = localStorage.getItem('glowSetting') === 'true';
    glowToggle.checked = glowSetting;

    const toggleGlow = () => {
        tables.forEach(table => {
            table.classList.remove('glow-blue', 'glow-yellow');
        });
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const sectionId = link.getAttribute('href').substring(1);
            const targetTable = document.getElementById(sectionId).querySelector('.table-container');
            const glowClass = glowToggle.checked ? 'glow-yellow' : 'glow-blue';

            targetTable.classList.add(glowClass);

            setTimeout(() => {
                targetTable.classList.remove(glowClass);
            }, 2000);
        });
    });

    glowToggle.addEventListener('change', () => {
        localStorage.setItem('glowSetting', glowToggle.checked);
        toggleGlow();
    });

    toggleGlow();
});
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});