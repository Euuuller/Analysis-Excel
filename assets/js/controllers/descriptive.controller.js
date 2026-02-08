/**
 * Descriptive Controller
 * Controls the descriptive analysis page
 */

import { ProductModel } from '../models/product.model.js';
import { ChartService } from '../services/chart.service.js';
import { EVENTS } from '../config/constants.js';

export class DescriptiveController {
    constructor(chartService) {
        this.chartService = chartService;
        this.model = new ProductModel();
        this.rendered = false;
        
        this.init();
    }
    
    init() {
        document.addEventListener(EVENTS.PAGE_CHANGED, (e) => {
            if (e.detail.page === 'descritiva' && !this.rendered) {
                this.render();
            }
        });
    }
    
    render() {
        const products = this.model.getProducts();
        const categories = this.model.getCategories();
        
        // Render products bar chart
        this.chartService.renderBarChart(
            'topProductsChart',
            products.categories,
            products.sales
        );
        
        // Render category donut chart
        this.chartService.renderDonutChart(
            'categoryDonutChart',
            categories.labels,
            categories.series
        );
        
        this.rendered = true;
    }
}
