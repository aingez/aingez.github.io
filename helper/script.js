const navLinks = [
    { name: 'Home', path: 'index.html' },
    { name: 'Projects', path: 'projects.html' },
    { name: 'About', path: 'about.html' },
    { name: 'Contact', path: 'contact.html' }
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site loaded');
    injectNavbar();
});

function injectNavbar() {
    const container = document.querySelector('.container');
    if (!container) return;

    // Get current page filename to set active state
    // fallback to index.html if pathname is just / or /repo/
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Create the sidebar element
    const sidebar = document.createElement('header');
    sidebar.className = 'sidebar';

    // Generate links HTML
    const linksHtml = navLinks.map(link => {
        const isActive = currentPath === link.path;
        return `<li><a href="${link.path}" class="${isActive ? 'active' : ''}">${link.name}</a></li>`;
    }).join('');

    sidebar.innerHTML = `
        <div class="top-section">
            <div class="site-title">
                <a href="index.html">AING</a>
            </div>
            <nav>
                <ul class="nav-links">
                    ${linksHtml}
                </ul>
            </nav>
        </div>
        <div class="sidebar-footer">
            &copy; 2026
        </div>
    `;

    // Insert as the first child of container
    container.insertBefore(sidebar, container.firstChild);
}
