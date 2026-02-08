/**
 * Charts Module
 * Handles all ApexCharts rendering and configuration
 */

import { cohortData, rfmData, productsData, categoryData } from './data.js';

export class ChartsManager {
    constructor() {
        this.charts = {
            cohort: null,
            rfm: null,
            products: null,
            category: null
        };
        
        this.rendered = {
            cohort: false,
            rfm: false,
            descritiva: false
        };
        
        this.init();
    }
    
    init() {
        // Listen for page changes
        document.addEventListener('pageChanged', (e) => {
            this.handlePageChange(e.detail.page);
        });
    }
    
    handlePageChange(page) {
        if (page === 'cohort' && !this.rendered.cohort) {
            this.renderCohortHeatmap();
            this.rendered.cohort = true;
        } else if (page === 'rfm' && !this.rendered.rfm) {
            this.renderRFMTreemap();
            this.rendered.rfm = true;
        } else if (page === 'descritiva' && !this.rendered.descritiva) {
            this.renderProductsChart();
            this.renderCategoryChart();
            this.rendered.descritiva = true;
        }
    }
    
    renderCohortHeatmap() {
        const options = {
            series: cohortData.series,
            chart: {
                height: 500,
                type: 'heatmap',
                background: 'transparent',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        zoom: false
                    }
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#fff'],
                    fontSize: '11px',
                    fontWeight: 600
                },
                formatter: function(val) {
                    return val + '%';
                }
            },
            colors: ['#06b6d4'],
            xaxis: {
                type: 'category',
                categories: ['M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
                labels: {
                    style: {
                        colors: '#cbd5e1',
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#cbd5e1',
                        fontSize: '12px'
                    }
                }
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: false,
                    colorScale: {
                        ranges: [
                            { from: 0, to: 0, color: '#FF6B9D', name: '0%' },
                            { from: 1, to: 3, color: '#FF6B9D', name: '1-3%' },
                            { from: 4, to: 7, color: '#FFA07A', name: '4-7%' },
                            { from: 8, to: 11, color: '#FFD700', name: '8-11%' },
                            { from: 12, to: 15, color: '#9ACD32', name: '12-15%' },
                            { from: 16, to: 19, color: '#7CB342', name: '16-19%' },
                            { from: 20, to: 24, color: '#66BB6A', name: '20-24%' },
                            { from: 25, to: 100, color: '#4CAF50', name: '25-100%' }
                        ]
                    }
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: function(val) {
                        return val + '% dos clientes retornaram';
                    }
                }
            },
            legend: {
                show: true,
                position: 'bottom',
                labels: {
                    colors: '#cbd5e1'
                }
            },
            grid: {
                borderColor: '#334155',
                padding: {
                    right: 20
                }
            }
        };

        this.charts.cohort = new ApexCharts(document.querySelector("#cohortHeatmap"), options);
        this.charts.cohort.render();
    }
    
    renderRFMTreemap() {
        const options = {
            series: [{
                data: rfmData
            }],
            chart: {
                height: 500,
                type: 'treemap',
                background: 'transparent',
                toolbar: {
                    show: true
                }
            },
            colors: ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'],
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false,
                    colorScale: {
                        ranges: [
                            { from: 0, to: 20, color: '#8b5cf6' },
                            { from: 21, to: 50, color: '#06b6d4' },
                            { from: 51, to: 100, color: '#10b981' },
                            { from: 101, to: 200, color: '#f59e0b' },
                            { from: 201, to: 300, color: '#ec4899' }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '13px',
                    fontWeight: 600,
                    colors: ['#fff']
                },
                formatter: function(text, op) {
                    return [text, op.value + ' clientes'];
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: function(val) {
                        return val + ' clientes neste segmento';
                    }
                }
            },
            legend: {
                show: false
            }
        };

        this.charts.rfm = new ApexCharts(document.querySelector("#rfmTreemap"), options);
        this.charts.rfm.render();
    }
    
    renderProductsChart() {
        const options = {
            series: [{
                name: 'Vendas',
                data: productsData.sales
            }],
            chart: {
                type: 'bar',
                height: 450,
                background: 'transparent',
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    horizontal: true,
                    distributed: true,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            colors: ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'],
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return '$' + (val / 1000).toFixed(1) + 'K';
                },
                offsetX: 30,
                style: {
                    fontSize: '12px',
                    colors: ['#fff'],
                    fontWeight: 600
                }
            },
            xaxis: {
                categories: productsData.categories,
                labels: {
                    style: {
                        colors: '#cbd5e1',
                        fontSize: '11px'
                    },
                    formatter: function(val) {
                        return '$' + (val / 1000).toFixed(0) + 'K';
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#cbd5e1',
                        fontSize: '11px'
                    }
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: function(val) {
                        return '$' + val.toLocaleString();
                    }
                }
            },
            grid: {
                borderColor: '#334155'
            },
            legend: {
                show: false
            }
        };

        this.charts.products = new ApexCharts(document.querySelector("#topProductsChart"), options);
        this.charts.products.render();
    }
    
    renderCategoryChart() {
        const options = {
            series: categoryData.series,
            chart: {
                type: 'donut',
                height: 450,
                background: 'transparent'
            },
            labels: categoryData.labels,
            colors: ['#06b6d4', '#8b5cf6', '#ec4899'],
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '14px',
                    fontWeight: 600,
                    colors: ['#fff']
                },
                dropShadow: {
                    enabled: false
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total',
                                fontSize: '18px',
                                fontWeight: 700,
                                color: '#cbd5e1',
                                formatter: function() {
                                    return '100%';
                                }
                            },
                            value: {
                                fontSize: '24px',
                                fontWeight: 800,
                                color: '#06b6d4'
                            }
                        }
                    }
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    colors: '#cbd5e1'
                },
                fontSize: '13px',
                fontWeight: 600
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: function(val) {
                        return val + '%';
                    }
                }
            },
            stroke: {
                width: 2,
                colors: ['#0f172a']
            }
        };

        this.charts.category = new ApexCharts(document.querySelector("#categoryDonutChart"), options);
        this.charts.category.render();
    }
    
    destroy() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
    }
}
