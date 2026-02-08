/**
 * Chart Service
 * Handles chart rendering and management using ApexCharts
 */

import { DEFAULT_CHART_CONFIG, HEATMAP_CONFIG, AXIS_CONFIG } from '../config/chart-config.js';
import { CHART_HEIGHTS } from '../config/constants.js';

export class ChartService {
    constructor() {
        this.charts = new Map();
    }
    
    /**
     * Render a heatmap chart
     */
    renderHeatmap(elementId, data, categories) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series: data,
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                height: CHART_HEIGHTS.large,
                type: 'heatmap'
            },
            ...HEATMAP_CONFIG,
            xaxis: {
                ...AXIS_CONFIG.xaxis,
                type: 'category',
                categories: categories
            },
            yaxis: AXIS_CONFIG.yaxis,
            dataLabels: {
                ...HEATMAP_CONFIG.dataLabels,
                formatter: function(val) {
                    return val + '%';
                }
            },
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
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
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Render a treemap chart
     */
    renderTreemap(elementId, data) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series: [{ data }],
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                height: CHART_HEIGHTS.large,
                type: 'treemap'
            },
            colors: ['#60a5fa', '#34d399', '#a78bfa', '#fbbf24', '#f472b6'],
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false,
                    colorScale: {
                        ranges: [
                            { from: 0, to: 20, color: 'rgba(167, 139, 250, 0.12)' },
                            { from: 21, to: 50, color: 'rgba(59, 130, 246, 0.12)' },
                            { from: 51, to: 100, color: 'rgba(16, 185, 129, 0.12)' },
                            { from: 101, to: 200, color: 'rgba(251, 191, 36, 0.12)' },
                            { from: 201, to: 300, color: 'rgba(239, 68, 68, 0.12)' }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '13px',
                    fontWeight: 600,
                    colors: ['#fafafa']
                },
                formatter: function(text, op) {
                    return [text, op.value + ' clientes'];
                }
            },
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
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

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Render a horizontal bar chart
     */
    renderBarChart(elementId, categories, data) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series: [{ name: 'Vendas', data }],
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                type: 'bar',
                height: CHART_HEIGHTS.medium
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
            colors: ['#60a5fa', '#34d399', '#a78bfa', '#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa', '#fbbf24', '#f472b6'],
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
                ...AXIS_CONFIG.xaxis,
                categories,
                labels: {
                    ...AXIS_CONFIG.xaxis.labels,
                    formatter: function(val) {
                        return '$' + (val / 1000).toFixed(0) + 'K';
                    }
                }
            },
            yaxis: AXIS_CONFIG.yaxis,
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
                y: {
                    formatter: function(val) {
                        return '$' + val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Render a donut chart
     */
    renderDonutChart(elementId, labels, series) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series,
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                type: 'donut',
                height: CHART_HEIGHTS.medium
            },
            labels,
            colors: ['#60a5fa', '#34d399', '#a78bfa'],
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
                                color: '#60a5fa'
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
                ...DEFAULT_CHART_CONFIG.tooltip,
                y: {
                    formatter: function(val) {
                        return val + '%';
                    }
                }
            },
            stroke: {
                width: 2,
                colors: ['#0a0a0a']
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Destroy a specific chart
     */
    destroyChart(elementId) {
        const chart = this.charts.get(elementId);
        if (chart) {
            chart.destroy();
            this.charts.delete(elementId);
        }
    }
    
    /**
     * Destroy all charts
     */
    destroyAll() {
        this.charts.forEach(chart => chart.destroy());
        this.charts.clear();
    }
}
