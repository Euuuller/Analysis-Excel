/**
 * Navigation Module
 * Handles page navigation and active state management
 */

export class Navigation {
    constructor() {
        this.navItems = document.querySelectorAll('.nav-item');
        this.pages = document.querySelectorAll('.page');
        this.currentPage = 'problema';
        
        this.init();
    }
    
    init() {
        this.navItems.forEach(item => {
            item.addEventListener('click', () => this.handleNavClick(item));
        });
    }
    
    handleNavClick(item) {
        const targetPage = item.getAttribute('data-page');
        
        if (targetPage === this.currentPage) return;
        
        // Update active navigation item
        this.navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show target page
        this.pages.forEach(page => page.classList.remove('active'));
        const targetPageElement = document.getElementById(targetPage);
        if (targetPageElement) {
            targetPageElement.classList.add('active');
        }
        
        // Update current page
        this.currentPage = targetPage;
        
        // Trigger custom event for chart rendering
        document.dispatchEvent(new CustomEvent('pageChanged', { 
            detail: { page: targetPage } 
        }));
    }
    
    navigateTo(pageName) {
        const targetNav = Array.from(this.navItems).find(
            item => item.getAttribute('data-page') === pageName
        );
        
        if (targetNav) {
            this.handleNavClick(targetNav);
        }
    }
}
