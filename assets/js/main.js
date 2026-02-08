/**
 * Main Application Entry Point
 * Initializes all modules and manages application lifecycle
 */

import { Navigation } from './navigation.js';
import { ChartsManager } from './charts.js';

class DashboardApp {
    constructor() {
        this.navigation = null;
        this.chartsManager = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bootstrap());
        } else {
            this.bootstrap();
        }
    }
    
    bootstrap() {
        console.log('🚀 Dashboard Application Starting...');
        
        // Initialize navigation
        this.navigation = new Navigation();
        console.log('✅ Navigation initialized');
        
        // Initialize charts manager
        this.chartsManager = new ChartsManager();
        console.log('✅ Charts manager initialized');
        
        console.log('✨ Dashboard Application Ready!');
    }
    
    destroy() {
        if (this.chartsManager) {
            this.chartsManager.destroy();
        }
        console.log('👋 Dashboard Application Destroyed');
    }
}

// Initialize application
const app = new DashboardApp();

// Expose app instance globally for debugging
window.dashboardApp = app;
