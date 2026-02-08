/**
 * RFM Controller
 * Controls the RFM segmentation page
 */

import { RFMModel } from '../models/rfm.model.js';
import { ChartService } from '../services/chart.service.js';
import { EVENTS } from '../config/constants.js';

export class RFMController {
    constructor(chartService) {
        this.chartService = chartService;
        this.model = new RFMModel();
        this.rendered = false;
        
        this.init();
    }
    
    init() {
        document.addEventListener(EVENTS.PAGE_CHANGED, (e) => {
            if (e.detail.page === 'rfm' && !this.rendered) {
                this.render();
            }
        });
    }
    
    render() {
        const data = this.model.getData();
        this.chartService.renderTreemap('rfmTreemap', data);
        this.rendered = true;
    }
}
