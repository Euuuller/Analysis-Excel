/**
 * Navigation Service
 * Handles page navigation and routing
 */

import { PAGES, EVENTS } from '../config/constants.js';

export class NavigationService {
    constructor() {
        this.currentPage = PAGES.PROBLEMA;
        this.navItems = document.querySelectorAll('.nav-item');
        this.pages = document.querySelectorAll('.page');
        
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
        
        this.navigateTo(targetPage);
    }
    
    navigateTo(pageName) {
        // Update navigation state
        this.navItems.forEach(nav => nav.classList.remove('active'));
        const targetNav = Array.from(this.navItems).find(
            item => item.getAttribute('data-page') === pageName
        );
        if (targetNav) {
            targetNav.classList.add('active');
        }
        
        // Update page visibility
        this.pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Update current page
        const previousPage = this.currentPage;
        this.currentPage = pageName;
        
        // Dispatch custom event
        this.dispatchPageChangeEvent(pageName, previousPage);
    }
    
    dispatchPageChangeEvent(newPage, oldPage) {
        const event = new CustomEvent(EVENTS.PAGE_CHANGED, {
            detail: {
                page: newPage,
                previousPage: oldPage
            }
        });
        document.dispatchEvent(event);
    }
    
    getCurrentPage() {
        return this.currentPage;
    }
}
