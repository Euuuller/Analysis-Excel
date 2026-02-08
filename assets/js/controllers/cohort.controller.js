/**
 * Cohort Controller
 * Controls the cohort analysis page
 */

import { CohortModel } from '../models/cohort.model.js';
import { ChartService } from '../services/chart.service.js';
import { EVENTS } from '../config/constants.js';

export class CohortController {
    constructor(chartService) {
        this.chartService = chartService;
        this.model = new CohortModel();
        this.rendered = false;
        
        this.init();
    }
    
    init() {
        document.addEventListener(EVENTS.PAGE_CHANGED, (e) => {
            if (e.detail.page === 'cohort' && !this.rendered) {
                this.render();
            }
        });
    }
    
    render() {
        const data = this.model.getData();
        this.chartService.renderHeatmap('cohortHeatmap', data.series, data.categories);
        this.rendered = true;
    }
}
