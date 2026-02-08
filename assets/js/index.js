/**
 * Application Entry Point
 * Initializes the dashboard application
 */

import { DashboardApp } from './core/app.js';

// Initialize application
const app = new DashboardApp();

// Expose app instance globally for debugging
window.dashboardApp = app;

// Export for potential module usage
export default app;
