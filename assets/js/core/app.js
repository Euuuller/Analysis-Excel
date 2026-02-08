/**
 * Dashboard Application
 * Main application class orchestrating all components
 */

import { NavigationService } from '../services/navigation.service.js';
import { ChartService } from '../services/chart.service.js';
import { CohortController } from '../controllers/cohort.controller.js';
import { RFMController } from '../controllers/rfm.controller.js';
import { DescriptiveController } from '../controllers/descriptive.controller.js';
import { APP_CONFIG } from '../config/constants.js';

export class DashboardApp {
    constructor() {
        this.navigationService = null;
        this.chartService = null;
        this.controllers = {};
        
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bootstrap());
        } else {
            this.bootstrap();
        }
    }
    
    bootstrap() {
        console.log(`🚀 ${APP_CONFIG.name} v${APP_CONFIG.version} Starting...`);
        
        // Initialize services
        this.initializeServices();
        
        // Initialize controllers
        this.initializeControllers();
        
        console.log('✨ Dashboard Application Ready!');
    }
    
    initializeServices() {
        this.navigationService = new NavigationService();
        console.log('✅ Navigation Service initialized');
        
        this.chartService = new ChartService();
        console.log('✅ Chart Service initialized');
    }
    
    initializeControllers() {
        this.controllers.cohort = new CohortController(this.chartService);
        console.log('✅ Cohort Controller initialized');
        
        this.controllers.rfm = new RFMController(this.chartService);
        console.log('✅ RFM Controller initialized');
        
        this.controllers.descriptive = new DescriptiveController(this.chartService);
        console.log('✅ Descriptive Controller initialized');
    }
    
    destroy() {
        if (this.chartService) {
            this.chartService.destroyAll();
        }
        console.log('👋 Dashboard Application Destroyed');
    }
}
