// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Resume button click handler
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Change this URL to your actual resume page
            window.location.href = '/resume.html';
            
            // Alternative: Open in new tab
            // window.open('/resume.html', '_blank');
        });
    }

    // Smooth scroll functionality for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to navigation links based on scroll position
    function updateActiveNavLink() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Listen for scroll events to update active navigation link
    window.addEventListener('scroll', updateActiveNavLink);
});

/* 
 * Example: Add a new button click handler
 * 
 * 1. First, add the button to your HTML:
 * <button class="cta-button" id="projectsBtn">
 *     <i class="fas fa-code"></i> View Projects
 * </button>
 * 
 * 2. Then add the click handler here:
 * 
 * const projectsBtn = document.getElementById('projectsBtn');
 * if (projectsBtn) {
 *     projectsBtn.addEventListener('click', function() {
 *         window.location.href = '/projects.html';
 *     });
 * }
 */
